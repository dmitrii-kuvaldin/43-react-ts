import MyInput from '../../components/myInput/MyInput';

const Lesson08 = () => {
  return (
    <div className='lesson-container'>
      <h3>Lesson 08</h3>
      <p>Один и тот же компонент с типизированными props, но с разными данными: </p>
      <MyInput/>
      <MyInput label='pass' name='password' placeholder='type your pass' type='password' />
    </div>
  );
};

export default Lesson08;
