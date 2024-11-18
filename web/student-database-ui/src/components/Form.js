import { useEffect } from "react";

const Form = ({state, toggleComponent, input}) => {

  const submitForm = () => {
    console.log(state.applicationState)
    toggleComponent()
    let textarea = document.getElementById('input-field')
    input = textarea.value
  }


  return (  
    <div className="form">
      <form>
          <label htmlFor="input-field"> Input Field </label>
          <textarea class="text" name="input-field" id="input-field">Submit Input</textarea>
          <button type='button' onClick={submitForm}>Submit</button>
        </form>
    </div>
  );
}
 
export default Form;