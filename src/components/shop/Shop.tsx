import { useEffect, useState } from "react";
import style from "./shop.module.css";
import ProductCard from '../productCard/ProductCard';


// 1. прописали типизацию для объекта из массива из API

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

  // 3. кладем данным в state и типизируем его. изменение state вызовет rerender компонента
  const [products, setProducts] = useState<IProduct[]>([]);


  // 2. объявляем функцию через async / await
  async function getData() {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProducts(data);
  }


  useEffect(() => {
    // 2.2 вызываем асинхронную функцию в useEffect() чтобы не попасть в бесконечный цикл
    getData();
    console.log('get data!');
  }, []);

  console.log('render!');
  
  return (
    <>
      <h3>Shop 🛒</h3>
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
