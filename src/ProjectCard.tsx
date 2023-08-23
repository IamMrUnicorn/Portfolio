interface ProjectCardInterface {
  projectName: string,
  projectLink: string,
  githubLink: string,
  imgAltTxt:string,
  thumbnailImg: string,
  bodyTxt: string,
  iconPack1: string,
  iconPack2: string
}

export const ProjectCard = ({projectName, projectLink, githubLink, thumbnailImg, imgAltTxt, bodyTxt, iconPack1, iconPack2}:ProjectCardInterface) => {
  

  return (
    <div className="flex flex-col bg-black bg-opacity-30 rounded-3xl h-[800px] w-[600px]">
      <div className="flex flex-col rounded-3xl">
        <p className="absolute text-3xl z-10 ">{iconPack1 === 'front end' ? <i className="fa-solid fa-palatte" /> : iconPack1 === 'AI' ? <i className="fa-solid fa-wifi" /> : null}</p>
        <p className="absolute text-3xl z-10 ">{iconPack1 === 'front end' ? <i className="fa-solid fa-laptop-code" /> : iconPack1 === 'AI' ? <i className="fa-solid fa-robot" />: null}</p>
        <img className="h-[400px] object-contain" src={thumbnailImg} alt={imgAltTxt}/>
        <div className="justify-between p-2 flex flex-row bg-blue-300">
          {projectLink !== '' ? <a className="text-4xl" target="_blank" href={projectLink}>{projectName}</a> : <p className="text-4xl">{projectName}</p>}
          <a href={githubLink}> <i className="fa-brands fa-github text-4xl" /> </a>
        </div>
      </div>

      <div className="flex flex-col overflow-y-scroll bg-purple-400">
        <p className="absolute text-3xl z-10 ">{iconPack2 === 'back end' ? <i className="fa-solid fa-server" /> : iconPack2 === 'raspberry pi' ? <i className="fa-brands fa-raspberry-pi" /> : null}</p>
        <p className="absolute text-3xl z-10 ">{iconPack2 === 'back end' ? <i className="fa-solid fa-terminal" /> : iconPack2 === 'raspberry pi' ? <i className="fa-brands fa-python" /> : null}</p>
        <p className="p-5 text-2xl">{bodyTxt}</p>
      </div>
    </div>
  )
}