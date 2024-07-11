import ReactDOM from 'react-dom/client';

import './index.css';
import App from './app/App';
import Lesson07 from './lessons/lesson07/Lesson07';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <App />
    <Lesson07/>

  </>
);


