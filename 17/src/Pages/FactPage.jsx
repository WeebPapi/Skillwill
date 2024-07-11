import React, { useEffect, useState } from "react";
import "../App.css";
import { useParams } from "react-router-dom";

const FactPage = () => {
  const [text, setText] = useState("");
  const { factId } = useParams();
  console.log(factId);
  const facts = [
    {
      id: 1,
      fact: "In 106 AC, Daemon and Corlys Velaryon, Lord of the Tides, allied together for a private war for the Stepstones, with Daemon desiring his own kingdom and Corlys wanting to rid the Stepstones of rule by the Triarchy. While Corlys provided the Velaryon fleet, Daemon flew on his dragon, Caraxes, and led an army of adventurers and second sons.",
    },
    {
      id: 2,
      fact: "Daemon's wife, Rhea Royce, died from falling from a horse in 115 AC. Daemon abandoned the Stepstones and flew to the Vale of Arryn to claim Runestone, which had been Rhea's seat, but he was refused by House Royce. Sent away from the Vale by Lady Jeyne Arryn, Daemon turned to Driftmark, where he laid eyes upon the enchanting Laena Velaryon, the daughter of his friend, Lord Corlys, and he asked the Sea Snake for her hand in marriage. Laena was already betrothed to the son of a late Sealord of Braavos, but Daemon killed the Braavosi with Dark Sister in a duel.",
    },
  ];

  useEffect(() => {
    let newText = facts.filter((fact) => fact.id == factId)[0]?.fact;
    newText = newText ? newText : "Fact Not Found";
    setText(newText);
  }, [factId]);

  return (
    <div className="card">
      <div className="image-container">
        <img
          src="https://i.pinimg.com/736x/cc/f8/48/ccf848a8198c20aefa2c39b9dc6919ad.jpg"
          alt="Daemon-Targaryen"
        ></img>
      </div>
      <div className="card-header">
        <h1>Fact id: {factId}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default FactPage;
