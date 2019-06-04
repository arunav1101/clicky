import React from "react";
import "../styles/Navbar.css";
import "bootstrap/dist/css/bootstrap.css"

const styles = {
  navbarStyle: {
    background: "green",
    display:"flex",
    justifyContent: "flex-end"
  },
  scoreStyle:{
    background: "Red",
    marginLeft:"10px"
  }
};

function Navbar(props) {
  return (
    <nav style={styles.navbarStyle} className="navbar fixed-top">
      <a href="/"><h3>Your Score <span style= {styles.scoreStyle}>{props.score}</span></h3></a>
      <a href="/"><h3>Top Score <span style= {styles.scoreStyle}>{props.highScore}</span></h3></a>
    </nav>
  );
}

export default Navbar;
