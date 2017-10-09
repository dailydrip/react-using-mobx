import { observable, action } from "mobx";

var appState = observable({
  counter: 0,
  increment: action.bound(function() {
    this.counter++;
  }),
  decrement: action.bound(function(){
    this.counter--;
  })
});

export default appState;
