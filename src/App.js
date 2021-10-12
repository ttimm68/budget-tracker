import './App.css';
import Header from './components/Header';
import Button from './components/Button';

const App = () => {
  return <div className='App'>
    <header>
      <Header 
        title="Budget Tracker"
      />
    </header>
  </div>;
};

export default App;