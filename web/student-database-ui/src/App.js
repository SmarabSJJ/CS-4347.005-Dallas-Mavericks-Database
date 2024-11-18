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
        return { applicationState: 'query' }
      case 'insert':
        return { applicationState: 'insert' }
      case 'update':
        return { applicationState: 'update'}
      case 'delete':
        return {applicationState: 'delete' }
      default:
        return {applicationState: 'exit'}
    }
  }

  const [state, dispatch] = useReducer(reducer, { applicationState: 'query' })

  return (
    <div className="App">
      <Logo/>
      <Menu dispatchProp={dispatch}/>
      <Content/>
    </div>
  );
}

export default App;
