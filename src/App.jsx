import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const variableSinUsar = 123;

  return (
    <main style={{ textAlign: 'center', marginTop: '4rem', fontFamily: 'sans-serif' }}>
      <h1>Laboratorio CI/CD Frontend</h1>
      <p>Despliegue y verificacion automatizada con React y GitHub Actions</p>
      
      <div style={{ marginTop: '2rem' }}>
        <butto 
          onClick={() => setCount((prev) => prev + 1)}
          style={{ padding: '0.75rem 1.5rem', fontSize: '1rem', cursor: 'pointer' }}
        >
          Clicks registrados: {count}
        </button>
      </div>
    </main>
  );
}

export default App;