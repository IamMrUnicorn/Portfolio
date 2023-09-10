export const EmailMe = () => {

  return (
    <div className='bg-accent p-4 rounded-lg '>
      <form className='flex flex-col justify-center '>
        <label className="flex flex-col text-accent-content fontB p-1">
          Enter your name
          <input className="text-secondary-content rounded-lg p-2 bg-secondary" placeholder="doug" />
        </label>
        <label className="flex flex-col text-accent-content fontB p-1" >
          Enter your email
          <input className="text-secondary-content rounded-lg p-2 bg-secondary" placeholder="dougiscool@gmail.com" />
        </label>
        <label className="flex flex-col text-accent-content fontB p-1">
          Enter a cool message
          <textarea cols={60} rows={10} className="text-secondary-content rounded-lg p-2 bg-secondary" placeholder="awesome projects, do you think i can borrow your BMO some time? :)" />
        </label>
        <button className="btn btn-primary fontC text-2xl w-min mx-auto ">send</button>
      </form>
    </div>
  )
}