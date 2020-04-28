import React from "react";

function Jokes({ jokes }) {
  return (
    <div className="jokes">
      {jokes.map(joke => {
        return (
          <div key={joke.id} className="joke">
            <p>{joke.setup}</p>
            <p>{joke.punchline}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Jokes;
