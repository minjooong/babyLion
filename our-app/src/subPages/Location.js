import React, { useState } from 'react';
//import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import '../index';
import App from './App';
import About from './About';
import Club from './Club';
//import Location from './Location';
import My from './My';
import New from './New';
import Notice from './Notice';

import '../index.css';
import Nav from '../nav';

import button1Image from './location_1f.jpg';
import button2Image from './location_2f.jpg';
import button3Image from './location_3f.jpg';
import button4Image from './location_45f.jpg';

function Location() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  const imagePaths = {
    button1: button1Image,
    button2: button2Image,
    button3: button3Image,
    button4: button4Image,
  };

  return (
    <div>
      <Nav />
      <h1
        style={{
          textAlign: 'center',
          fontSize: '24px',
          fontWeight: 'bold',
          margin: '20px 0',
          color: '#7C3AED',
        }}
      >
        학생회관 동방 위치
      </h1>
      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px' }}>
        <button
          className={`inline-block rounded bg-violet-500 px-8 py-3 text-sm font-medium text-white transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-violet-500 ${
            selectedButton === 'button1' ? 'selected' : ''
          }`}
          style={{ flex: '1', marginRight: '30px' }}
          onClick={() => handleButtonClick('button1')}
        >
          1F
        </button>
        <button
          className={`inline-block rounded bg-gray-100 px-8 py-3 text-sm font-medium text-violet-500 transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:text-violet-500 ${
            selectedButton === 'button2' ? 'selected' : ''
          }`}
          style={{ flex: '1', marginRight: '30px' }}
          onClick={() => handleButtonClick('button2')}
        >
          2F
        </button>
        <button
          className={`inline-block rounded bg-violet-500 px-8 py-3 text-sm font-medium text-white transition hover:-rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-violet-500 ${
            selectedButton === 'button3' ? 'selected' : ''
          }`}
          style={{ flex: '1', marginRight: '30px' }}
          onClick={() => handleButtonClick('button3')}
        >
          3F
        </button>
        <button
          className={`inline-block rounded bg-gray-100 px-8 py-3 text-sm font-medium text-violet-500 transition hover:-rotate-2 hover:scale-110 focus:outline-none focus:ring active:text--500 ${
            selectedButton === 'button4' ? 'selected' : ''
          }`}
          style={{ flex: '1', marginRight: '30px' }}
          onClick={() => handleButtonClick('button4')}
        >
          4.5F
        </button>
      </div>
      {selectedButton && (
        <div style={{ textAlign: 'center', marginTop: '30px', padding: '30px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <img
              src={imagePaths[selectedButton]}
              alt="Selected Image"
              style={{
                display: 'inline-block',
                margin: '0',
                maxWidth: '100%',
                maxHeight: '100%',
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Location;