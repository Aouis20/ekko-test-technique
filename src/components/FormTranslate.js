import React from 'react'

const FormTranslate = ({ number }) => {
    const unites = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    
  return (
    <div>
        {number && <p>Le nombre {number} s'écrit {unites[number]} en anglais.</p>}
    </div>
  )
}

export default FormTranslate