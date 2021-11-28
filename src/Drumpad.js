import "./App.scss";
import React from "react";

function Drumpad({ clip, onSoundSelected, volume}) {
  const [active, setActive] = React.useState(false);
  
  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
  });

  const handleKeyDown = (e) => {
    if (e.keyCode === clip.keyCode) {
      startSound();
    }
  };

  const startSound = () => {
    setActive(true);
    const audio = document.getElementById(clip.drumKey);
    audio.currentTime = 0;
    audio.play();
    audio.volume = volume;
    onSoundSelected(clip.id);
    setTimeout(() => {
      setActive(false);
    }, 1000);
  };

  return (
    <button
      onClick={startSound}
      className={`rounded box-shadow--8dp drum-pad ${
        active ? "set-active" : ""
      }`}
      id={clip.id}
    >
      <audio className="clip" id={clip.drumKey} src={clip.src} />
      {clip.drumKey}
    </button>
  );
}

export default Drumpad;
