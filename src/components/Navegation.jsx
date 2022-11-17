import { useState } from 'react'
import {Link} from 'react-router-dom'
import { Header } from '../components/Header'
import Carrito from './Car'

export const Navegation = () => {

    const [menu, setMenu] = useState(false)

    function showMenu () {
        return setMenu(!menu)
    }

    return <header className='text-white relative min-h-screen '>
    <nav className='flex justify-between container mx-auto py-3 px-2 z-10 relative bg-slate-500 lg:bg-transparent'>        
        <Link to='/'>
            Logo
        </Link>

        <button
            className='border px-3 py-1 bg-black lg:hidden ml-10'
            onClick={showMenu}
        >
            show
        </button>
        
        <div className={`flex flex-col top-full left-0 right-0 transition-[height] ${menu ? 'h-52':'h-0 overflow-hidden'} lg:h-[initial] bg-white text-center lg:pt-0 text-black gap-4 lg:bg-transparent lg:text-white absolute lg:static  lg:flex-row`}>
            <Link to="/" className='hover:underline hover:text-black'>Home</Link>
            <Link to="/Products" className='hover:underline hover:text-black'>Products</Link>
            <Link to="/abouts" className='hover:underline hover:text-black'>Abouts</Link>
            <Link to="/" className='hover:underline hover:text-black'>Home</Link>
            <Link to="/" className='hover:underline hover:text-black'>Home</Link>
        </div>
        
        <div className='flex items-center gap-3'>
            <Link to="/login">Login</Link>
            <Carrito />
        </div>
    </nav>
    <Header/>
</header>
}