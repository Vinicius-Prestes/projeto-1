import '../css/nav.css'

const Nav=()=>{
    return(
        
<nav className="nav">
 <div className="nav-logo">
 <img src='src\assets\logo2.jpg' alt="SportMax Logo" />
  </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#produtos">Produtos</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
    </nav>
        
    );
}
export default Nav