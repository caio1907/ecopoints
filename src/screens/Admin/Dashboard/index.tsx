import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const Dashboard: React.FC = () => {
  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
  const xLabels = [
    '01',
    '05',
    '08',
    '15',
    '16',
    '25',
    '26',
  ];
  return (
    <>
    <h1>Não aguento mais essa merda!</h1>
      <LineChart
        width={500}
        height={300}
        series={[
          { data: pData, label: 'Metal', id: 'pvId' },
          { data: uData, label: 'Plástico', id: 'uvId' },
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
    </>
  )
}
export default Dashboard;
