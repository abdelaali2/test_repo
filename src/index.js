import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import SearchBar from "./SearchBar";
import reportWebVitals from "./reportWebVitals";
import SearchCard from "./SearchCard";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SearchBar />
    <SearchCard
      nasa_ID="ID 1"
      title="Title 1"
      description="Desc. 1"
      thumbnail="#"
    />
  </React.StrictMode>
);

reportWebVitals();
