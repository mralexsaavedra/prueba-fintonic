import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <a href="/">
        <FontAwesomeIcon icon="bars" />
        Browse
      </a>
      <a href="/">
        <FontAwesomeIcon icon="plus" />
        Add new questions
      </a>
      <a href="/">
        <FontAwesomeIcon icon="cogs" />
        API
      </a>
      <a href="/">
        <FontAwesomeIcon icon="comments" />
        Discuss
      </a>
      <a href="/">
        <FontAwesomeIcon icon="sign-in-alt" />
        Login
      </a>
    </header>
  );
}
