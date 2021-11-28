import "./App.scss";

import React from "react";
import Drumpad from "./Drumpad";

const audioBank = [
  { src: "/clap-crushed.wav", id: "crushed clap", drumKey: "Q", keyCode: 81 },

  { src: "/clap-slapper.wav", id: "clap slapper", drumKey: "W", keyCode: 87 },

  { src: "/cowbell-808.wav", id: "cowbell", drumKey: "E", keyCode: 69 },

  {
    src: "/crash-acoustic.wav",
    id: "acoustic crash",
    drumKey: "A",
    keyCode: 65,
  },

  {
    src: "/hihat-acoustic01.wav",
    id: "acoustic hihat",
    drumKey: "S",
    keyCode: 83,
  },

  { src: "/hihat-analog.wav", id: "analog hihat", drumKey: "D", keyCode: 68 },

  { src: "/hihat-electro.wav", id: "electro hihat", drumKey: "Z", keyCode: 90 },

  { src: "/kick-808.wav", id: "kick 808", drumKey: "X", keyCode: 88 },

  { src: "/perc-hollow.wav", id: "hollow perc", drumKey: "C", keyCode: 67 },
];

function App() {
  const [displaySound, setDisplaySound] = React.useState("");
  const [volume, setVolume] = React.useState(1);

  return (
    <div className="App">
      <header className="App-header">
        <div id="drum-machine">
          <div id="display" className="rounded">
            {audioBank.map((clip) => (
              <Drumpad
                key={clip.id}
                clip={clip}
                onSoundSelected={setDisplaySound}
                volume={volume}
              />
            ))}
            <p>{displaySound}</p>
            <label>Volume</label>
            <input 
            type="range" 
            step="0.01" 
            id="volume" 
            onChange={(e) => setVolume(e.target.value)} 
            value={volume}
            max="1"
            min="0"
            />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
