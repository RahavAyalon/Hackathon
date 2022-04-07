import React from 'react';
import { Link } from 'react-router-dom';

export default function Button() {
  return (
    <>
      <div className="Buttons">
        <button class={"btn1"}>
          <Link to="/headers">Sky News</Link>
        </button>
        <button class={"btn1"}>The Guardian</button>
        <button class={"btn1"}>Al Jazeera</button>
      </div>
    </>
  );
}
