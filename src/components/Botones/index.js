import React from 'react';
import { Link } from 'wouter';

import './Botones.css';

const pags = [1, 2, 3, 4];

export default function Botones({ keyword }) {
  return (
    <center>
      <ul className="App-pagination">
        {pags.map((pag) => {
          return (
            <Link to={`/page/${pag}`} key={pag}>
              <li
                className={
                  !keyword && pag === 1
                    ? 'active'
                    : parseInt(keyword) === pag
                    ? 'active '
                    : ''
                }
              >
                {pag}
              </li>
            </Link>
          );
        })}
        <Link
          to={
            !keyword
              ? '/page/2'
              : parseInt(keyword) === 4
              ? '/page/1'
              : `/page/${parseInt(keyword) + 1}`
          }
        >
          <li>&#62;</li>
        </Link>
      </ul>
    </center>
  );
}
