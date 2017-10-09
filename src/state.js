import { observable } from "mobx";

var appState = observable({
  counter: 0
});

export default appState;
