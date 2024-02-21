import React, { useState } from 'react';

const Modal = () => {
  const [showModal, setShowModal] = useState(true); // State for controlling modal visibility

  const modalStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.0)', // Transparent background
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const contentStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent white background
    padding: '30px',
    borderRadius: '15px', // Rounded corners
    maxWidth: '400px',
    textAlign: 'center',
    position: 'relative', // To position close button
    display: 'flex',
    flexDirection: 'column', // Arrange buttons in a column
    gap: '20px', // Gap between buttons
  };

  const closeButtonStyle = {
    position: 'absolute',
    fontSize: '15px',
    top: '10px',
    right: '10px',
    cursor: 'pointer',
    padding: '5px',
    borderRadius: '50%', // Set borderRadius to 50% for a circle
    width: '30px', // Adjust the width and height to your preference
    height: '30px',
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    outline: 'none', // Remove default focus outline
  };

  const buttonStyle = {
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    padding: '3px 5px',
    borderRadius: '20px',
    cursor: 'pointer',
    width: '100%',
    height: '3em', // Make buttons take full width
    marginBottom: '10px', // Remove default margin
  };

  const handleCancel = () => {
    setShowModal(false); // Close the modal
  };

  const handleRedirect = (url) => {
    window.location.href = url; // Redirect to the specified URL
  };

  return (
    <>
      {showModal && (
        <div style={modalStyle}>
          <div style={contentStyle}>
            <button style={closeButtonStyle} onClick={handleCancel}>x</button>
            <h2>Albums</h2>
            <div className="button-container">
              <button style={buttonStyle} onClick={() => handleRedirect('')}>
                Shorts CNC Day3
              </button>
              <button style={buttonStyle} onClick={() => handleRedirect('')}>
                LAB PROMO
              </button>
              <button style={buttonStyle} onClick={() => handleRedirect('')}>
                Cutterhead manufacturing
              </button>
              <button style={buttonStyle} onClick={() => handleRedirect('https://flic.kr/s/aHBqjBeTBf')}>
                Bitac 19-2-24 // DONE
              </button>
              <button style={buttonStyle} onClick={() => handleRedirect()}>
                Bitac 18-2-24 
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
