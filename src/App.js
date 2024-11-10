import React from 'react';
import ProjectGrid from './components/ProjectGrid';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1 className="app-title">Versai</h1>
      </header>
      <main className="app-main">
        <ProjectGrid />
      </main>
    </div>
  );
}

export default App;
