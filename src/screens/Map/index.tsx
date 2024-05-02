import React, { useEffect, useState } from 'react';
import './style.css';
import * as Icon from '@mui/icons-material'
import { Box, Button, Container, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

interface IState {
  UF: string;
  description: string;
}

const Map: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      state: 'PE',
      city: ''
    },
    onSubmit: () => {}
  });
  const [states, setStates] = useState<IState[]>([]);
  const [cities, setCities] = useState<string[]>([]);

  useEffect(() => {
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
      .then(response => response.json())
      .then(data => setStates(data.map((result:any) => ({UF: result.sigla, description: result.nome}))))
  }, []);

  useEffect(() => {
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${formik.values.state}/municipios`)
      .then(response => response.json())
      .then(data => setCities(data.map((result:any) => result.nome)))
  }, [formik.values.state]);

  return (
    <>
      <Container sx={{mt: '9vh', height: '86vh'}} disableGutters>
        <Box display='flex' flexDirection='column' gap={2}>
          <Typography component='h2' variant='h4' textAlign='center'>Saiba onde encontrar nossas lixeiras</Typography>
          <Box display='flex' alignItems='center' gap={4}>
            <FormControl fullWidth>
              <InputLabel id='state-select-label'>Selecione um estado</InputLabel>
              <Select
                name='state'
                labelId='state-select-label'
                value={formik.values.state}
                onChange={formik.handleChange}
                label='Selecione um estado'
              >
                {states.map(state => (
                  <MenuItem key={state.UF} value={state.UF}>{state.description}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id='city-select-label'>Selecione uma cidade</InputLabel>
              <Select
                name='city'
                labelId='city-select-label'
                value={formik.values.city}
                onChange={formik.handleChange}
                label='Selecione uma cidade'
              >
                {cities.map(city => (
                  <MenuItem key={city} value={city}>{city}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <div>
              <Button variant='contained' endIcon={<Icon.Search/>} color='success'>Buscar</Button>
            </div>
          </Box>
          <Box width='100%' height='70vh'>
            <MapContainer center={[-8.0540764,-34.8927565]} zoom={12} style={{width: '100%', height: '100%'}}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[-8.0540764,-34.8927565]}>
                <Popup>Metal, Plástico</Popup>
              </Marker>
            </MapContainer>
          </Box>
        </Box>
      </Container>
    </>
  )
}
export default Map;
