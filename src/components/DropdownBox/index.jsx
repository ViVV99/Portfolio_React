import {} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useState } from 'react';

import './index.scss';

// import { Container } from './styles';

function DropdownBox() {
  const [isOpen, setIsOpen] = useState();

  return (
    <div className="dropdown-box">
      <div className="dropdown-title">
        <h4>Testing</h4>
      </div>
      <div className="dropdown-icon"></div>
      <div className="dropdown-content">
        <p>Blablabla</p>
      </div>
    </div>
  );
}

export default DropdownBox;
