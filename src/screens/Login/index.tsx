import React, { useEffect } from 'react';
import { setLoading } from '../../utils/loadingState';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import { auth } from '../../services/firebase';
import { translateMessageErrorToPTBR } from '../../utils/messageErrorsFirebase';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { redirect } from 'react-router-dom';
import { Box, TextField, Typography } from '@mui/material';
import { Button, Form } from './style';

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

  return (
    <Box display='flex' height='95vh' justifyContent='center' alignItems='center'>
      <Form onSubmit={formik.handleSubmit}>
        <Typography
          component='h1'
          variant='h4'
          fontWeight={800}
          color='#EAF6EA'
        >LOGIN</Typography>
        <TextField
          sx={{
            borderRadius: 3
          }}
          error={Boolean(formik.touched.email && formik.errors.email)}
          fullWidth
          helperText={formik.touched.email && formik.errors.email}
          label='E-mail'
          margin='normal'
          name='email'
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          type='email'
          value={formik.values.email}
          variant='filled'
          autoFocus
        />
        <TextField
          sx={{
            borderRadius: 3
          }}
          error={Boolean(formik.touched.password && formik.errors.password)}
          fullWidth
          helperText={formik.touched.password && formik.errors.password}
          label='Senha'
          margin='normal'
          name='password'
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          type='password'
          value={formik.values.password}
          variant='filled'
        />
        <Button variant='contained' type='submit'>ENTRAR</Button>
      </Form>
    </Box>
  )
}
export default Login
