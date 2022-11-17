import {Link} from 'react-router-dom'
import { Faqs } from '../components/Faqs'
import bg_header from '../assets/bg-header.jpg'
import bg_sectionOne from '../assets/bg-sectionOne.jpg'
import bg_sectionTwo from '../assets/bg-sectionTwo.jpg'
import bg_porDecidir from '../assets/porDecidir.jpg'
import bg_facs from '../assets/bg-facs.jpg'


export const Home = () => {
    

    return <>
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 py-10 gap-5 scale-[.80]">
            <img src={bg_header} alt="..." className='rounded'/>
            <div className="text-justify justify-between leading-8 flex flex-col items-center ">
                <h2 className='font-bold font-mono mr-auto text-lg pb-5'>Lorem ipsum dolor sit amet.</h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus temporibus recusandae neque, doloremque facere voluptatum nam ipsum facilis? Amet, impedit voluptate possimus reiciendis accusamus corporis? Hic molestias eveniet tempora eum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus temporibus recusandae neque, doloremque facere voluptatum nam ipsum facilis? Amet, impedit voluptate possimus reiciendis accusamus corporis? Hic molestias eveniet tempora eum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus temporibus recusandae neque, doloremque facere voluptatum nam ipsum facilis? Amet, impedit voluptate possimus reiciendis accusamus corporis? Hic molestias eveniet tempora eum.
                <button
                    className='py-1 px-6 bg-transparent outline-1 rounded-sm outline ml-auto mt-5 relative hover:text-white after:bg-black after:absolute after:inset-0 after:-z-10 after:translate-y-[110%] hover:after:translate-y-0 after:hover:transition-transform transition-transform overflow-hidden'
                >
                    <Link to='/Products'>cta-Button</Link>
                </button>
            </div>
        </div>
        <div className='bg-red-300 relative z-0 p-24 px-10'>
            <div className="grid container mx-auto text-center grid-cols-1 lg:grid-cols-2 lg:grid-rows-3">
                <div className="row-span-1 lg:border-b max-w-sm mx-auto">
                    <img src={bg_sectionOne} alt="Referencia text derecho" className=' w-full max-w-md mx-auto rounded'/>
                </div>
                <div className="row-span-1 lg:border-l text-justify p-2 pt-0 text-white max-w-sm mx-auto">
                    
                    <h2 className='text-xl pb-3'>title section</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, rerum.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto repellat asperiores laborum veritatis minus illo magni perspiciatis, illum ut eveniet accusamus molestias inventore accusantium. A illo tempore incidunt eligendi eveniet?</p>
                </div>
                <div className="row-span-1 border-b text-justify px-2 text-white max-w-sm mx-auto">
                    <h2 className='text-lg pb-1 pt-2'>title section</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit. Enim illum vel provident magnam minima 
                        excepturi ut quos beatae necessitatibus neque? Modi officiis quo corporis sit ut 
                        debitis numquam doloribus 
                        <br />
                
                        Lorem ipsum dolor sit, amet consectetur
                        adipisicing elit. Neque at similique a aliquam adipisci 
                    </p>
                    <button
                        className='py-1 px-6 bg-transparent rounded-sm outline-1 outline ml-auto mt-5 relative hover:text-white after:bg-black after:absolute after:inset-0 after:-z-10 after:translate-y-[110%] hover:after:translate-y-0 after:hover:transition-transform transition-transform overflow-hidden'
                    >
                        <Link to='/Products'>Cta-Button</Link>
                    </button>
                </div>
                <div className="row-span-1 border h-80 py-4 lg:border-l max-w-lg">
                    <img src={bg_sectionTwo} alt="img referencia de la imagen en la izquierda" className=' w-full h-full  max-w-sm mx-auto rounded' />
                </div>
                <div className="row-span-1 ">
                    <img src={bg_porDecidir} alt="img referencia al texto a la derecha" className='w-full h-full border-t pt-2 max-w-sm mx-auto' />
                </div>
                <div className="row-span-1 lg:border-l max-w-sm mx-auto text-justify p-3 text-white">
                    <h2 className='text-lg pt-3 pb-3'>title section</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, rerum.</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit reterum</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quasi.</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci iusto nam numquam officiis ea commodi?</p>
                </div>
            </div>
        </div>
        {/* <div className='container mx-auto my-4'>
            <div className='flex flex-nowrap gap-5 overflow-x-auto touch-auto snap-mandatory snap-x py-10 pb-0'>
                <div className="h-40 min-w-[15rem] snap-center shadow-lg overflow-hidden rounded">
                    <img src="/" alt=".." className='w-full bg-red-300 h-20' />
                    <h3 className='text-center text-lg'>lorem</h3>
                    <p className='text-xs text-justify p-2'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
                <div className="h-40 min-w-[15rem] snap-center shadow-lg overflow-hidden rounded">
                    <img src="/" alt=".." className='w-full bg-red-300 h-20' />
                    <h3 className='text-center text-lg'>lorem</h3>
                    <p className='text-xs text-justify p-2'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
                <div className="h-40 min-w-[15rem] snap-center shadow-lg overflow-hidden rounded">
                    <img src="/" alt=".." className='w-full bg-red-300 h-20' />
                    <h3 className='text-center text-lg'>lorem</h3>
                    <p className='text-xs text-justify p-2'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
                <div className="h-40 min-w-[15rem] snap-center shadow-lg overflow-hidden rounded">
                    <img src="/" alt=".." className='w-full bg-red-300 h-20' />
                    <h3 className='text-center text-lg'>lorem</h3>
                    <p className='text-xs text-justify p-2'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
                <div className="h-40 min-w-[15rem] snap-center shadow-lg overflow-hidden rounded">
                    <img src="/" alt=".." className='w-full bg-red-300 h-20' />
                    <h3 className='text-center text-lg'>lorem</h3>
                    <p className='text-xs text-justify p-2'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
                <div className="h-40 min-w-[15rem] snap-center shadow-lg overflow-hidden rounded">
                    <img src="/" alt=".." className='w-full bg-red-300 h-20' />
                    <h3 className='text-center text-lg'>lorem</h3>
                    <p className='text-xs text-justify p-2'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
                <div className="h-40 min-w-[15rem] snap-center shadow-lg overflow-hidden rounded">
                    <img src="/" alt=".." className='w-full bg-red-300 h-20' />
                    <h3 className='text-center text-lg'>lorem</h3>
                    <p className='text-xs text-justify p-2'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
                <div className="h-40 min-w-[15rem] snap-center shadow-lg overflow-hidden rounded">
                    <img src="/" alt=".." className='w-full bg-red-300 h-20' />
                    <h3 className='text-center text-lg'>lorem</h3>
                    <p className='text-xs text-justify p-2'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
            </div>
        </div> */}
        <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 max-h-screen py-20'>
            <figure className='h-full bg-black lg:rounded-lg overflow-auto'>
                <img src={bg_facs} alt=".." className='w-full h-96 object-cover'/>
            </figure>
            <ul className='flex justify-center p-2 lg:p-0 items-center h-full flex-col gap-2'>
               <Faqs />
               <Faqs />
               <Faqs />
               <Faqs />
            </ul>
        </div>
    </>
}