import { Routes, Route } from 'react-router-dom'
import { Navegation } from './components/Navegation'
import { Abouts } from './router/Abouts'
import { Home } from './router/Home'
import { Login } from './router/Login'
import { Products } from './router/Products'

function App () {
    return <>
    <Navegation/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Products' element={<Products/>}/>
        <Route path='/abouts' element={<Abouts/>}/>
        <Route path='/Login' element={<Login/>}/>
    </Routes>
    </>
}

export default App