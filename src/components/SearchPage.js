import Header from "./Header";
import axios from "axios";

function SearchPage() {
    
    //Used to Clear Passed in element
    function clearPage(toClear){
      while(toClear.firstChild){
        toClear.removeChild(toClear.firstChild);
      }
    }

    return (
      <div className="SearchPage">
        <Header />
        <body id="contents">
          <input type = "text" id = "input"/>
          <button onClick={async () => {
            //Function for onClick, Sends Request to Movie Database and receives all movies which fall under entered title
              const titleInput = document.getElementById("input").value;
              const options = {
                method: 'GET',
                url: 'https://streaming-availability.p.rapidapi.com/v2/search/title',
                params: {
                  title: titleInput,
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
                //once the request is made, if sucessfull the ressults will be displayed to user to click into further
                const response = await axios.request(options);
                let printRes = document.getElementById("printRes");
                //Clear the previous results
                clearPage(printRes);
                const results = response.data["result"];
                //Add the new results to the page
                for(let i = 0; i<results.length; i++){
                  let newEntry = document.createElement("a");
                  console.log(results[i]);
                  newEntry.innerHTML = results[i]["title"] + ", " + results[i]["year"];
                  newEntry.href = "/movie?title=" + results[i]["title"] + "&year=" + results[i]["year"];
                  printRes.appendChild(newEntry); 
                }
              } catch (error) {
                console.error(error);
              }
              
              //const response = (await fetch("/title"));
              //let movieList = await response.json();
            }
            }>Press Me </button>


            <li id = "printRes"/>
          </body>
      </div>
    );
  }
  
  export default SearchPage;