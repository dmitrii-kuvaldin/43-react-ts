import { Link, useLocation } from 'react-router-dom';
import styles from './header.module.css';

import { links } from './links';
// import { useAppSelector } from '../../redux/hooks';

export default function Header() {
  // const { products} = useAppSelector(state => state.products);
  const location = useLocation();

  return (
    <header className={styles.header}>
      {/* {products.length> 0 && <span>{products[0].title}</span>} */}
      {links.map((el, index) => (
        <Link
          key={index}
          className={location.pathname === el.pathname ? styles.active : ''}
          to={el.pathname}>{el.title}</Link>
      ))}

    </header>
  );
}

