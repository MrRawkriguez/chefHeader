import logo from "./assets/chef-claude-icon.png"
import "./Header.css"

function Header (){

    return(
        <header className="header">
            <img src={logo} className="logo" alt="logo"/>
            <span className="header-text">Chef Claude</span>
        </header>
    )
}

export default Header