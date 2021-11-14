import React, { useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import Axios from 'axios';



export default function DataTable() {
    const columns = [
        { field: 'id', headerName: 'ID', width: 150 },
        { field: 'data', headerName: 'Data', width: 150 },
        { field: 'etanol', headerName: 'Etanol', width: 150 },
        { field: 'gasolina', headerName: 'Gasolina', width: 200 },
        {field: 'litros', headerName: 'Litros', type: 'number', width: 150},
        {field: 'resultado', headerName: 'Indice', type: 'number', width: 150},
      ];
      
      const [id_calculo, setId_calculo] = useState('');
      const [data, setData] = useState('');
      const [etanol, setEtanol] = useState(true);
      const [gasolina, setGasolina] = useState(true);
      const [litros, setLitros] = useState('');
      const [resultado, setResultado] = useState('');
      
      Axios.post("http://localhost:3001/api/table", {
        id_calculo: id_calculo, data: data, etanol: etanol, gasolina: gasolina, litros: litros, resultado: resultado,
      }).then();

      const rows = [
        {id: setId_calculo, data: setData, etanol: setEtanol, gasolina: setGasolina, litros:setLitros,  resultado: setResultado},        
      ];  
    
  return (
    <div style={{ height: 400, width: '100%' }}>
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
