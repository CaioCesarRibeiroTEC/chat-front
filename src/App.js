import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ChatComponent from './components/chat';


function App() {

  return (
    <div className='container'>
      <div className='back-ground'></div>
        <ChatComponent />

    </div>   
  );
}

export default App;