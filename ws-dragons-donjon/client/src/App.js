import { useEffect, useState } from 'react';
import './App.css';
import Table from './components/Table';
import SearchBar from './components/Searchbar';
const axios = require('axios');

function App() {
  let url = 'http://localhost:8080/api';
  let baseConfig = {
    method: 'GET',
    headers: {
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Origin": "https://www.example.com",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
    },
    responseType: "json",
    url: url
  };
  const makeAPICall = async () => {
    axios(baseConfig)
      .then((function (reponse) {
        console.log(reponse.data)
      }))
  }
  useEffect(() => {
    makeAPICall();
  }, [])

  const [requestURL, setRequestURL] = useState("ok");
  const handleURLChange = (event) => {
    setRequestURL(event.target.value)
  }

  const [requestType, setRequestType] = useState("");

  const handleRequestType = (event) => {
    setRequestType(event.target.value)
    console.log(event.target.value);
}
  const sendRequest = () => {
    console.log('requete lancée')
  }

  return (
    <div className="App">
      <h1>React Axios fecth</h1>
      <SearchBar
        requestURL={requestURL}
        handleURLChange={handleURLChange}

        requestType={requestType}
        handleRequestType={handleRequestType}
        sendRequest={sendRequest}
      />
      <Table />
    </div>
  );
}
export default App;