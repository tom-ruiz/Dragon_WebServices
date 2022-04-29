import { useEffect, useState } from 'react';
import './App.css';
import Body from './components/Body';
import Headers from './components/Headers';
import Response from './components/Response';
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

  const [bodyContent, setBodyContent] = useState('')
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
  const [response, setResponse] = useState("")

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
      <hr/>

      <Body 
        bodyContent={bodyContent}
        handleChangeContent={handleChangeContent}
        />
      <Headers
      headers={headers}
      handleHeadersChange={handleHeadersChange}
      />
        <hr/>
      <Response
        response={response}/>
        <hr/>
    </div>
  );
}
export default App;