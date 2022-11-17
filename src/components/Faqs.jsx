import {useState} from 'react'
import Arrow from '../components/Arrow'


export const Faqs = () => {

    const [faqs, setFaqs] = useState(false)

    function showFaqs () {
        return setFaqs(!faqs)
    }

    return  (
    <li className='border rounded shadow-sm p-3 bg-white  w-full max-w-lg'>
        <div className='flex justify-between'>
            <p className={faqs? 'underline':'no-underline'}>Lorem ipsum dolor sit amet consectetur adipisicing?</p>
            <button
            className={`${ faqs ? 'rotate-90':'rotate-0 '} transition-transform`}
            onClick={showFaqs}
            >
                <Arrow/>
            </button>
        </div>
        <div className={`overflow-hidden transition-[height] flex justify-start items-center ${faqs ? 'h-14':'h-0'}`}>
            <p className='text-sm text-slate-400'>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
    </li>
    )

}


