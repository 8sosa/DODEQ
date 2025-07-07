import React from "react";
import './Writeit.css';
import Posts from "../Components/Posts";
import Poems from "../Components/Poems";

export default function Writeit () {
  return (
    <>
      {/* Hero Section */}
      <div className="writeit-hero">
        <div className="overlay">
          <h1 className="hero-title caesar">YVIE WRITES IT</h1>
          <p className="hero-sub mont">Poetry. Prose.<br />Creative writing.</p>
        </div>
      </div>
      <Poems />
      <Posts />
    </>
  )
}
