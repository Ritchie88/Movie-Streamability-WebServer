import Header from "./Header";
import axios from "axios";

function SearchPage() {
    
    return (
      <div className="HomePage">
        <Header />
        <header className="Home-Header">
        <button onClick={async () => {
            const options = {
              method: 'GET',
              url: 'https://streaming-availability.p.rapidapi.com/v2/search/title',
              params: {
                title: 'batman',
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
              document.getElementById("123").innerHTML = response.data;
              return JSON.stringify(response.data);
            } catch (error) {
              console.error(error);
            }
            
            //const response = (await fetch("/title"));
            //let movieList = await response.json();
          }
          }>Press Me </button>
          <div id="123" />
          <p>
            Search For Movie
          </p>
        </header>
      </div>
    );
  }
  
  export default SearchPage;