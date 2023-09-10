import { TimeLineEvent } from "./timelineEvent"

const events = [
  {
    month: 'June',
    year: '2020',
    title: 'gradudated highscool',
    tag: '',
    bp1: 'graduated during a very strange time and was left feeling lost, confused and uncertain for the future',
    bp2: 'unclear on what career path to choose or what route to take to further my education',
    bp3: '',
  },
  {
    month: 'August',
    year: '2021',
    title: "first job at Sal's Deli",
    tag: 'mentality shift',
    bp1: 'gained lots of important experience working',
    bp2: 'this is when i started to realize that i could optimize things and make an impact in the world',
    bp3: 'created my first database management system and eliminated paper records at the store',
  },
  {
    month: 'june',
    year: '2022',
    title: 'began learning to program',
    tag: '',
    bp1: 'self studies and youtube videos and lots of research',
    bp2: 'created tons of little obscure programs in efforts to learn, such as games and data visualizers',
    bp3: 'started Harvards CS50',
  },
  {
    month: 'december',
    year: '2022',
    title: 'completed harvards CS50',
    tag: '',
    bp1: 'big milestone and the options become clearer on what i want to do, from here i applied to HackReactors bootcamp',
    bp2: 'gained a fundamental understanding for how the technology we use everyday works',
    bp3: "from here I quit my job and completly dedicated myself to HackReactor's bootcamp",
  },

  {
    month: 'june',
    year: '2023',
    title: 'completed hack reactor',
    tag: 'major acomplishment',
    bp1: 'This was a major accomplishment because it proved to me that i can really do whatever i set my mind to, I really wanted this and I got it done',
    bp2: 'I gained an immense ammount of knowlege and experience and ofcourse lots of friends along the way',
    bp3: 'During the bootcamp i got to work on some really cool projects like the mode collection and spy another day',
  },
  {
    month: 'present',
    year: '2023',
    title: 'freelance software engineer',
    tag: 'most recent',
    bp1: "Now that im on my own I have not stopped building things, still learning new things and building projects that inspire me each day",
    bp2: 'One notable project worth mentioning was BMO, where I did a deep dive into AI generated content and voice modulation and also picked up some python',
    bp3: '',
  },
].reverse()



export const TimeLine = () => {

  return (
    <ol className="pt-40">
      {events.map((event, index) => (
        <TimeLineEvent key={index} event={event} />
      ))}
    </ol>
  )
}
