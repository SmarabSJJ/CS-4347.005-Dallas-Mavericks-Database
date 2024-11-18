import { useState } from "react";
import Form from "./Form";
import Table from "./Table";

const Content = ({state}) => {
  const [showForm, setShowForm] = useState(true)
  const [input, setInput] = useState("Input Statement")

  const toggleComponent = () => {
    setShowForm(!showForm)
  }

  return (
    <div className="content">
      {
        showForm ? (
          <Form state={state} toggleComponent={toggleComponent} input={input}/>
        ) : (
          <Table input={input} state={state}/>
        )
      }
    </div>
  );
}
 
export default Content;