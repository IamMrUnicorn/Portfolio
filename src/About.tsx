import { AudioPlayer } from "./audioPlayer"
import { TimeLine } from "./timeline"


export const About = () => {

  return (
    <div id='about' className="container mx-auto w-full h-full py-4">
      <p className="magic-text fontC text-5xl bg-black py-5">About me and my journey</p>


      <div className="flex flex-row">

        <div className="bg-primary bg-opacity-70 flex flex-col rounded-xl w-2/3">
          <img className="rounded-md" src="/assets/JasonQuintana2.jpg"></img>

          <p className="fontC p-5">Hello! I'm Jason, a Full Stack Software Engineer based in Ozone Park, NY. </p>
          <p className="fontB py-1 px-2 dent">My journey in tech spans from crafting modern, user-centric front-end designs to optimizing and scaling back-end systems for seamless user experiences.</p>
          <p className="fontB py-1 px-2 dent">Whether it's reimagining popular clothing websites or building real-time multiplayer games, I'm always at the forefront of leveraging the latest technologies to bring visions to life.</p>
          <p className="fontB py-1 px-2 dent">But my interests aren't just confined to web development. My foray into the world of Raspberry Pi saw me bring to life BMO from Adventure Time, complete with voice-activated AI capabilities. In the future, I'm excited to enhance this with Chat GPT and classic game emulation functionalities.</p>

          <img className="rounded-md" src="/assets/Qtip.jpg" />
          <p className="fontB py-1 px-2 dent">This is my cat Qtip, shes my favorite coding companion, she helps me get though the rough days and long nights.  :)</p>
          <AudioPlayer src='/assets/Qtip.mp3' btnText='hear Qtip' />
        </div>
        <TimeLine />
      </div>
    </div>
  )
}
