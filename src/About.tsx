

const TimelineEvent = ({ event, index }) => (
  <div className={`flex ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'} my-4`}>
    <div className={`bg-accent rounded-lg p-4 w-5/12`}>
      <h3 className="font-bold text-xl mb-2">{event.title}</h3>
      <p className="text-sm">{event.description}</p>
    </div>
    <div className="flex items-center mx-4">
      <div className="bg-primary rounded-full h-16 w-16 flex items-center justify-center z-10">
        <div className="text-center">
          <div className="font-bold">{event.month.slice(0, 3)}</div>
          <div className="text-sm">{event.year}</div>
        </div>
      </div>
      <div className="h-0.5 w-full bg-gray-800 absolute top-8" /> {/*rotate this 90 deg */}
    </div>
  </div>
);


export const About = ({ events }) => {

  return (

    <div className="container mx-auto w-full h-full py-4">
    <div className="relative w-1/2 mx-auto">
      {events.map((event, index) => (
        <TimelineEvent key={index} event={event} index={index} />
      ))}
    </div>
  </div>
  )
}
