import { Route, Routes } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Menu from './pages/componentes/Menu'

function AppRouter() {

  return (
    <>
      <Menu></Menu>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='*' element={<div>404 NO SE ENCONTRO</div>}/>
      </Routes>
    </>
  )
}

export default AppRouter
