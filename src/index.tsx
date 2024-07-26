import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';
import FormGender from './components/formGender/FormGender';
import HomePage from './components/homePage/HomePage';
import Layout from './components/layout/Layout';
import MyForm from './components/myForm/MyForm';
import ProductPage from './components/productPage/ProductPage';
import RobotForm from './components/robotForm/RobotForm';
import Shop from './components/shop/Shop';
import StarWarsGallery from './components/starWarsGallery/StarWarsGallery';
import './index.css';
import { store } from './redux/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // подключаем store к приложению через обертку Provider из react-redux
  <Provider store={store}>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path='/' element={<HomePage />} />
          <Route path='/shop' element={<Shop />} />
          {/* импортируем компонент, указав в path параметр id через двоеточие */}
          <Route path='/shop/:id' element={<ProductPage />} />
          <Route path='/gender-form' element={<FormGender />} />
          <Route path='/robot-form' element={<RobotForm />} />
          <Route path='/my-form' element={<MyForm />} />
          <Route path='/star-wars-gallery' element={<StarWarsGallery />} />
          <Route path='*' element={<h1>Error 404 😵</h1>} />
        </Route>
      </Routes>
    </HashRouter>
  </Provider>
);


