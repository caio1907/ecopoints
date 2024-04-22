import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { Grid, Paper } from '@mui/material';

const Dashboard: React.FC = () => {
  const plasticData = [30, 20, 10, 10, 0, 10];
  const metalData = [15, 16, 0, 0, 15, 0];
  const xLabels = [
    '15/04',
    '16/04',
    '17/04',
    '20/04',
    '21/04',
    '22/04',
  ];
  return (
    <Grid container gap={3}>
      <Grid item>
        <Paper elevation={2}>
          <LineChart
            width={500}
            height={300}
            series={[
              { data: metalData, label: 'Metal', id: 'pvId' },
              { data: plasticData, label: 'Plástico', id: 'uvId' },
            ]}
            xAxis={[{ scaleType: 'point', data: xLabels }]}
            sx={{
              '.MuiLineElement-root, .MuiMarkElement-root': {
                strokeWidth: 1,
              },
              '.MuiLineElement-series-pvId': {
                strokeDasharray: '5 5',
              },
              '.MuiLineElement-series-uvId': {
                strokeDasharray: '3 4 5 2',
              },
              '.MuiMarkElement-root:not(.MuiMarkElement-highlighted)': {
                fill: '#fff',
              },
              '& .MuiMarkElement-highlighted': {
                stroke: 'none',
              },
            }}
          />
        </Paper>
      </Grid>
      <Grid item>
        <Paper elevation={2} sx={{p: 3}}>
          <h1>Legenda das Pontuções</h1>
          <li>Metal - 15 pontos</li>
          <li>Plastico - 10 pontos</li>
          <li>Outros residuos - 5 pontos</li>
          <li>Indicações - 5 pontos</li>
        </Paper>
      </Grid>
    </Grid>
  )
}
export default Dashboard;
