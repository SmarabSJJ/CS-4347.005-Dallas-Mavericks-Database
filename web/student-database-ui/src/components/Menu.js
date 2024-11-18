const Menu = ({dispatchProp, state}) => {

  function handleClick(event){ // Basic handleClick Function
    let option_selected = event.target.className.split(" ");
    
    let parentElement = document.querySelector(".buttons")
    let children = parentElement.children;

    for(let i = 0; i < children.length; i++){
      if(children[i].classList.contains(option_selected[0])){
        children[i].classList.add("onclick")
      } else {
        children[i].classList.remove("onclick")
      }
    }

    dispatchProp({type: option_selected[0]})
  }

  return ( 
    <div className="menu">
      <div className="buttons" >
        <button className='query onclick' onClick={e => handleClick(e)}> Query </button>
        <button className='insert' onClick={e => handleClick(e)} > Insert </button>
        <button className='update' onClick={e => handleClick(e)} > Update </button>
        <button className='delete' onClick={e => handleClick(e)} > Delete </button>
        <button className='exit' onClick={e => handleClick(e)} > Exit </button>
      </div>
    </div>
  );
}
 
export default Menu;