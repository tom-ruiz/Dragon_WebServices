import { useEffect } from 'react';
import './App.css';
import SearchBar from './components/Searchbar';
const axios = require('axios');

function App() {
  let url = 'http://localhost:8080/api';
  let baseConfig = {
    method: 'GET',
    headers: {
      "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Origin": "https://www.example.com",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
    },
    responseType: "json",
    url: url
  };
  const makeAPICall = async () => {
    axios(baseConfig)
      .then((function(reponse){
        console.log(reponse.data)
      }))
  }
  useEffect(() => {
    makeAPICall();
  }, [])
  return (
    <div className="App">
      <h1>React Axios fecth</h1>
      <SearchBar/>
    </div>
  );
}
export default App;