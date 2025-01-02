import React, { useState } from 'react';
import Header from './components/Header';
import CurrencyInput from './components/CurrencyInput';
import ConvertButton from './components/ConvertButton';
import Result from './components/Result';

const App = () => {
    const [amount, setAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('EUR');
    const [convertedAmount, setConvertedAmount] = useState(null);

    const handleConversion = () => {
        // Conversion logic will go here
        // For now, we'll just simulate a conversion
        const conversionRate = 0.85; // Example conversion rate
        setConvertedAmount(amount * conversionRate);
    };

    return (
        <div className="app">
            <Header />
            <CurrencyInput 
                amount={amount} 
                setAmount={setAmount} 
                fromCurrency={fromCurrency} 
                setFromCurrency={setFromCurrency} 
                toCurrency={toCurrency} 
                setToCurrency={setToCurrency} 
            />
            <ConvertButton onClick={handleConversion} />
            <Result convertedAmount={convertedAmount} />
        </div>
    );
};

export default App;