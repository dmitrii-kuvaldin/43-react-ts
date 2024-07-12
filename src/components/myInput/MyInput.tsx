import "./myInput.css";

interface IInputProps {
  label?: string;
  name?: string;
  type?: 'text' | 'password' | 'email' | 'number';
  placeholder?: string;
}

export default function MyInput({ label = 'default', name='input', type='text', placeholder='default' }: IInputProps) {

  return (
    <>
      <label className='label'>{label}</label>
      <input type={type} name={name} placeholder={placeholder} />
    </>
  );
}
