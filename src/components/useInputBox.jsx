import React, { useId } from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    curr_currency = "usd",
    currencyOption = [],
    onCurrencyChange,
}) {
    const amountInputId = useId();

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5 border-b border-gray-300"
                    type="number"
                    placeholder="0"
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>

            <div className="w-full sm:w-1/2 flex flex-col sm:flex-row justify-end text-right mt-4 sm:mt-0">
                <p className="text-black/100 mb-2 sm:mb-0 sm:mr-2 w-full sm:w-auto">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none w-15"
                    value={curr_currency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                    
                        {currencyOption.map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                    
                </select>
            </div>
        </div>
    );
}

export default InputBox;
