import React from 'react';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, TextField, Typography } from '@mui/material';
import axios from 'axios';

import { Button, Form } from './style';
import { setLoading } from '@contexts/loadingState';

interface IData {
  email: string,
  password: string
}

const Login: React.FC = () => {
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

    const { VITE_API_URL } = import.meta.env;

    axios.post(`${VITE_API_URL ?? 'http://localhost/'}auth/login`, { email, password }).then(response => {
      const { data } = response;
      if (data.token) {
        localStorage.setItem('token', data.token);
        window.dispatchEvent(new Event('storage'));
        setLoading(false);
      }
    }).catch(error => {
      setLoading(false);
      console.log(error)
      toast.error(error.response.data.message);
      formik.setSubmitting(false);
    });
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
