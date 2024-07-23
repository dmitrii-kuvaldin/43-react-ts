import { Link } from 'react-router-dom';
import MyButton from '../myButton/MyButton';
import style from './productCard.module.css';

interface IProductCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
  rate?: number;
  count?: number;
  rating?: {
    rate: number;
    count: number;
  };
}

export default function ProductCard({ id, title, price, image, rate, count, rating }: IProductCardProps) {
  return (
    <div key={id} className={style.card}>
      <h5>{title.length > 20 ? title.substring(0, 20) + '...' : title}</h5>
      <span>{price}$</span>
      <div className={style.imgWrapper}>
        <img src={image} alt={title} />
      </div>
      {/* ссылка link добавляет к адресу id приведенное к строке, значение плюсуется к url, попадает в динамический параметр, после мы забираем его через useParams() */}
      <Link to={String(id)}><MyButton name='about product'/></Link>
    </div>
  );
}

