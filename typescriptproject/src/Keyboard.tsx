import "./Keyboardcssmodule.css";
function Keyboard() {
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
