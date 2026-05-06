import { useState } from "react";

const Loader = () => {
  const funFacts = [
    "Cats sleep for 70% of their lives! 😴",
    "A group of cats is called a 'clowder' 🐱",
    "Cats have over 20 vocalizations 🗣️",
    "The first cat video was recorded in 1894 📼",
    "Cats can jump up to 6 times their length 🦘"
  ];

  const [funFact] = useState(() => 
    funFacts[Math.floor(Math.random() * funFacts.length)]
  );

  return (
    <div className="loader-container">
      <div className="loader-spinner"></div>
      <p>Loading adorable cat...</p>
      <p className="fun-fact">{funFact}</p>
    </div>
  );
};

export default Loader;