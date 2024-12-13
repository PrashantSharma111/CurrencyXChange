import { useState } from 'react';
import './App.css';
import InputBox from './components/useInputBox';
import useCurrencyInfo from './hooks/currencyinfo';

function App() {
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [amount, setAmount] = useState(1);
  const [finalAmount, setFinalAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);


  const afterswap = () => {
    setFrom(to);
    setTo(from);
    setAmount(finalAmount);
    setFinalAmount(amount);
  };

  const result = () => {
    setFinalAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/47344/dollar-currency-money-us-dollar-47344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              result();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOption={options} 
                onAmountChange={(amount) => setAmount(amount)}
                onCurrencyChange={(currency) => setFrom(currency)}
                curr_currency={from}
              />
            </div>
            <div className="relative w-full h-0.5 mb-3">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/3 border-2  border-white rounded-md bg-slate-500 text-white px-2 py-0.5"
                onClick={afterswap}
              >
                Swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={finalAmount}
                currencyOption={options} 
                onCurrencyChange={(currency) => setTo(currency)}
                curr_currency={to}
              />
            </div>
            <button type="submit" className="w-full bg-slate-500 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
