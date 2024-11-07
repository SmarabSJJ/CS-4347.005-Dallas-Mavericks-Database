import logo from '../public/logo.png';
const Logo = () => {

  const img_ratio = 480/720;
  const img_width = 200;
  return (  
    <div className="logo">
      <img src={logo} alt="Mavericks Logo" width={img_width} height={img_width * img_ratio}/>
      <div className="inner-logo">
        <h1>Dallas Mavericks</h1>
        <h2>A student designed database</h2>
      </div>
    </div>
  );
}
 
export default Logo;