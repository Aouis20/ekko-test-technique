import React, { useState } from 'react';
import TranslateSentence from './components/TranslateSentence'
import './App.css'

function App() {
  const [number, setNumber] = useState(0);
  
  return (
    <div className="App">

      {/* Header */}
      <header>

        {/* Society */}
        <div className='society'>
          <a href='https://www.ekko-formations.com'>
            <img id='icon' src="https://www.ekko-formations.com/assets/logo-6b0f160d3fbbb77ff69d603d9ce0126e80d828e2ff0a37af0e041dc92172be32.png" alt='ekko-logo' />
          </a>
          <h1>Test technique réalisé par Aouis CHOUKRI</h1>
        </div>

        {/* Socials */}
        <div className="socials">
          <ul>
            <li><a href="https://github.com/Aouis20"><img className='logo github' src="https://img.icons8.com/ios-glyphs/344/github.png" alt='aouis-github'/></a></li>
            <li><a href="https://www.linkedin.com/in/aouis-choukri/"><img className='logo linkedin' src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt='aouis-linkedin'/></a></li>
            <li><a href="http://aouis.alwaysdata.net"><img className='logo projects' src="https://cdn-icons-png.flaticon.com/512/5956/5956592.png" alt='aouis-projects'/></a></li>
          </ul>
        </div>

      </header>
      
      {/* Container */}
      <div className='container'>

        {/* Number Input */}
        <section>
          <h2>Entre un nombre et découvre comment l'écrire en anglais  (0-99)</h2>
          <form>
            <input type="number" name="number" min="0" max="99" value={number} onChange={e => setNumber(e.target.value)} />
          </form>
        </section>

        {/* Translate */}
        <section>
          <TranslateSentence number={number} />
        </section>

      </div>
    </div>
  );
}

export default App;
