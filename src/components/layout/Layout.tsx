import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import styles from './layout.module.css';
import { useEffect } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { getUserWithToken } from '../../features/auth/authAction';

function Layout() {
  const dispatch = useAppDispatch()

  useEffect(()=> {
    // забираем если есть токен из браузера
    const token = localStorage.getItem('user-token')
    // проверяем что токен пришел
    if (token !== null) {
      // используем токен для авторизации
      dispatch(getUserWithToken(token))
    }
  }, [])

  return (

    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
