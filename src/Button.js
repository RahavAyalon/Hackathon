import React from 'react';

export default function Button() {
  return (
    <>
      <div className="Buttons">
        <a href="/filtering" class="bloop">
          <img
            class="jazz"
            src="./assets/al-jazeera.jpeg"
            width={200}
            height={200}
          />
        </a>

        <a href="/filtering" class="bloop">
          <img
            class="jazz"
            src="./assets/the-guardian.jpeg"
            width={200}
            height={200}
          />
        </a>
        <a href="/filtering" class="bloop">
          <img
            class="jazz"
            src="./assets/forbes.svg"
            width={200}
            height={200}
          />
        </a>
      </div>
    </>
  );
}
