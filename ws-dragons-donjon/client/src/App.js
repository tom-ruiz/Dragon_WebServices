import { useEffect } from 'react';
import './App.css';
const axios = require('axios');

function App() {
  let url = 'http://141.95.153.155/';
  const baseConfig = {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin' : '*'
    },
    responseType: "json",
    url: url
  };
  const makeAPICall = async () => {
    axios(baseConfig)
      .then((function(reponse){
        reponse.header("Access-Control-Allow-Origin", "*");
        console.log(reponse.data)
      }))
  }
  useEffect(() => {
    makeAPICall();
  }, [])
  return (
    <div className="App">
      <h1>React Axios fecth</h1>
    </div>
  );
}
export default App;