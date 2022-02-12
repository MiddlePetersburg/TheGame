import React, { useEffect, useRef } from "react";
import { Game } from "../../../game-core/main";
import GameStore from "../../../game-core/store/game-store";
import store from "../../../redux/store";

import ApiLiderBoard from "../../../api/leaderboard/leaderboard-api.service";
import "./Game.scss";

const addUser = ApiLiderBoard.addUserToLeaderboard;

const endHandler = () => {
  const { level, score } = GameStore;
  const login = store.getState().userReducer.login;
  addUser({
    data: {
      level,
      score,
      login,
    },
    ratingFieldName: "score",
    teamName: "TheGame",
  });
};

const GamePage = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    let gameInstance: Game;
    const canvasInstance = canvasRef.current;
    if (canvasInstance) {
      gameInstance = new Game(canvasInstance);
      gameInstance.start();
    }
    return () => {
      gameInstance.destroyGame();
    };
  }, []);

  return (
    <div className="game-container">
      <canvas ref={canvasRef} width={1000} height={700} />
    </div>
  );
};

export { GamePage, endHandler };
