` <span>rate: {rate}</span>
      <span>count: {count}</span>
      {/* если объект может не придти как в этом случае, потому что props не обязательный нужно делать проверку на то, существуют ли данные */}
      {rating && <span>rate from object: {rating.rate}</span>}
      {/* короткий вариант проверки на существование через оператор '?' */}
      <span>rate from object: {rating?.rate}</span>`



```
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';

interface IProps {
  // за место outlet будут приходить компоненты, которые мы будем пробрасывать в эту обертку-фильтр
  outlet: JSX.Element;
}

// мы проверяем есть ли в redux данные по пользователю
// если есть то мы покажем компонент
// если нет перенаправим на логин
export default function ProtectedRoute({ outlet }: IProps) {
  // ! через useAppSelector vs достаем любые данные из redux store
  const { user, isLoading } = useAppSelector(store => store.user);
  // if (isLoading === true) {
  //   return (
  //     <>
  //       {isLoading && <Loader />}
  //       {user.username && { outlet }}
  //     </>
  //   );
  // }
  if (user.username) {
    return outlet;
  }
  // через Navigate из библиотеки react-router-dom мы делаем навигацию в login
  return <Navigate to='../login' />;
}


```
