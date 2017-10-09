import { observable, action } from "mobx";
import {create} from "apisauce";
import Api from "./Api"

var appState = observable({
  counter: 0,
  Api: Api,
  userInformation: {},
  increment: action.bound(function() {
    this.counter++;
  }),
  decrement: action.bound(function(){
    this.counter--;
  }),
  getUserInformation: action.bound(function(){
    this.Api.getUserInformation().then(response =>  { this.userInformation = response.data })
  })
});

export default appState;
