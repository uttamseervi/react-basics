import { useState } from 'react'
import { InputBox } from './Components'
import useCurrencyInfo from './Hooks/UseCurrencyInfo'
import './App.css'
// A HOOK IS NOTHING BUT ITS A METHOD OR A FUNCTION IT IS PURELY JS  CODE THAT GETS EXECUTED
function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("USD"); // US Dollar is the default currency
  const [to, setTo] = useState("INR")
  const [convertedAmount, setConvertedAmount] = useState(0)

  // const currencyInfo = useCurrencyInfo(from)
  // const options = Object.keys(currencyInfo)
  const currencyInfo = useCurrencyInfo(from);
const options = currencyInfo ? Object.keys(currencyInfo) : [];

const swap = () => {
    setConvertedAmount(amount); // Store the current converted amount
    setAmount(convertedAmount); // Set the amount with the converted amount
    setFrom(to);
    setTo(from);
  }
  

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }


  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/2104152/pexels-photo-2104152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();

            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                onAmountChange={setAmount}
                onCurrencyChange={(currency) => {
                  setAmount(currency)
                }}
                currencyOptions={options}
                selectCurrency={to}

              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                onAmountChange={setAmount}
                onCurrencyChange={(currency) => {
                  setTo(currency)
                }}
                currencyOptions={options}
                selectCurrency={from}
                amountDisable={true}

              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to  {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
