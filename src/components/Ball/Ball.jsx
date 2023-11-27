import "./Ball.css";

const Ball = ({ position }) => {
  return (
    <div className="ball" style={{ top: position[0], left: position[1] }}></div>
  );
};

export default Ball;
