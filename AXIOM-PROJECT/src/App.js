import React, { useState } from "react";
import "./styles.css";
import SearchBar from "./components/SearchBar";
import Grid from "./components/Grid";
import axios from "axios";
import Spinner from "./components/Spinner";

function App() {
  const [err, setErr] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("all");

  const handleSearch = (e) => {
    e.preventDefault();
    const regex = /https:\/\/github.com\/[a-zA-Z0-9\-_]*\/[a-zA-Z0-9\-_]*$/;
    const checkedStr = regex.exec(e.target.value);
    if (checkedStr) {
      const [, owner, repo] = checkedStr[0].matchAll(/\/[\w0-9\-_.]+/g);
      setLoading(true);
      axios
        .get(`https://api.github.com/repos${owner}${repo}/issues`)
        .then((response) => {
          setData(response.data);
          setLoading(false);
          setErr(false);
          setFilter("all");
        })
        .catch((e) => setErr(e));
    } else {
      setErr(
        <p style={{ color: "red", font: 200 }}>
          Invalid form, please enter URL in the format of:
          https://github.com/"owner"/"repo"
        </p>
      );
      setLoading(false);
    }
  };

  const handleFilter = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
  };

  const filterData = (data, filter) => {
    if (filter !== "all") {
      if (filter === "pull") return data.filter((item) => item.pull_request);
      else return data.filter((item) => item.state === filter);
    }
    return data;
  };

  return (
    <div className="App container center-align">
      {!loading && (
        <SearchBar
          handleChange={handleSearch}
          up={data && true}
          handleFilter={handleFilter}
        />
      )}
      {err}
      {data && !loading ? (
        <Grid issues={filterData(data, filter)} />
      ) : (
        loading && <Spinner />
      )}
    </div>
  );
}

export default App;
