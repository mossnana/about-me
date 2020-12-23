import React, { useState, useEffect } from "react";

const useAudio = (url: string): any => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(true);

  const toggle = (): any => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Player = ({ url }: PlayerProps) => {
  const [playing, toggle] = useAudio(url);
  return (
    <div>
      <div onCanPlayThrough={toggle}></div>
      <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
    </div>
  );
};

interface PlayerProps {
  url: string
}

export default Player;
