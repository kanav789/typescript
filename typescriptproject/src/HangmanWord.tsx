type HangmanWordProps = {
  guessedLetters: String[];
  wordtoGuess: String;
};
function HangmanWord({ guessedLetters, wordtoGuess }: HangmanWordProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: ".25em",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >
      {wordtoGuess.split("").map((letter, index) => (
        <span style={{ borderBottom: ".1em solid gray" }} key={index}>
          <span
            style={{
              visibility: guessedLetters.includes(letter)
                ? "visible"
                : "hidden",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}

export default HangmanWord;
