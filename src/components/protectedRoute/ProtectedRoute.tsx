import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import Loader from '../loader/Loader';

interface IProps {
  // за место outlet будут приходить компоненты, которые мы будем пробрасывать в эту обертку-фильтр
  outlet: JSX.Element;
}

// мы проверяем есть ли в redux данные по пользователю
// если есть то мы покажем компонент
// если нет перенаправим на логин
export default function ProtectedRoute({ outlet }: IProps) {
  // ! через useAppSelector vs достаем любые данные из redux store
  const { isLoading, user } = useAppSelector(store => store.user);
  console.log('isLoading', isLoading);
  const token = localStorage.getItem('user-token');
  if (token !== null && isLoading) {
    return <Loader />;
  }

  if (token !== null && user.firstName) {

    return outlet;
  }

  return <Navigate to='../login' />;
}

