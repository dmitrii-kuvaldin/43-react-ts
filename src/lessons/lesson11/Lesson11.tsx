import FormGender from '../../components/formGender/FormGender';
import styles from './lesson11.module.css';

const Lesson11 = () => {
  return (
    <div className='lesson-container'>
      <div className={styles.loader}></div>
      <h3 className={styles.heading}>lesson 11</h3>
      <p>Библиотека для работы с формами Formik</p>
      <FormGender />
    </div>
  );
};

export default Lesson11

