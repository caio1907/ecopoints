import React, { useEffect } from 'react';
import { setLoading } from '../../../utils/loadingState';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import { auth } from '../../../services/firebase';
import { translateMessageErrorToPTBR } from '../../../utils/messageErrorsFirebase';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { redirect } from 'react-router-dom';
import recycleImage from '../../../assets/reciclagem.svg';
import './style.css';

interface IData {
  email: string,
  password: string
}

const Login: React.FC = () => {
  useEffect(() => {
    if (auth.currentUser?.uid) {
      redirect('/');
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
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
        .required('Senha é obrigatória')
    }),
    onSubmit: (values) => signIn(values)
  });

  const signIn = ({ email, password }: IData) => {
    setLoading(true);
    toast.dismiss();
    signInWithEmailAndPassword(auth, email, password).then(() => {
      setLoading(false)
    }).catch(error => {
      toast.error(translateMessageErrorToPTBR(error.code) ?? error.message);
      setLoading(false)
      formik.setSubmitting(false);
    })
  }

  const handleChangeInput = (event:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    formik.setFieldValue(name, value);
  }

  return (
    <form className='main-login' onSubmit={formik.handleSubmit}>
      <div className='left-login'>
        <h1>Faça o seu login<br/>E junte-se a esse movimento</h1>
        <img src={recycleImage} alt='EcoPoint'/>
      </div>
      <div className='card-login'>
        <h1>LOGIN</h1>
        <div className='textfield'>
          <label htmlFor='email'>Usuário</label>
          <input type='text' name='email' placeholder='Usuário' onChange={handleChangeInput} autoComplete='email'/>
          {formik.errors.email && <span>{formik.errors.email}</span>}
        </div>
        <div className='textfield'>
          <label htmlFor='password'>Senha</label>
          <input type='password' name='password' placeholder='Senha' onChange={handleChangeInput} autoComplete='current-password'/>
          {formik.errors.password && <span>{formik.errors.password}</span>}
        </div>
        <button className='button' type='submit'>Entrar</button>
      </div>
    </form>
  )
}
export default Login
