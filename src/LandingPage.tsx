import { FC, useState, useEffect } from "react";


const LandingPage: FC = () => {
  const [typingText, setTypingText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = ["Full Stack Developer", "Frontend Engineer", "UI/UX Innovator", "Agile Practitioner", "AI enthusiast", "Collaborative Teammate", "D&D Aficionado", "Gamer"];

  useEffect(() => {
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
  }, [typingText, isDeleting, typingSpeed, loopNum, phrases]);


  return (
    <div  className="flex flex-col text-center relative top-28 fontC h-screen items-center">

      <h1 className="py-8 text-6xl "> Hello <span className="text-">World</span> </h1>
      <h1 className="py-8 text-6xl">meet <span className="text-primary">Jason</span></h1>
      <h2 className="py-8 typewriter text-5xl">I am a <span className="text-accent">{typingText}</span></h2>

    </div>
  )
}

export default LandingPage
