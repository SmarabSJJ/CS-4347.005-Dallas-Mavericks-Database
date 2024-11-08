import './menu.css';

const Menu = () => {
  return ( 
    <div className="menu">

      <div className="buttons" >
        <nav>
        <a className='query' href='#'> Query </a>
        <a className='insert' href='#'> Insert </a>
        <a className='update' href='#'> Update </a>
        <a className='delete' href='#'> Delete </a>
        <a className='exit' href='#'> Exit </a>
        </nav>
      </div>
    </div>
  );
}
 
export default Menu;