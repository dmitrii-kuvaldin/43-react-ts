import { useFormik } from 'formik';
import { useState } from 'react';
import styles from './formGender.module.css';

interface IFormGender {
  name: string;
}

interface IGenderData {
  name: string;
  gender: string;
  probability: number;
  count: number;
}

export default function FormGender() {

  // аналог обработки promise запросов
  // можете использовать цепочку из .then() или его

  const [genderData, setGenderData] = useState<IGenderData>({
    name: '',
    gender: '',
    probability: 0,
    count: 0
  });

  const fetchGender = async (name: string) => {
    const res = await fetch(`https://api.genderize.io/?name=${name}`);
    const data = await res.json();
    setGenderData(data);
  };

  const formik = useFormik({
    initialValues: {
      name: ''
    } as IFormGender,
    onSubmit: (values: IFormGender, { resetForm }) => {
      fetchGender(values.name);
      resetForm();
    }
  });

  // useEffect(()=> {
  //   fetchGender('dmitrii')
  // }, [])

  return (
    <>
      <h4>✨ Know name`s gender 🔮 </h4>
      <form onSubmit={formik.handleSubmit} className={styles.genderForm}>
        <input onChange={formik.handleChange} name='name' value={formik.values.name} placeholder='type name to analyze' type="text" />
        <button type="submit" >send request</button>

        {genderData.name && (
          <p>{genderData.name} is {genderData.gender === 'male' ? '💁‍♂️' : '💁‍♀️'} {genderData.probability * 100}%</p>
        )}
      </form>
    </>
  );
}
