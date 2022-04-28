import React, { useState } from "react";
import "../style/searchbar.scss";

export default function SearchBar({
  requestURL,
  handleURLChange,
  requestType,
  handleRequestType,
  sendRequest,
}) {
  return (
    <>
      <div className="searchbar">
        <label for="pet-select"> Type de requete: </label>

        <select
          value={requestType}
          onChange={handleRequestType}
          name="requestType"
          className="select"
        >
          <option value="GET"> GET </option>{" "}
          <option value="POST"> POST </option>{" "}
          <option value="PUT"> PUT </option>{" "}
          <option value="DELETE"> DELETE </option>{" "}
        </select>

        <input
          type="text"
          value={requestURL}
          onChange={handleURLChange}
          className="input"
        />
      </div>{" "}
      <div> {requestURL} </div>{" "}
      <button onClick={sendRequest}>valider la requete </button>{" "}
    </>
  );
}
