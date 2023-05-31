import {postCall,getCall} from "./apiCommands";

function getAPIToken(){
    data = {"grant_type": "password", 
            "username":"ryanritchie88",
            "password": "Murphy12"}
    url = "https://api.letterboxd.com/api/v0/auth/token";
    postCall(url,data);
}

function collectMovieTitle(){

}
