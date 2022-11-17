import { Link } from "react-router-dom"

export const Login = () => {
    return <div className="fixed inset-0 w-full h-full z-10 flex gap-2 flex-col justify-center items-center bg-[#00000070] ">
        <form className="grid grid-rows-3 border p-5 items-center h-72 w-72  backdrop-grayscale bg-white rounded-lg">
            login:
            <input type="email" name="email" id="email" className="border-b pl-2 py-1 focus:border-none focus:outline-none" placeholder="example@"/>

            <input type="password" name="password" id="password" className="border-b focus:border-none focus:outline-none pl-2 py-1" placeholder="*********"/>


            <p className="text-sm">Olvidaste tu contraseña? <Link>Forget</Link></p>
            <button
                type="submit" 
                className="mx-auto py-1 px-6 bg-transparent outline-1 rounded outline ml-auto mt-5 relative hover:text-white after:bg-black after:absolute after:inset-0 after:-z-10 after:translate-y-[110%] hover:after:translate-y-0 after:hover:transition-transform transition-transform overflow-hidden"
            >
                <Link to='/'>iniciar secion</Link>
            </button>
        </form>
        <div className="w-72 bg-white p-3 rounded-lg flex justify-around">
            <button>Google</button>
            <button>Facebook</button>
            <button>Instagram</button>
        </div>
    </div>
}