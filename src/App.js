import "./App.scss";
import crushedClap from "./clap-crushed.wav";
import clapSlapper from "./clap-slapper.wav";
import cowbell from "./cowbell-808.wav";
import crashAcoustic from "./crash-acoustic.wav";
import hihatAcoustic from "./hihat-acoustic01.wav";
import hihatAnalog from "./hihat-analog.wav";
import hihatElectro from "./hihat-electro.wav";
import kick from "./kick-808.wav";
import percHollow from "./perc-hollow.wav";
 

import React from "react";
import Drumpad from "./Drumpad";

const audioBank = [
  { src: crushedClap, id: "crushed clap", drumKey: "Q", keyCode: 81 },

  { src: clapSlapper, id: "clap slapper", drumKey: "W", keyCode: 87 },

  { src: cowbell, id: "cowbell", drumKey: "E", keyCode: 69 },

  {
    src: crashAcoustic,
    id: "acoustic crash",
    drumKey: "A",
    keyCode: 65,
  },

  {
    src: hihatAcoustic,
    id: "acoustic hihat",
    drumKey: "S",
    keyCode: 83,
  },

  { src: hihatAnalog, id: "analog hihat", drumKey: "D", keyCode: 68 },

  { src: hihatElectro, id: "electro hihat", drumKey: "Z", keyCode: 90 },

  { src: kick, id: "kick 808", drumKey: "X", keyCode: 88 },

  { src: percHollow, id: "hollow perc", drumKey: "C", keyCode: 67 },
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
