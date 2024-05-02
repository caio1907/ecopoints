import { Button as ButtonBase } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Form = styled('form')(() => ({
  width: '80vw',
  maxWidth: 500,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '30px 35px',
  backgroundColor: '#537052',
  borderRadius: 20,
  boxShadow: '0px 10px 40px #00000056'
}));

export const Button = styled(ButtonBase)(() => ({
  width: '100%',
  padding: '16px 0px',
  margin: 25,
  marginTop: 8,
  borderRadius: 8,
  marginBottom: 8,
  fontWeight: 800,
  letterSpacing: 3,
  backgroundColor: '#182b22'
}));
