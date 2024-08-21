// Actual name is Accordian
import React from "react";
import { useState } from "react";
import data from "./data";
import "./style.css";

const index = () => {
  const [selected, setSelected] = useState(null);
  const [multiSelected, setMultiSelected] = useState([]);
  const [enableMultiple, setEnableMultiple] = useState(false);

  function handleSingleSelection(getCurrentId) {
    setSelected(selected == getCurrentId ? null : getCurrentId);
  }
  function handleMultiSelection(getCurrentId) {
    setSelected(null);
    let cpyMultiple = [...multiSelected];

    const i = cpyMultiple.indexOf(getCurrentId);

    if (i == -1) cpyMultiple.push(getCurrentId);
    else cpyMultiple.splice(i, 1);

    setMultiSelected(cpyMultiple);
  }

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiple(!enableMultiple)}>
        Enable Multi Selection
      </button>
      <div className="dropdown">
        {data && data.length > 0 ? (
          data.map((dataItem, index) => (
            <div className="item" key={index}>
              <div
                className="title"
                onClick={
                  enableMultiple
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id ||
              multiSelected.indexOf(dataItem.id) != -1 ? (
                <div className="content">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>no data found!</div>
        )}
      </div>
    </div>
  );
};

export default index;
