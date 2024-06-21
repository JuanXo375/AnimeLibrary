import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import IconMenu from "../../assets/IconMenu";

const Menu = () => {
  const getColorScheme = () => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme){
      return localTheme;
    }else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
      console.log("🚀 ~ getColorScheme ~ oscuro:", 'oscuro')
      return "oscuro";
    } else{
      console.log("🚀 ~ getColorScheme ~ :", "claro")
      return "claro";
    }
  }

  const [theme, setTheme] = useState<string>(getColorScheme())

  const HandleCambioTema = () => {
    const actualTheme = getColorScheme();
    const newTheme = actualTheme == "claro" ? "oscuro" : "claro";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  }

  useEffect(()=> {
    document.documentElement.setAttribute("data-tema", theme);
    console.log("🚀 ~ Menu ~ theme:", theme)
    
  },[theme])

  return (
    <nav className="navbar">
      <IconMenu color="var(--color-texto)" className="icon"></IconMenu>
      <p>BakAnime</p>
      <button onClick={HandleCambioTema}>{theme.toUpperCase()}</button>
      <Link to='/'>Busqueda</Link>
      <Link to='/h'>Perfil</Link>
    </nav>
  )
}

export default Menu
