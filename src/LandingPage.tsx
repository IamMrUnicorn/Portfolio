import { FC, useState, useEffect } from "react";


const LandingPage: FC = () => {
  const [typingText, setTypingText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  
  useEffect(() => {
    const phrases = ["Full Stack Developer", "Frontend Engineer", "UI/UX Innovator", "Agile Practitioner", "AI enthusiast", "Collaborative Teammate", "D&D Aficionado", "Gamer"];
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullPhrase = phrases[i];

      setTypingText(
        isDeleting
          ? fullPhrase.substring(0, typingText.length - 1)
          : fullPhrase.substring(0, typingText.length + 1)
      );

      setTypingSpeed(isDeleting ? 40 : 150);

      if (!isDeleting && typingText === fullPhrase) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && typingText === "") {
        setIsDeleting(false);
        setLoopNum((prevLoopNum) => prevLoopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [typingText, isDeleting, typingSpeed, loopNum]);


  return (
    <div className="flex flex-col text-center relative top-28 pl-10 fontC h-screen mb-80 md:mb-32 items-center ">
      <div className="md:flex flex-row px-4 ">
        <div className="flex flex-col">
          <h1 className="py-8 text-5xl md:text-6xl "> Hello <span className="">World</span> </h1>
          <h1 className="py-8 text-5xl md:text-6xl">meet <span className="text-primary">Jason</span></h1>
        </div>
        <img className='sm:mx-10 h-80 object-cover rounded-full' src="/assets/JasonQuintana.jpg" />
      </div>
      <h2 className="py-8 pr-16 typewriter text-2xl md:text-5xl">I am a <span className="text-accent">{typingText}</span></h2>
    </div>
  )
}

export default LandingPage
