import ReactDOM from 'react-dom/client';

import './index.css';
import Lesson06 from './lessons/lesson06/Lesson06';
import App from './app/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <App />
    <Lesson06/>
  </>
);


