const Menu = () => {

  function handleClick(event){ // Basic handleClick Function
    let option_selected = event.target.className;
    switch(option_selected){
      case 'query':
        
        break;
      case 'insert':
        break;
      case 'update':
        break;
      case 'delete':
        break;
      case 'exit':
        break;
      default:
        break;
    }
  }

  return ( 
    <div className="menu">
      <div className="buttons" >
        <button className='query' onClick={e => handleClick(e)} href='#'> Query </button>
        <button className='insert' onClick={e => handleClick(e)} href='#'> Insert </button>
        <button className='update' onClick={e => handleClick(e)} href='#'> Update </button>
        <button className='delete' onClick={e => handleClick(e)} href='#'> Delete </button>
        <button className='exit' onClick={e => handleClick(e)} href='#'> Exit </button>
      </div>
    </div>
  );
}
 
export default Menu;