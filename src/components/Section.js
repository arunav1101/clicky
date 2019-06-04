import React from "react";
import "../styles/Section.css";

const styles = {
  imageStyle: {
    marginRight:50,
    marginBottom:40
  }
}

function Section(props) {
  return (
        <div className="col mx-auto mb-5" >
        <img onClick={props.iwasClicked} id ={props.id} src={props.image} width ='200' height='200'  ></img>
        </div>
  );
}

export default Section;
