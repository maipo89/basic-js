import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [display, setDisplay] = useState({});
  const [seconds, setSeconds] = useState(12);
  const animation = { animation: "close 3s", top: "-30%" };
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplay({
        display: "flex",
        transition: "all ease-in 1s",
        webkitTransition: "all ease-in 1s"
      });
    }, 2000);
    return () => clearTimeout(timer);
  }, [display]);

  React.useEffect(() => {
    if (seconds > 0 && !isClicked) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else if (isClicked) {
      setDisplay({ display: "none" });
    } else {
      setSeconds(0);
    }
  });

  return (
    <div
      style={seconds === 0 ? { ...display, ...animation } : display}
      className="container"
    >
      <p onClick={() => setIsClicked(true)}>x</p>
      <h3 className="offer">Don't forget... Offer Ends in:</h3>
      <h1>
        {seconds === 0 ? null : seconds}{" "}
        {seconds === 0 ? "Offer Expired" : seconds === 1 ? "second" : "seconds"}
      </h1>
      <h3 className="visit">>>Visit Offer</h3>
    </div>
  );
}
