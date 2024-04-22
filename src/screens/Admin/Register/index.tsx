import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import recycleImage from '../../../assets/reciclagem.svg';
import '../Login/style.css';

interface IData {
  email: string,
  password: string,
  name: String,
  dataNasc: Date,
  sexo: String,
  phone: String,
}

const Register: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      passwordConf: '',
      name: '',
      dataNasc: new Date(),
      sexo: '',
      phone: '',
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email('E-mail inválido')
        .max(255)
        .required('E-mail é obrigatório'),
      password: Yup
        .string()
        .max(255)
        .required('Senha é obrigatória'),
      passwordConf: Yup
        .string()
        .max(255)
        .required('Senha é obrigatória'),
      name: Yup
        .string()
        .max(255)
        .required('Nome é obrigatório'),
      dataNasc: Yup
        .date()
        .required('Data de Nascimento é obrigatória'),
      sexo: Yup
        .string()
        .max(1)
        .required('Sexo é obrigatório'),
      phone: Yup
        .string()
        .max(255)
        .required('Número de telefone é obrigatório'),
    }),
    onSubmit: (values) => signIn(values)
  });
  const signIn = (data: IData) => {
    console.log(data);
  }

  const handleChangeInput = (event:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    formik.setFieldValue(name, value);
  }

  return (
    <>
      <form className='main-login' onSubmit={formik.handleSubmit}>
      <div className='left-login'>
        <h1>Junte-se a esse movimento</h1>
        <img src={recycleImage} alt='EcoPoint'/>
      </div>
      <div className='card-login'>
        <h1>CADASTRE-SE</h1>
        <div className='textfield'>
          <label htmlFor='name'>Nome</label>
          <input type='text' name='name' placeholder='Nome completo' onChange={handleChangeInput}/>
          {formik.errors.name && <span>{formik.errors.name}</span>}
        </div>
        <div className='textfield'>
          <label htmlFor='dataNasc'>Data de Nascimento</label>
          <input type='text' name='dataNasc' placeholder='01/01/2000' onChange={handleChangeInput}/>
          {/* {formik.errors.dataNasc && <span>{formik.errors.dataNasc.getDate?.()}</span>} */}
        </div>
        <div className='textfield'>
          <label htmlFor='email'>E-mail</label>
          <input type='text' name='email' placeholder='fulano@gmail.com' onChange={handleChangeInput} autoComplete='email'/>
          {formik.errors.email && <span>{formik.errors.email}</span>}
        </div>
        <div className='textfield'>
          <label htmlFor='sexo'>Sexo</label>
          <input type='text' name='sexo' placeholder='F/M/I' onChange={handleChangeInput}/>
          {formik.errors.sexo && <span>{formik.errors.sexo}</span>}
        </div>
        <div className='textfield'>
          <label htmlFor='phone'>Telefone</label>
          <input type='text' name='phone' placeholder='(00)00000-0000' onChange={handleChangeInput}/>
          {formik.errors.phone && <span>{formik.errors.phone}</span>}
        </div>
        <div className='textfield'>
          <label htmlFor='password'>Senha</label>
          <input type='password' name='password' placeholder='Senha' onChange={handleChangeInput} autoComplete='current-password'/>
          {formik.errors.password && <span>{formik.errors.password}</span>}
        </div>
        <div className='textfield'>
          <label htmlFor='passwordConf'>Confirme sua senha</label>
          <input type='passwordConf' name='passwordConf' placeholder='Confirme sua senha' onChange={handleChangeInput} autoComplete='current-password'/>
          {formik.errors.passwordConf && <span>{formik.errors.passwordConf}</span>}
        </div>
        <button className='button' type='submit'>Cadastrar</button>
      </div>
    </form>
    </>
  )
}
export default Register;
