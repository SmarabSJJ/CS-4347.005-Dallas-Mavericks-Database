import './menu.css';

const Menu = () => {
  return ( 
    <div className="menu">

      <div className="buttons" >
        <a className='query'> Query </a>
        <a className='insert'> Insert </a>
        <a className='update'> Update </a>
        <a className='delete'> Delete </a>
        <a className='exit'> Exit </a>
      </div>
    </div>
  );
}
 
export default Menu;