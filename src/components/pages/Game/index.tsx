import React, { useEffect, useRef } from 'react';
import { Game } from '../../../game-core/game-process';
import './Game.scss';

const GamePage = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvasInstance = canvasRef.current;
    if (canvasInstance) {
      const game = new Game(canvasInstance);
      game.start();
    }
  }, []);

  return (
    <div className="game-container">
      <canvas ref={canvasRef} width={900} height={600} />
    </div>
  );
};

export default GamePage;
