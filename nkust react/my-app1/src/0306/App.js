// import logo from './logo.svg';
import './App.css';
import React ,{useState,useEffect} from 'react';

function MyClock () {
  const [currenttime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Hello,world!</h1>
      <h2>It is {currenttime}.</h2>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <h1>Test1.</h1>
      <MyClock/>
    </div>
  );
}

export default App;
