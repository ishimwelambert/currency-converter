import React, { useState } from 'react';

const CurrencyInput: React.FC = () => {
    const [amount, setAmount] = useState('');
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('EUR');

    return (
        <div className="flex flex-col mt-4">
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Amount"
                className="border p-2 mb-2"
            />
            <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
                className="border p-2 mb-2"
            >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                {/* Add more currencies as needed */}
            </select>
            <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                className="border p-2"
            >
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
                <option value="GBP">GBP</option>
                {/* Add more currencies as needed */}
            </select>
        </div>
    );
};

export default CurrencyInput;