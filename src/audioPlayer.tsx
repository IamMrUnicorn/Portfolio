import { useState, useRef, useEffect } from 'react';

export const AudioPlayer = ({ src, btnText }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleAudioEnd = () => {
    setIsPlaying(false);
  };

  useEffect(() => {
    const audio = audioRef.current;
    audio.addEventListener('ended', handleAudioEnd);

    return () => {
      audio.removeEventListener('ended', handleAudioEnd);
    };
  }, []);

  return (
    <div className='flex justify-center'>
      <audio ref={audioRef} src={src}></audio>
      <button className='btn btn-accent fontB' onClick={togglePlayPause}>
        {isPlaying ? 'Pause' : `${btnText}`}
      </button>
      {/* Add other custom controls here */}
    </div>
  );
};
