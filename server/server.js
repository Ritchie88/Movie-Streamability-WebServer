const express = require("express")
const axios = require("axios")
const app = express()
const PORT = process.env.PORT || 3001;

const defaultHeader = {
  'X-RapidAPI-Key': 'd1fd1dcde2msh5442accb54d0863p1e3eeajsn5341b34fb6c6',
  'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
};

async function collectMovieTitle(title = ""){
  const options = {
    method: 'GET',
    url: 'https://streaming-availability.p.rapidapi.com/v2/search/title',
    params: {
      title: t,
      country: 'us',
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
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }

  return result;
}

app.get("/", function(req, res) {
  res.send("It's working!")
})

app.get("/api", (req, res) => {
  console.log(collectMovieTitle("batman"));
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log("Server listening on port 3000")
})