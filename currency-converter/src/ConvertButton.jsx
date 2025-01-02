import React from 'react';

const ConvertButton = ({ onConvert }) => {
    return (
        <button 
            className="bg-green-500 text-white p-2 rounded" 
            onClick={onConvert}
        >
            Convert
        </button>
    );
};

export default ConvertButton;