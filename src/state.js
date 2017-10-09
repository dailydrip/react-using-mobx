import { observable, action } from "mobx";
import {create} from "apisauce";


const api = create({
  baseURL: "https://api.github.com"
})


var appState = observable({
  counter: 0,
  userInformation: {},
  increment: action.bound(function() {
    this.counter++;
  }),
  decrement: action.bound(function(){
    this.counter--;
  }),
  getUserInformation: action.bound(function(){
    api.get("/users/knewter").then(response =>  { this.userInformation = response.data })
  })
});

export default appState;
