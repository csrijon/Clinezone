import React from "react";
import "./ScrollCards.css";

const steps = [
  {
    title: "Submit Details",
    description: "Confused with ads? We can help free of charge!",
  },
  {
    title: "We Process",
    description: "Our team reviews and processes your client data efficiently.",
  },
  {
    title: "Grow Together",
    description:
      "Watch your client base grow as we manage the onboarding pipeline.",
  },
];

const ScrollCards = () => {
  return (
    <div className="scroll-container">
             <div className="text">simple text to subject</div>
      {steps.map((step, index) => (
        <div className="scroll-card" key={index}>
          <h3>{step.title}</h3>
          <p>{step.description}</p>
          <button>Explore</button>
        </div>
      ))}
    </div>
  );
};

export default ScrollCards;
