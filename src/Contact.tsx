import { EmailMe } from "./EmailMe.tsx"

export const Contact = () => {

  return (
    <div id='contact' className='p-5 mb-32 flex flex-row bg-neutral justify-center'>
      <div className="flex flex-col mt-10 pt-20">
        <h1 className="text-2xl md:text-4xl py-3 fontA"> <span className="magic-text-reversed text-3xl md:text-6xl">Lets Connect!</span>
          <a href="https://www.linkedin.com/in/quintanajason/"><i className="px-1 pl-20 fa-brands fa-linkedin-in hover:text-primary" /> </a>
          <a href="https://github.com/IamMrUnicorn"><i className="px-1 fa-brands fa-github hover:text-primary" /> </a>
          <a href="https://open.spotify.com/user/12128127891?si=451ae36062464ae0"><i className="px-1 fa-brands fa-spotify hover:text-primary" /> </a>
          <div className="tooltip fontB" data-tip='#iammrunicorn'>
            <i className="px-1 fa-brands fa-discord hover:text-primary" /> 
          </div>
        </h1>
        <p className="fontB p-3">Im always open to meeting new people or learning about new opprotunites. <br/> feel free to shoot me an email or connect with me on one of the platforms above</p>
        <EmailMe />
      </div>
    </div>
  )
}
