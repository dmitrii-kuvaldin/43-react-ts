import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './robotForm.module.css';


interface IFormValues {
  model: string;
  creator: string;
  email: string;
}

// * проверка данных в форме
// .required() - требует не оставлять поле незаполненным
// .number() - проверяет с приведением типов, что это число
// .string() - проверка на строку
// .typeError('сообщение в случае ошибки') - сообщение об ошибке для любого типа
// .min(100, 'сообщение в случае ошибки') - не меньше, чем данное значение
// .max(1000, 'сообщение в случае ошибки') - не больше, чем данное значение
// .email('сообщение в случае ошибки') - проверка на email

const schema = Yup.object().shape({
  model: Yup
    .number()
    .typeError('введи свой номер, робот 🧑‍🔬')
    .required('напиши свою модель!')
    .min(100, 'твоя модель должна начинаться с 100!')
    .max(1000, 'ты не такой робот! модель до 1000...'),
  creator: Yup
    .string()
    .required('скажи, кто твой создатель'),
  email: Yup
    .string()
    .email('некорректный формат email')
    .required('email вашей компании обязателен!'),
});


export default function RobotForm() {


  const formik = useFormik({
    initialValues: {
      model: '',
      creator: '',
      email: ''
    } as IFormValues,
    // добавляем схему валидации из yup
    validationSchema: schema,
    // валидируем только по нажатию на submit
    validateOnChange: false,
    onSubmit: (values: IFormValues, { resetForm }) => {
      console.log(values);
      resetForm();
    }
  });


  return (
    <>
      <form onSubmit={formik.handleSubmit} className={styles.loginForm}>
        <label>Это форма для 🤖</label>
        <input value={formik.values.model} name='model' onChange={formik.handleChange} type="text" placeholder='ваша модель' />
        <input value={formik.values.creator} name='creator' onChange={formik.handleChange} type="text" placeholder='имя создателя' />
        <input value={formik.values.email} name='email' onChange={formik.handleChange} type="text" placeholder='email производителя' />
        <button type='submit'>отправить</button>
      </form>
      <span className={styles.errors}>{formik.errors.model}</span>
      <span className={styles.errors}>{formik.errors.creator}</span>
      <span className={styles.errors}>{formik.errors.email}</span>
    </>


  );
}
