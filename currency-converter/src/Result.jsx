// currency-converter/src/Result.jsx
import React from 'react';

const Result = ({ convertedAmount }) => {
    return (
        <div className="mt-4">
            <h2 className="text-xl font-semibold">Converted Amount:</h2>
            <p className="text-lg">{convertedAmount}</p>
        </div>
    );
};

export default Result;