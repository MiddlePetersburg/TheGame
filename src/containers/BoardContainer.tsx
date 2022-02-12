import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getLeaderBoard } from "../api/axiosClient";

// Components
import Board from "../components/pages/Board";

// Constants

const BoardContainer = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getLeaderBoard().then((res) => setUsers(res?.data));
  }, []);
  return <Board usersBoard={users} />;
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps, {})(BoardContainer);
