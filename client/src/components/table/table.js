import React, { useState, useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';
import Axios from 'axios';
import Typography from '../body/typography';

export default function DataTable() {
  const [rows, setRows] = useState([]);
  const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'data', headerName: 'Data', width: 200 },
    { field: 'etanol', headerName: 'Etanol', width: 150 },
    { field: 'gasolina', headerName: 'Gasolina', width: 150 },
    { field: 'litros', headerName: 'Litros', type: 'number', width: 150},
    { field: 'indice', headerName: 'Indice', type: 'number', width: 150},
  ];

  useEffect(() => {
    Axios.get("http://localhost:3001/api/table").then(function(response) {
      response.data.forEach(element => {
        element.data = new Date(element.data)
      });

      setRows(response.data);
    });
  }, []);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <Typography 
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Relatório de Calculo de Índice de Poluição
      </Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5} 
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
