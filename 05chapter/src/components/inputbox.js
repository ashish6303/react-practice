import React from 'react'

function inputbox() {
    label, 
    amount,
    amountChange,
    currencyChange,
    currencyOption = [],
    currencyDisable= false,
    amountDisable=false,
    className=""

  return (
    <>
        <div>
            <label>{label}</label>
            <input
                type='number'
                className=''
                value={amount}
                amountChange={amountChange}
                currencyChange={currencyChange}
                
            />
        </div>
    </>
  )
}

export default inputbox