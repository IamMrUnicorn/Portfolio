
import axios from 'axios'
import { ChangeEvent, FormEvent, useState } from 'react';


export const EmailMe = () => {
  
  interface EmailDataI {
    name: string;
    email: string;
    message: string;
  }
  const [EmailData, setEmailData] = useState<EmailDataI>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEmailData({ ...EmailData, [name]: value });
  };


const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  

  if (!EmailData.name || !EmailData.email || !EmailData.message) {
    alert('All fields are required.');
    return;
  }


  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailPattern.test(EmailData.email)) {
    alert('Invalid email address.');
    return;
  }
  

  try {
    const response = await axios.post('/send-email', {
      email: EmailData.email,
      subject: `Message from ${EmailData.name}`,
      text: EmailData.message,
    });
    if (response.data === 'Email sent') {
      alert('Email sent successfully');
    }
  } catch (error) {
    alert('Failed to send email');
    console.log(error)
  }
};

  return (
    <div className='bg-accent p-4 rounded-lg '>
      <form className='flex flex-col justify-center' onSubmit={handleSubmit}>
        <label className="flex flex-col text-accent-content fontB p-1">
          Enter your name
          <input className="text-secondary-content rounded-lg p-2 bg-secondary" name='name' value={EmailData.name} onChange={handleChange} placeholder="Doug" />
        </label>
        <label className="flex flex-col text-accent-content fontB p-1" >
          Enter your email
          <input className="text-secondary-content rounded-lg p-2 bg-secondary" name='email' value={EmailData.email} onChange={handleChange} placeholder="dougiscool@gmail.com" />
        </label>
        <label className="flex flex-col text-accent-content fontB p-1">
          Enter a cool message
          <textarea cols={20} rows={10} className="text-secondary-content rounded-lg p-2 bg-secondary" name='message' value={EmailData.message} onChange={handleChange} placeholder="Hello, are you open to talking about your projects over coffee sometime?" />
        </label>
        <button className="btn btn-primary fontC text-2xl w-min mx-auto " type='submit'>send</button>
      </form>
    </div>
  )
}
