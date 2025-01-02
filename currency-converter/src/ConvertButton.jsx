// currency-converter/src/ConvertButton.jsx
import React from 'react';

const ConvertButton = ({ onClick }) => {
    return (
        <button 
            className="bg-green-500 text-white p-2 rounded" 
            onClick={onClick}
        >
            Convert
        </button>
    );
};

export default ConvertButton;