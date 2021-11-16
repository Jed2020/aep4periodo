import React from "react";
import { DataGrid } from '@mui/x-data-grid';
import Axios from 'axios';



export default function DataTable() {
    const columns = [
        { field: 'id', headerName: 'ID', width: 150 },
        { field: 'data', headerName: 'Data', width: 150 },
        { field: 'etanol', headerName: 'Etanol', width: 150 },
        { field: 'gasolina', headerName: 'Gasolina', width: 200 },
        {field: 'litros', headerName: 'Litros', type: 'number', width: 150},
        {field: 'indice', headerName: 'Indice', type: 'number', width: 150},
      ];
      
      var id_calculo = 0
      var data = 0
      var etanol = 0
      var gasolina = 0
      var litros = 0 
      var indice = 0
      
      Axios.post("http://localhost:3001/api/table", {
        id_calculo: id_calculo, data: data, etanol: etanol, gasolina: gasolina, litros: litros, indice: indice,
      }).then();

      const rows = [
        {id: id_calculo, data: data, etanol: etanol, gasolina: gasolina, litros:litros,  indice: indice},        
      ];  

      console.log(rows);
    
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
