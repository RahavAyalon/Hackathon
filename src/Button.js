import React from 'react';
import { Link } from 'react-router-dom';

export default function Button() {
  return (
    <>
      <div className="Buttons">
        <button>
          <Link to="/headers">Sky News</Link>
        </button>
        <button>The Guardian</button>
        <button>Al Jazeera</button>
      </div>
    </>
  );
}
