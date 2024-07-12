import ReactDOM from 'react-dom/client';

import App from './app/App';
import './index.css';
import Lesson08 from './lessons/lesson08/Lesson08';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <App />
    {/* <Lesson07/> */}
    <Lesson08 />

  </>
);


