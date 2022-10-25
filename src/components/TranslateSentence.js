/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'

const TranslateSentence = ({ number }) => {
  const [words, setWords] = useState([])
  const [enWord, setEnWord] = useState()
  const unites = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const tens = ['', 'ten','twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const uniqueNumbers = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const largeNumbers = ['','thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion'];

  // 0 - 99
  const TranslateNumberBelowHundred = number => {
    if (parseInt(number) >= 10) {        // 10+
      if (parseInt(number) !== 10) {      // x !== 10
        if (parseInt(number) %10 !== 0) {      // 20,30,40...
          if (parseInt(number) < 20) {       // 11,12,12...
            return uniqueNumbers[number[1]]
          }
          return tens[number[number.length-2]] + '-' + unites[number[number.length-1]]
        }
        return tens[number[number.length-2]]
      }
      return tens[1]
    }
    return unites[parseInt(number)]
  };

  // 0 - 999
  const TranslateNumber = numberSplit => {
    if (parseInt(numberSplit) >= 100) {   // 100+
      if(parseInt(numberSplit) %100 === 0) {  // 100,200,300
        return unites[numberSplit[0]] + ' hundred'
      }
      return unites[numberSplit[0]] + ' hundred ' + TranslateNumberBelowHundred(numberSplit.substring(1))
    }
    return TranslateNumberBelowHundred(numberSplit)
  }

  useEffect(() => {
    const numberSplit = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ").split(" ")  // "123456" => ["123", "456"]
    for (let i=0; i<numberSplit.length; i++) {      //  ["123", "456"] => ['one hundred twenty-three', 'four hundred fifty-six']
      if (numberSplit.length >= 2 && parseInt(numberSplit[i]) === 0) {    // ≠ 'One million zero thousand'
        continue
      }
      else {
        words.push(TranslateNumber(numberSplit[i]))
        numberSplit.length-1 !== i && words.push(largeNumbers[numberSplit.length-1-i])    // ≠ 'one thousand two ' (last space)
      }
    };
    setEnWord(words.join(' '))
    setWords([])
  }, [number])

  return (
    <div className='sentence'>
      {parseInt(number) < 0 && <p>Le {number.length > 1 ? 'nombre' : 'chiffre'} <b>{number}</b> s'écrit <i>"{enWord}"</i> en anglais.</p>}
    </div>
  )
}

export default TranslateSentence