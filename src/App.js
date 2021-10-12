import './App.css';
import Header from './components/Header';
import AddTransaction from './components/AddTransaction';


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