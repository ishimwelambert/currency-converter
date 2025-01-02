import React from 'react';

const Result = ({ convertedValue }) => {
    return (
        <div className="mt-4">
            <h2 className="text-xl font-semibold">Converted Amount:</h2>
            <p className="text-lg">{convertedValue}</p>
        </div>
    );
};

export default Result;