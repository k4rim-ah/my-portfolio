import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi';
const Home = () => {
  return (
    <div name='home' className=' w-full h-screen bg-gray-800'>
            {/*container*/}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <div className='text-yellow-400'>
                <p className='text-lg sm:text-xl font-semibold opacity-70'>Portoflio</p>
                <h1 className='text-4xl sm:text-7xl font-bold  '>Karim Ahmed</h1>
                <h2 className='text-2xl sm:text-3xl font-bold opacity-70'>I am a self-taught developer</h2>
                <p className='opacity-75 py-4 max-w-[700px]'>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                     laboris nisi ut aliquip ex ea commodo consequat. 
                     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                     dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                     proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
                </div>
            <div>
                <button className='group text-yellow-400 border-yellow-400 border-2 rounded-xl
                px-6 py-3 flex items-center
                hover:bg-yellow-400 hover:border-violet-600 hover:text-violet-600 '>
                 View Work 
                 <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3'/>
                </span>
                </button>
            </div>
            </div>
    </div>
  )
}

export default Home