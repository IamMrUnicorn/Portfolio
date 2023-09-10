

export function TimelineTag({ tag }) {
  return (
    <span className="bg-accent text-secondary text-sm fontB mr-2 px-2.5 py-0.5 rounded ml-3">
      {tag}
    </span>
  )
}

export const TimeLineEvent = ({ event }) => (
  <li className="mb-10 ml-6">
    <h3 className="flex items-center mb-1 text-lg font-semibold font-main">
      <span className="fontB text-3xl text-primary capitalize">{event.title}</span>
    </h3>
    <time className="mb-2 text-sm ">
      <span className="fontA capitalize">{event.month}  {event.year}</span>
      {event.tag !== '' ? <TimelineTag tag={event.tag} /> : ''}
    </time>
    <ul className='mb-4 text-base fontB list-disc ml-10'>
      {event.bp1 === '' ? null : <li>{event.bp1}</li>}
      {event.bp2 === '' ? null : <li>{event.bp2}</li>}
      {event.bp3 === '' ? null : <li>{event.bp3}</li>}
    </ul>
  </li>
)
