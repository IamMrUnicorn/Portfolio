import { useState } from "react"

interface ProjectCardInterface {
  projectName: string,
  projectLink: string,
  githubLink: string,
  imgAltTxt:string,
  thumbnailImg: string,
  description: string,
  task: string,
  accomplishment: string,
  difficulty: string,
  iconPack1: string,
  iconPack2: string
}

export const ProjectCard = ({projectName, projectLink, githubLink, thumbnailImg, imgAltTxt, description, task, accomplishment, difficulty, iconPack1, iconPack2}:ProjectCardInterface) => {
  const [icon, toggleIcon] = useState(false)

  return (
    <div className="flex flex-col bg-primary bg-opacity-70 rounded-3xl hover:group" onMouseEnter={() => toggleIcon(true)} onMouseLeave={()=> toggleIcon(false)}>
      <div className="flex flex-col rounded-3xl">
        
        <div className="absolute flex flex-row justify-between p-3">
          {icon ? <p className="relative text-accent w-min text-3xl z-10 ">{iconPack1 === 'front end' ? <i className="fa-solid fa-palette" /> : iconPack1 === 'AI' ? <i className="fa-solid fa-wifi" /> : null}</p>: null}
          {icon ? <p className="relative text-accent left-64 w-min text-3xl z-10 ">{iconPack1 === 'front end' ? <i className="fa-solid fa-laptop-code" /> : iconPack1 === 'AI' ? <i className="fa-solid fa-robot" />: null}</p>: null}
        </div> 

        <img className="rounded-t-3xl h-[300px]  object-cover" src={thumbnailImg} alt={imgAltTxt}/>

        <div className="absolute flex flex-row justify-between p-3">
          {icon ? <p className="relative text-accent top-60  w-min text-3xl z-10 ">{iconPack2 === 'back end' ? <i className="fa-solid fa-server" /> : iconPack2 === 'raspberry pi' ? <i className="fa-brands fa-raspberry-pi" /> : null}</p>: null}
          {icon ? <p className="relative text-accent top-60 left-64 w-min text-3xl z-10 ">{iconPack2 === 'back end' ? <i className="fa-solid fa-terminal" /> : iconPack2 === 'raspberry pi' ? <i className="fa-brands fa-python" /> : null}</p>: null}
        </div>

        <div className="justify-between fontD p-3 flex flex-row ">
          {projectLink !== '' ? <a className="text-4xl hover:text-accent" target="_blank" href={projectLink}>{projectName}</a> : <p className="text-4xl">{projectName}</p>}
          <a href={githubLink}> <i className="fa-brands fa-github hover:text-accent text-4xl" /> </a>
        </div>
      </div>

      <div className="flex flex-col fontB rounded-b-3xl ">
        <p className="p-2">description: {description}</p>
        <p className="p-2">my job: {task}</p>
        <p className="p-2">main challenge: {difficulty}</p>
        <p className="p-2">main goal: {accomplishment}</p>
      </div>
    </div>
  )
}