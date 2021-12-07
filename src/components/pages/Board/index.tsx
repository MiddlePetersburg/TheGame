import React from 'react';
import './Board.scss';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Board = ({ usersBoard }:any) => (
  <div className="board">
    <h2 className="board__title">Board</h2>
    <div className="table board__table">
      <div className="table__row table__row--header">
        <div className="table__col">
          Avatar
        </div>
        <div className="table__col">
          Player Name
        </div>
        <div className="table__col">
          Score
        </div>
        <div className="table__col">
          Position
        </div>
      </div>
      {usersBoard.sort((a:any, b:any) => a.position - b.position).map((user:any) => (
        <div key={user.id} className="table__row table__row--body">
          <div className="table__col">
            <AccountCircleIcon fontSize="inherit" className="board__avatar-icon" />
          </div>
          <div className="table__col">
            {user.name}
          </div>
          <div className="table__col">
            {user.score}
          </div>
          <div className="table__col">
            {user.position}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Board;
