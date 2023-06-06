import Header from "./Header";
import axios from "axios";
import "./Formatting/SearchPage.css"

function SearchPage() {
    
    //Used to Clear Passed in element
    function clearPage(toClear){
      while(toClear.firstChild){
        toClear.removeChild(toClear.firstChild);
      }
    }

    //Adds Description to Each movie when hovered over
    function populateDetails(movie,desc){
      let length = document.createElement("p");
      length.innerHTML = "Runtime: " + movie["runtime"] + " Minutes";
      let director = document.createElement("p");
      director.innerHTML = "Directors: ";

      for(let i = 0;i<movie["directors"].length;i++){
        director.innerHTML += movie["directors"][i];
        if(i !== movie["directors"].length-1){
          director.innerHTML += ", ";
        }
      }


      let review = document.createElement("img");
      let movieReview = movie["imdbRating"];

      review.innerHTML = "Review: ";

      if(movieReview <= 10){
        review.src = "/images/0.5-Star.png";
      }else if(movieReview <= 20){
        review.src = "/images/1-Star.png";
      }else if(movieReview <= 30){
        review.src = "/images/1.5-Star.png";
      }else if(movieReview <= 40){
        review.src = "/images/2-Star.png";
      }else if(movieReview <= 50){
        review.src = "/images/2.5-Star.png";
      }else if(movieReview <= 60){
        review.src = "/images/3-Star.png";
      }else if(movieReview <= 70){
        review.src = "/images/3.5-Star.png";
      }else if(movieReview <= 80){
        review.src = "/images/4-Star.png";
      }else if(movieReview <= 90){
        review.src = "/images/4.5-Star.png";
      }else if(movieReview <= 100){
        review.src = "/images/5-Star.png";
      }

      desc.appendChild(length);
      desc.appendChild(director);
      desc.appendChild(review);
      
    }

    return (
      <div class="searchPage">
        <Header />
        <body>
          <div class="searchInput">
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

                  let description = document.createElement("div");
                  description.classList.add("details");
                  populateDetails(results[i],description);
                  let movie = document.createElement("li");
                  let poster = document.createElement("img");
                  let newEntry = document.createElement("a");

                  poster.src = results[i]["posterURLs"]["original"];
                  //Add the URL to the Block
                  newEntry.innerHTML = results[i]["title"] + ", " + results[i]["year"];
                  newEntry.href = "/movie?title=" + results[i]["title"] + "&year=" + results[i]["year"];
                  
                  movie.appendChild(poster);
                  movie.appendChild(newEntry);
                  movie.appendChild(description);
                  printRes.appendChild(movie); 
                }
              } catch (error) {
                console.error(error);
              }
              
              //const response = (await fetch("/title"));
              //let movieList = await response.json();
            }
            }>Search </button>
            </div>


            <li id = "printRes" class = "results"/>
          </body>
      </div>
    );
  }
  
  export default SearchPage;