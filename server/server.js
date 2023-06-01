const express = require("express");
const axios = require("axios");
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3001;

const defaultHeader = {
  'X-RapidAPI-Key': 'd1fd1dcde2msh5442accb54d0863p1e3eeajsn5341b34fb6c6',
  'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
};

async function collectMovieTitle(t = ""){
  const options = {
    method: 'GET',
    url: 'https://streaming-availability.p.rapidapi.com/v2/search/title',
    params: {
      title: t,
      country: 'ca',
      show_type: 'movie',
      output_language: 'en'
    },
    headers: {
      'X-RapidAPI-Key': '0213f8300amsh78ad1a66494a92ep1f49a7jsn90fdedb088eb',
      'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
    //console.log(response.data);
    return JSON.stringify(response.data);
  } catch (error) {
    console.error(error);
  }

}


app.get("/", function(req, res) {
  res.send("It's working!")
})

app.get("/api", (req, res) => {
  //console.log(collectMovieTitle("batman"));
  res.json({ message: "Hello from server!" });
});

app.get("/title", (req, res) => {
  const message = collectMovieTitle("batman").then(ret=>{

    console.log(message); 
    res.send(message);
  });
});

app.listen(PORT, () => {
  console.log("Server listening on port 3000")
})