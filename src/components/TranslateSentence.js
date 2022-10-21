/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'

const TranslateSentence = ({ number }) => {
  const [enWord, setEnWord] = useState("")
  const unites = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const tens = ['', 'ten','twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const uniqueNumbers = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  useEffect(() => {
    if (number.length > 1) {        // 10+
      if (parseInt(number) !== 10) {      // 10
        if (parseInt(number)%10 !== 0) {      // 20,30,40...
          if (parseInt(number) < 20 ) {       // 11,12,12...
            return setEnWord(uniqueNumbers[number[1]])
          }
          return setEnWord(tens[number[number.length-2]] + '-' + unites[number[number.length-1]])
        }
        return setEnWord(tens[number[number.length-2]])
      }
      return setEnWord(tens[1])
    } 
    return setEnWord(unites[number])
  }, [number])

  return (
    <div className='sentence'>
      {console.log(number, enWord)}
      {parseInt(number)>= 0 && parseInt(number)<100 && <p>Le {number.length > 1 ? 'nombre' : 'chiffre'} <b>{number}</b> s'écrit <i>"{enWord}"</i> en anglais.</p>}
    </div>
  )
}

export default TranslateSentence