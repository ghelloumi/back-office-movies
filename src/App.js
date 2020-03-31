import React from 'react';
import AppHeader from "./components/AppHeader";
import Movies from "./components/organisms/Movies";

function App() {
  return (
        <div className="App">
            <AppHeader/>
            <Movies/>
        </div>
    );
}

export default App;
