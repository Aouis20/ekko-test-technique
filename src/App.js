import React, { useState } from 'react';
import FormTranslate from './components/FormTranslate'

function App() {
  const [number, setNumber] = useState();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ekko test technique</h1>
      </header>
      <section>
        <h3>Entrer un nombre à traduire...</h3>
        <form>
          <label for="number">Nombre :</label>
          <input type="number" name="number" min="0" max="9" value={number} onChange={e => setNumber(e.target.value)} />
        </form>
        <FormTranslate number={number} />
      </section>
    </div>
  );
}

export default App;
