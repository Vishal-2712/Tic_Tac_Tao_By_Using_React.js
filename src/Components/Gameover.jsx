export default function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>Congratulation {winner} won!</p>}
      {!winner && <p> OOP'S It's a draw!</p>}
      <p>
        <button onClick={onRestart}>ReStart!</button>
      </p>
    </div>
  );
}
