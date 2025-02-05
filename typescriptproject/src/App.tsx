// 16:37
import { useState } from "react";
import "./App.css";
import word from "./wordlist.json";
import HangmanDrawing from "./HangmanDrawing";
import HangmanWord from "./HangmanWord";
import Keyboard from "./Keyboard";
function App() {
  const [wordtoGuess, setWordtoGuess] = useState<string>(() => {
    return word[Math.floor(Math.random() * word.length)];
  });

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",

        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: "2rem", textAlign: "center" }}> Lose Win</div>

      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord />
      <div style={{}}>
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
