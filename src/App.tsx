import { FC } from 'react'
import './App.css'
import LandingPage from './LandingPage'
import { Navbar } from './Navbar'
import { Projects } from './Projects'
// import { About } from './About'
import { Contact } from './Contact'

const App:FC = () => {

  return (
    <div  className='bg-purple-500 sm:bg-red-500 md:bg-yellow-500 lg:bg-green-500 2xl:bg-blue-500 wavebg  '>
      <Navbar/>
      <LandingPage/>
      <Projects/>
      {/* <About/> */}
      {/* <Contact/> */}
    </div>
  )
}

export default App
