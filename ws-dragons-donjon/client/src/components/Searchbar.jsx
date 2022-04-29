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
  handleHeaderPort,
  requestHeaderPort
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
        <div>Spécifiez le port (8080 de base)<input type="text" value={requestHeaderPort} onChange={handleHeaderPort} /></div>{" "}
      </div>{" "}
      <div> {requestHeaderPort}{requestURL} </div>{" "}
      <div> <textarea name="body" cols="40" rows="5" value={bodyContent} onChange={handleBodyContent}></textarea></div> {" "}
      <div><input type="text" value={requestHeaderName} onChange={handleHeaderName} /><input type="text" value={requestHeaderValue} onChange={handleHeaderValue} /></div>{" "}
      <button onClick={sendRequest}>valider la requete </button>{" "}
    </>
  );
}
