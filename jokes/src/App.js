import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { jokesAction } from "./actions";
import Jokes from "./components/jokes";
import "./App.css";
const { getJokes } = jokesAction;

function App() {
  const { jokes, isloading } = useSelector(state => {
    const { jokes, isloading } = state.jokes;
    return {
      jokes,
      isloading
    };
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJokes());
  }, []);

  return (
    <div className="App">
      <h1 className="title">Random Jokes</h1>
      <div className="container">
        {isloading ? (
          <p className="loading">Loading data...</p>
        ) : (
          <Jokes jokes={jokes} />
        )}
      </div>
    </div>
  );
}

export default App;
