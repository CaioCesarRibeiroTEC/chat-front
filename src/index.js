import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserStorage } from './contexts/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserStorage>
    <App />
  </UserStorage>
);

