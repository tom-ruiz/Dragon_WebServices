import { useEffect, useState } from 'react';
import './App.css';
import Table from './components/Table';
import SearchBar from './components/Searchbar';
import Response from './components/Response';
const axios = require('axios');

function App() {
  const url = 'http://localhost';
  let baseConfig = {
    method: 'GET',
    headers: {
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
    },
    responseType: "json",
    body: '',
  };
  const makeAPICall = async () => {
    axios(baseConfig)
      .then((function (reponse) {
        console.log(reponse.data)
        //envoyer les infos au composant "response.jsx"
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

  const [requestHeaderName, setHeaderName] = useState("");

  const handleHeaderName = (event) => {
    setHeaderName(event.target.value)
    console.log(event.target.value);
  }

  const [requestHeaderValue, setHeaderValue] = useState("");

  const handleHeaderValue = (event) => {
    setHeaderValue(event.target.value)
    console.log(event.target.value);
  }

  const sendRequest = () => {
    console.log('requete lancée');
    if(requestType !== ""){
      baseConfig.method = requestType;
    }
    console.log(baseConfig.method);
    if(requestURL !== ""){
      baseConfig.url = requestURL;
    }
    console.log(baseConfig);
    if(requestBody !== ""){
      baseConfig.body = requestBody;
    }
    if(requestHeaderName !== "" || requestHeaderValue !== "" ){
      baseConfig.headers = baseConfig.headers + "," + requestHeaderName + " : " + requestHeaderValue
    }
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

        requestHeaderName={requestHeaderName}
        handleHeaderName={handleHeaderName}

        requestHeaderValue={requestHeaderValue}
        handleHeaderValue={handleHeaderValue}

        sendRequest={sendRequest}
      />
      <Table />
      <Response/>
    </div>
  );
}
export default App;