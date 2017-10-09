import {create} from "apisauce";

const api = create({
  baseURL: "https://api.github.com"
})

const GithubApi ={
  getUserInformation: function(){
    return api.get("/users/knewter");
  }
}

export default GithubApi;
