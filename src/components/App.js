import React, {Component, useState} from "react";
import '../styles/App.css';

const Project = ({name,description}) => {
  return (
    <>
    <p data-ns-test="project-name">{name}</p>{" "}
    <p data-ns-test="project-description">{description}</p>
    </>
  );
};

function App() {
  return (
    <>
    <Project
     name="E-commerce"
     description="Build an end-to-end Ecommerce App"
    />
    <Project name="Netflix clone" description="Built a nice Netflix clone"/>
    <Project name="Game" description="Create a 2D Javascript Game"/>
    </>
  );
}


export default App;
