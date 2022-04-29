import { useEffect, useState } from 'react';
import './App.css';
import Body from './components/Body';
import Headers from './components/Headers';
import Response from './components/Response';
import SearchBar from './components/Searchbar';
import Table from './components/Table';
const axios = require('axios');

function App() {
  let port = 8080
  let url = `http://localhost:8080/`;
  let baseConfig = {
    method: 'GET',
    headers: {
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET,DELETE, OPTIONS",
    },
    responseType: "json",
    url: url,
    body: '',
    port : port
  };
  const makeAPICall = async () => {
    console.log(axios(baseConfig))
    axios(baseConfig)
      .then((function (reponse) {
        console.log("responseData",reponse.data)
        setLastResponse(reponse.data)
        console.log("resp : ",lastResponse);
      }))
      .catch(function (error) {
        setLastResponse(error.message)
        console.log("resp : ", lastResponse);
      })
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

  const [requestHeaderPort, setHeaderPort] = useState("");

  const handleHeaderPort = (event) => {
    setHeaderPort(event.target.value)
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
    if(requestHeaderPort !== ""){
      console.log(requestHeaderPort)
      port = requestHeaderPort;
    }
    if(requestHeaderName !== "" || requestHeaderValue !== "" ){
      if(requestHeaderName === "x-auth-token"){
        baseConfig.headers = {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
          "x-auth-token" : `${requestHeaderValue}`
        }
      }
    }
    makeAPICall();
  }

  const handleChangeContent = (event) => {
      setBodyContent(event.target.value)
  }

  const [params, setParams] = useState({})
  const [headers, setHeaders] = useState([{headerKey : 'test', headerValue: 'test2'}])
  const handleHeadersChange = e => {
    // let newArr = [...headers]
    // newArr[index] = e.target.value
    // setHeaders(newArr)
  }
  const [lastResponse, setLastResponse] = useState("1")

  return (
    <div className="App">
      <h1>Bienvenue dans notre donjon !</h1>
      <Response
        response={lastResponse}/>
      <div class="barre"></div>
      <p>La barre ci-dessous vous permet de requêter l'api et explorer le donjon !</p>
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

        requestHeaderPort={requestHeaderPort}
        handleHeaderPort={handleHeaderPort}

        sendRequest={sendRequest}
      />
      <hr/>
        <Table />

    </div>
  );
}
export default App;