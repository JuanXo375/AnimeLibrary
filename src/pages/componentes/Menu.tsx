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

  const [theme, setTheme] = useState<string>(getColorScheme());
  const [menu, setMenu] = useState<boolean>(false);

  const HandleCambioTema = () => {
    const actualTheme = getColorScheme();
    const newTheme = actualTheme == "claro" ? "oscuro" : "claro";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  }

  const cerrarToggle = () => {
    setMenu(false)
  }

  useEffect(()=> {
    document.documentElement.setAttribute("data-tema", theme);
  },[theme])

  return (
    <>
      <nav className="navbar">
        <IconMenu color="var(--color-texto)" 
        className={`icon_menu effect_button ${menu?'icon_menu-change':''}`}
        onClick={() => setMenu((prev)=>!prev)}/>
        <p>BakAnime</p>
        <button onClick={HandleCambioTema} className="button-centrar">{theme.toUpperCase()}</button>
        <Link onClick={cerrarToggle} to='/'>Busqueda</Link>
        <Link onClick={cerrarToggle} to='/h'>Perfil</Link>
      </nav>
      <div className={`toggle_menu ${menu?'toggle_menu-deslizar':''}`}>
        <Link onClick={cerrarToggle} to='/'>Busqueda</Link>
        <Link onClick={cerrarToggle} to='/h'>Perfil</Link>
      </div>
    </>
  )
}

export default Menu
