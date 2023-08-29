import {FC} from 'react'

export const Navbar = () => {
  return (
    <div className="flex flex-row sticky top-0  z-50 justify-between p-4 gap-2 min-h-[5vh] bg-[#F4ACB7]">
      <div className='flex  flex-col'>
        <img className='h-16 object-contain' src='../public/assets/unicorn.png'></img>
        <p>Jason Quintana</p>
      </div>
      <div className='flex flex-row  text-3xl gap-5 p-3'>
        <a href='#home'>home</a>
        <a href='#about'>about</a>
        <a href='#work'>work</a>
        <a href='#contact'>contact</a>
      </div>
    </div>
  )
}