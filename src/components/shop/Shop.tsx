import { useEffect, useState } from "react";
import style from "./shop.module.css";


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
          {/* 4. map() объектов из массива */}
          {products.map((product) => (
            // 5. этот код можно вынести в отдельный компонент и данные передавать через props
            <div key={product.id} className={style.card}>
              <h5>{product.title.length > 20 ? product.title.substring(0, 20) + '...' : product.title}</h5>
              <span>{product.price}$</span>
              <div className={style.imgWrapper}>
                <img src={product.image} alt={product.title} />
              </div>
            </div>
            // здесь заканчивается код для отдельной карточки
          ))}
        </div>
      )}
    </>
  );
};
export default Shop;
