import React, { useState } from "react";
import "../style/searchbar.scss";

export default function SearchBar({
  requestURL,
  handleURLChange,
  requestType,
  handleRequestType,
  sendRequest,
  bodyContent,
  handleBodyContent,
  requestHeaderName,
  handleHeaderName,
  requestHeaderValue,
  handleHeaderValue,
}) {
  return (
    <div className="searchmain">
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
      <div>
        {" "}
        <textarea
          name="body"
          cols="40"
          rows="5"
          value={bodyContent}
          onChange={handleBodyContent}
          className="textarea"
        ></textarea>
        {bodyContent}
      </div>{" "}
      <div>
        <table className="table-main">
          <tr className="table-head">
            <td>Key</td>
            <td>Value</td>
          </tr>
          <tr>
            <td>
              {" "}
              <input
                type="text"
                value={requestHeaderName}
                onChange={handleHeaderName}
              />
            </td>
            <td>
              {" "}
              <input
                type="text"
                value={requestHeaderValue}
                onChange={handleHeaderValue}
              />
            </td>
          </tr>
        </table>
      </div>{" "}
      <button onClick={sendRequest}>valider la requete </button>{" "}
    </div>
  );
}
