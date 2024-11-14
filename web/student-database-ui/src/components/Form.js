const Form = () => {
  return (  
    <div className="form">
      <form action="What is the action">
          <label htmlFor="input-field"> Input Field </label>
          <textarea name="input-field" id="input-field"></textarea>
          <input type="submit"/>
        </form>
    </div>
  );
}
 
export default Form;