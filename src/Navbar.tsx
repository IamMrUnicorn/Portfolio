import {FC} from 'react'

export const Navbar = () => {
  return (
    <div className="flex flex-row sticky  z-10 justify-between p-4 gap-2 min-h-[5vh] bg-[#F4ACB7]">
      <div>
        <img className='h-16' src='../public/assets/unicorn.png'></img>

      </div>
      <div className='flex flex-row gap-5 p-3'>
        <a href='#home'>home</a>
        <a href='#about'>about</a>
        <a href='#work'>work</a>
        <a href='#contact'>contact</a>
      </div>
    </div>
  )
}