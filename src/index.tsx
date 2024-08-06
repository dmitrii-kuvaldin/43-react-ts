import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';
import FormGender from './components/formGender/FormGender';
import Layout from './components/layout/Layout';
import Login from './components/login/Login';
import ProductPage from './components/productPage/ProductPage';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';
import RobotForm from './components/robotForm/RobotForm';
import Shop from './components/shop/Shop';
import StarWarsGallery from './components/starWarsGallery/StarWarsGallery';
import { getUserWithToken } from './features/auth/authAction';
import './index.css';
import { store } from './redux/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const token = localStorage.getItem('user-token');
// проверяем что токен пришел
if (token !== null) {
  // используем токен для авторизации
  store.dispatch(getUserWithToken(token));
}



root.render(
  <Provider store={store}>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path='/' element={<ProtectedRoute outlet={<StarWarsGallery />} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/shop' element={<ProtectedRoute outlet={<Shop />} />} />
          <Route path='/shop/:id' element={<ProtectedRoute outlet={<ProductPage />} />} />
          <Route path='/gender-form' element={<ProtectedRoute outlet={<FormGender />} />} />
          <Route path='/robot-form' element={<ProtectedRoute outlet={<RobotForm />} />} />
          <Route path='*' element={<h1>Error 404 😵</h1>} />
        </Route>
      </Routes>
    </HashRouter>
  </Provider>
);


