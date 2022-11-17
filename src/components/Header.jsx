import bg_header from '../assets/bg-header-two.jpg'


export const Header = () => {
    return <div>
        <img src={bg_header} alt="..." className="w-full h-full absolute inset-0 object-cover lg:object-cover"/>
        <p className='container mx-auto relative z-10 text-center mt-40 lg:mt-60 py-10 rounded text-2xl bg-black opacity-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, similique.</p>
    </div>
    
}