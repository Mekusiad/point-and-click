import { useState } from "react";
import "./App.css";
import Ball from "./components/Ball/Ball";

function App() {
  const [click, setClick] = useState(false);
  const [positions, setPositions] = useState([]);
  const [removed, setRemoved] = useState([]);

  const handleBall = (e) => {
    const currentPosition = [...positions];
    const left = `${e.clientX - 10}px`;
    const top = `${e.clientY - 10}px`;
    setClick(!click);
    currentPosition.push([top, left]);
    setPositions(currentPosition);
  };

  const handleUndo = (e) => {
    e.stopPropagation();
    const currentPosition = [...positions];
    const remove = [...removed];
    if (currentPosition.length === 0) {
      return alert("No more BALL for to UNDO");
    }
    remove.push(currentPosition.pop(1));
    setPositions(currentPosition);
    setRemoved(remove);
  };

  const handleRedo = (e) => {
    e.stopPropagation();
    const currentPosition = [...positions];
    const remove = [...removed];
    if (remove.length === 0) {
      return alert("No more BALL for to REDO");
    }

    currentPosition.push(remove[remove.length - 1]);
    remove.pop(1);

    setPositions(currentPosition);
    setRemoved(remove);
  };

  return (
    <div className="App" onClick={(e) => handleBall(e)}>
      <button onClick={(e) => handleUndo(e)}>Undo</button>
      <button onClick={(e) => handleRedo(e)}>Redo</button>
      {positions.map((position) => (
        <Ball position={position} key={position} />
      ))}
    </div>
  );
}

export default App;
