import { FC, useState, useEffect } from 'react'
import './App.css'
import LandingPage from './LandingPage'
import { Navbar } from './Navbar'
import { Projects } from './Projects'
import { About } from './About'
import { Contact } from './Contact'


const events = [
  {
    month:'june', 
    year:'2020', 
    title:'gradudated highscool', 
    bgColor:'red', 
    description:'closed this chapter of my life'
  },
  {
    month:'june', 
    year:'2020', 
    title:'gradudated highscool', 
    bgColor:'red', 
    description:'closed this chapter of my life'
  },
  {
    month:'june', 
    year:'2020', 
    title:'gradudated highscool', 
    bgColor:'red', 
    description:'closed this chapter of my life'
  },
  {
    month:'', 
    year:'', 
    title:'', 
    bgColor:'', 
    description:''
  },
  {
    month:'', 
    year:'', 
    title:'', 
    bgColor:'', 
    description:''
  },
  {
    month:'', 
    year:'', 
    title:'', 
    bgColor:'', 
    description:''
  },
  {
    month:'', 
    year:'', 
    title:'', 
    bgColor:'', 
    description:''
  },
  {
    month:'', 
    year:'', 
    title:'', 
    bgColor:'', 
    description:''
  },
  {
    month:'', 
    year:'', 
    title:'', 
    bgColor:'', 
    description:''
  },
]
const App:FC = () => {
  
  const [lightSwitch, toggleLightSwitch] = useState(false)

  useEffect(() => {
    const updateAccentVar = () => {
      let accentColor;

      if (lightSwitch) {
        accentColor = '#10bc66';  // Light theme accent color
      } else {
        accentColor = '#72f3b3';  // Dark theme accent color
      }

      document.documentElement.style.setProperty('--text-color', accentColor);
    };

    // Call the function initially to set the variable
    updateAccentVar();

    // Listen for theme changes
    const themeChangeListener = () => {
      updateAccentVar();
    };

    document.addEventListener('theme-change', themeChangeListener);

    // Cleanup - remove event listener
    return () => {
      document.removeEventListener('theme-change', themeChangeListener);
    };
  }, [lightSwitch]); // Added lightSwitch as a dependency

  const changeTheme = () => {
    toggleLightSwitch(!lightSwitch);
    

    // Dispatch theme change event
    const event = new Event('theme-change');
    document.dispatchEvent(event);
  }

  return (
    <div data-theme={lightSwitch ? 'light' : 'dark'} className='bg-base-100'>
      <Navbar lightState={lightSwitch} lightSwitch={changeTheme} />
      <LandingPage/>
      <About events={events}/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App;
