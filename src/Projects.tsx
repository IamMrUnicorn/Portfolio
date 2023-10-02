import { ProjectCard } from "./ProjectCard"

const projects = [
  { projectName: 'The Mode Collection', projectLink: 'https://the-mode-collection.up.railway.app/', githubLink: 'https://github.com/FEC-Incredibles/The-Mode-Collection-Client', thumbnailImg: '/assets/TheModeCollectionFrontend.png', imgAltTxt: 'the mode collection store page', difficulty: ' Creating custom UI components from scratch rather than utilizing existing libraries.', accomplishment: 'Achieved real-time updates of product details based on style choices, enhancing user experience.', description: 'Developed the primary UI for an e-commerce platform, focusing on the product section.', task: 'Custom-built UI components and a dynamic style-picker.', iconPack1: 'front end', iconPack2: '' },
  { projectName: 'The Mode Collection', projectLink: 'https://the-mode-collection.up.railway.app/', githubLink: 'https://github.com/IamMrUnicorn/The-Mode-Collection-Micro-Service', thumbnailImg: '/assets/TheModeCollectionBackend.png', imgAltTxt: 'graph of response times for api', difficulty: 'the ETL process from the old database to the new one', accomplishment: 'optimizing api response times and database response times from 26s to 10s to 2s ', description: 'Tasked with scaling the ratings and reviews API for an e-commerce platform.', task: 'Optimize backend to handle high user load.', iconPack1: '', iconPack2: 'back end' },
  { projectName: 'Spy Another Day', projectLink: '', githubLink: 'https://github.com/Spy-Another-Day/Elder-Wand', thumbnailImg: '/assets/SpyAnotherDay.png', imgAltTxt: 'spy another day game board', difficulty: 'Managing real-time interactions and role-based permissions in a multiplayer environment.', accomplishment: 'Implemented complex state management to handle turn-based gameplay.', description: ' Collaborated on a multiplayer Codenames-style game.', task: 'Develop the game screen and card components.', iconPack1: 'front end', iconPack2: '' },
  { projectName: 'The Round Table', projectLink: '', githubLink: 'https://github.com/IamMrUnicorn/TheRoundTable', thumbnailImg: '/assets/TheRoundTable.png', imgAltTxt: 'the round table game page', difficulty: 'juggling all of the complexity and tasks as a solo developer', accomplishment: 'Streamlined the experience for both Dungeon Masters and players by automating note-taking and logging.', description: 'Developed an all-in-one hub designed for playing, planning, and tracking Dungeons & Dragons sessions.', task: 'Create a full-stack platform to automate gameplay logistics', iconPack1: 'front end', iconPack2: 'back end' },
  { projectName: 'Project BMO', projectLink: '', githubLink: 'https://github.com/IamMrUnicorn/BMO-raspberry-pi', thumbnailImg: '/assets/BMO.jpg', imgAltTxt: '3d printed BMO', difficulty: 'Juggling multiple hardware components and ensuring seamless integration.', accomplishment: 'Achieved high-quality voice modulation and 3D-printed all components.', description: 'Created a voice-responsive Raspberry Pi project, inspired by BMO from Adventure Time.', task: 'Implement voice recognition and response using Python.', iconPack1: 'AI', iconPack2: 'raspberry pi' },
]
export const Projects = () => {

  return (
    <div id="work" className="md:p-12 mb-20 z-10">
      <p className="magic-text fontC text-2xl md:text-5xl py-5">Projects/work</p>
      <div className="projectGrid">
        
        {projects.map((project, index) => {
          return (<ProjectCard key={index} projectName={project.projectName} projectLink={project.projectLink} githubLink={project.githubLink} thumbnailImg={project.thumbnailImg} imgAltTxt={project.imgAltTxt} task={project.task} difficulty={project.difficulty} accomplishment={project.accomplishment} description={project.description} iconPack1={project.iconPack1} iconPack2={project.iconPack2} />)
        })}
      </div>
    </div>
  )
}