import Logo from "./components/Logo";
import Menu from "./components/Menu";
import Content from "./components/Content";
import Table from "./components/Table";
import React, {useState, useReducer} from "react";

function App() {

  function reducer(state, action) {
    console.log(action.type)
    switch(action.type){
      case 'query':
        return { applicationState: 'Query' }
      case 'insert':
        return { applicationState: 'Insert' }
      case 'update':
        return { applicationState: 'Update'}
      case 'delete':
        return {applicationState: 'Delete' }
      default:
        return {applicationState: 'Exit'}
    }
  }

  const [state, dispatch] = useReducer(reducer, { applicationState: 'Query' })

  return (
    <div className="App">
      <Logo/>
      <Menu dispatchProp={dispatch}/>
      <Content state={state}/>
    </div>
  );
}

export default App;
