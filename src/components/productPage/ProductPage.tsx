import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import MyButton from '../myButton/MyButton';
import { IProduct } from '../shop/Shop';

const initialProduct: IProduct = {
  id: 0,
  title: '',
  price: 0,
  description: '',
  category: '',
  image: '',
  rating: {
    rate: 0,
    count: 0
  }
};

export default function ProductPage() {
  // useParams() возвращает объект с ключами параметров из адресной строки
  // с помощью него мы забираем данные, не передаем
  const { id } = useParams();

  const [product, setProduct] = useState<IProduct>(initialProduct);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);


  return (
    <div>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <img src={product.image} width={200} alt="" />
      <div>
        <Link to={'/shop'}><MyButton name='back to shop' /></Link>
      </div>
    </div>
  );
}
