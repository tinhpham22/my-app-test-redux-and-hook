import logo from './logo.svg';
import './App.css';
import Home from './home/home';
import ThemeContextProvider from './contexts/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Home></Home>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
