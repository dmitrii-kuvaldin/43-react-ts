import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import FormGender from './components/formGender/FormGender';
import Layout from './components/layout/Layout';
import StarWarsGallery from './components/starWarsGallery/StarWarsGallery';
import './index.css';
import RobotForm from './components/robotForm/RobotForm';
import MyForm from './components/myForm/MyForm';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // обертка router над всеми элементами
  <HashRouter>
    {/* обертка для описания маршрутов */}
    <Routes>
      {/* маршрут-родитель в котором мы будем отображать дочерние компоненты */}
      <Route path='/' element={<Layout />} >
        <Route path='/' element={<StarWarsGallery />} />
        <Route path='/gender-form' element={<FormGender />} />
        <Route path='/robot-form' element={<RobotForm />} />
        <Route path='/my-form' element={<MyForm />} />
      </Route>
    </Routes>
  </HashRouter>
);


