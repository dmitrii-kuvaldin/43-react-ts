import { useEffect } from "react";
import { getProducts } from '../../features/products/productsAction';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import Loader from '../loader/Loader';
import ProductCard from '../productCard/ProductCard';
import style from "./shop.module.css";


export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const Shop = () => {
  // * Работа с данными в компонентах через redux:
  // * useAppDispatch - отправка actions, функций для работы с данными
  // * useAppSelector() - получение данных из store

  // кладем в переменную dispatch вызов useAppDispatch()
  const dispatch = useAppDispatch();

  // получаем данные из store через useAppSelector()
  const { products, isLoading, error } = useAppSelector(state => state.products);

  useEffect(() => {
    // вызываем dispatch и внутри в аргументе вызываем нужный action
    dispatch(getProducts());
  }, [dispatch]);


  return (
    <>
      {error && <h3>{error}</h3>}
      {isLoading && <Loader />}
      {products.length > 0 && (
        <div className={style.container}>
          {products.map((product) => (
            <ProductCard key={product.id} id={product.id} image={product.image} title={product.title} price={product.price} rate={product.rating.rate} count={product.rating.count} />
          ))}
        </div>
      )}
    </>
  );
};
export default Shop;
