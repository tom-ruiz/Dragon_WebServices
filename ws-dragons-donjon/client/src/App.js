import { useEffect, useState } from 'react';
import './App.css';
import Table from './components/Table';
import SearchBar from './components/Searchbar';
const axios = require('axios');

function App() {
  const url = 'http://localhost:8080/';
  let baseConfig = {
    method: 'GET',
    headers: {
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
    },
    responseType: "json",
    url: url,
    body: ''
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

  const [requestBody, setBodyContent] = useState("");

  const handleBodyContent = (event) => {
    setBodyContent(event.target.value)
    console.log(event.target.value);
  }

  const sendRequest = () => {
    console.log('requete lancée');
    baseConfig.method = requestType;
    console.log(baseConfig.method);
    baseConfig.url = requestURL;
    console.log(baseConfig);
    baseConfig.body = requestBody;
    makeAPICall();
  }

  return (
    <div className="App">
      <h1>React Axios fecth</h1>
      <SearchBar
        requestURL={requestURL}
        handleURLChange={handleURLChange}

        requestType={requestType}
        handleRequestType={handleRequestType}

        requestBody={requestBody}
        handleBodyContent={handleBodyContent}

        sendRequest={sendRequest}
      />
      <Table />
    </div>
  );
}
export default App;