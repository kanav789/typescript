import { Key } from "react";
import "./Keyboardcssmodule.css";
type KeyboardProps = {
  activeLetter: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
};
function Keyboard({
  activeLetter,
  inactiveLetters,
  addGuessedLetter,
}: KeyboardProps) {
  const KEYS = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: ".5rem",
      }}
    >
      {KEYS.map((key, ind) => {
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className=".btn"
            style={
              {
                // width: "100%",
              }
            }
            key={ind}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}

export default Keyboard;
