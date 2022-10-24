import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Github from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';

const Servoffered = () => {
  return (
    <div name='skills' className='w-full h-screen bg-gray-800 text-yellow-400 '>
        {/*container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center '>
            <p className='text-4xl  font-bold inline border-b-4 border-yellow-400'>Skills</p>
            <p className='py-4'>These are thecnologies I work with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className='shadow-md shadow-yellow-400 rounded-lg hover:scale-110 duration-500 '>
                <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
                <p className='my-4'>HTML</p>
            </div>
            <div className='shadow-md shadow-yellow-400 rounded-lg hover:scale-110 duration-500 '>
                <img className='w-20 mx-auto' src={CSS} alt='CSS icon' />
                <p className='my-4'>CSS</p>
            </div>
            <div className='shadow-md shadow-yellow-400 rounded-lg hover:scale-110 duration-500 '>
                <img className='w-20 mx-auto' src={JavaScript} alt='Javscript icon' />
                <p className='my-4'>JavaScript</p>
            </div>
            <div className='shadow-md shadow-yellow-400 rounded-lg hover:scale-110 duration-500 '>
                <img className='w-20 mx-auto' src={Tailwind} alt='Tailwind icon' />
                <p className='my-4'>tailwind</p>
            </div>
            <div className='shadow-md shadow-yellow-400 rounded-lg hover:scale-110 duration-500 '>
                <img className='w-20 mx-auto' src={Github} alt='HTML icon' />
                <p className='my-4'>HTML</p>
            </div>
            <div className='shadow-md shadow-yellow-400 rounded-lg hover:scale-110 duration-500 '>
                <img className='w-20 mx-auto' src={ReactImg} alt='React icon' />
                <p className='my-4'>React</p>
            </div>
            <div className='shadow-md shadow-yellow-400 rounded-lg hover:scale-110 duration-500 '>
                <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
                <p className='my-4'>HTML</p>
            </div>
            <div className='shadow-md shadow-yellow-400 rounded-lg hover:scale-110 duration-500 '>
                <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
                <p className='my-4'>HTML</p>
            </div>
        </div>
    </div>
  )
}

export default Servoffered