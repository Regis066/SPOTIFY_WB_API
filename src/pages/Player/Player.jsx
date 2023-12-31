import React from "react";
import Sidebar from "../../components/Sidebar";
import Body from "../../components/Body";
import './Player.css';
import Footer from "../../components/Footer";

const Player = ({spotify}) => {
  return (
    <div className="player">
      <div className="player-body">
      <Sidebar />
      <Body spotify={spotify}/>
      </div>
      <Footer />
    </div>
  );
};

export default Player;
