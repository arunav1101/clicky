import React from "react";
import "../styles/Header.css";


const styles = {
  headerStyle: {
    background: "black"
  },
  headingStyle: {
    fontSize: 80,
    textAlign:'center'
  }
};

function Header({result,reset}) {
  return (
    <main>
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle}>Clicky Game !!</h1>
      {(result) && (reset)}
    </header>
    </main>
  );
}

export default Header;
