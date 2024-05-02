import React from 'react';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { Container } from '@mui/material';

const History: React.FC = () => {
  const rows: GridRowsProp = [
    { id: 1, material: 'Plástico', quantity: 3, points: 30, date: '15/04/2024 14:22'},
    { id: 2, material: 'Metal', quantity: 1, points: 15, date: '15/04/2024 14:23'},
    { id: 3, material: 'Metal', quantity: 1, points: 15, date: '16/04/2024 16:42'},
    { id: 4, material: 'Plástico', quantity: 2, points: 20, date: '16/04/2024 17:02'},
    { id: 5, material: 'Plástico', quantity: 1, points: 10, date: '17/04/2024 10:23'},
    { id: 6, material: 'Plástico', quantity: 1, points: 10, date: '20/04/2024 13:42'},
    { id: 7, material: 'Metal', quantity: 1, points: 15, date: '21/04/2024 14:18'},
    { id: 8, material: 'Plástico', quantity: 1, points: 10, date: '22/04/2024 14:22'},
  ]
  const columns: GridColDef[] = [
    { field: 'material', headerName: 'Material', flex: 1 },
    { field: 'quantity', headerName: 'Quantidade', flex: 1 },
    { field: 'points', headerName: 'Pontos', flex: 1 },
    { field: 'date', headerName: 'Data', flex: 1 },
  ]
  return (
    <Container>
      <DataGrid
        rows={rows}
        columns={columns}
      />
    </Container>
  )
}
export default History;
