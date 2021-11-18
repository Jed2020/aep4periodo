import React, { useState } from "react";
import{
    Button,
    TextField,
    Checkbox,
  FormControlLabel,
} from "@material-ui/core";
import Typography from '../body/typography';

import "../form-calc.css";
import Axios from 'axios';

function Calc() {
    const [data, setData] = useState('');
    const [etanol, setEtanol] = useState(true);
    const [gasolina, setGasolina] = useState(true);
    const [litros, setLitros] = useState('');
    const [indice, setIndice] = useState('');

    const result = (resultado) => {
      let data = resultado.data
      setIndice(data.msg_resultado)
    }

    const submitReview = () => {

      const cpf = localStorage.getItem("cpf") 

      if (!etanol && !gasolina) {
        alert('Você precisa escolher ao menos um combustível!')
        setIndice('')
        return
      }

      Axios.post("http://localhost:3001/api/calc", {
        data: data, etanol: etanol, gasolina: gasolina, litros: litros, indice: submitReview, id_cpf: cpf
      }).then((result))
        alert('Cadastro realizado com Sucesso!')   
    };
  
    return (
      <div id="calculo"className="form-calc">
      <Typography 
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Calculo Índice de Poluição
      </Typography>
        <form onSubmit={(event) => {
          event.preventDefault();
        }}>
          <TextField
            id="data"
            label="Data"
            variant="outlined"
            margin="dense"
            fullWidth
            value={data}
            onChange={(event) => {setData(event.target.value)}}
          />
          <div className="checkboxes">
          <FormControlLabel
            control={
              <Checkbox
                value="etanol"
                color="primary"
                name="Etanol"
                checked={etanol}
                onChange={(event) => {
                  setEtanol(event.target.checked);
                }}
              />
            }
            label="Etanol"
          />
          <FormControlLabel
                control={<Checkbox
                value="gasolina"
                color="primary"
                name="Gasolina"
                checked={gasolina}
                onChange={(event) => {
                    setGasolina(event.target.checked);
                }} 
                />}
                label="Gasolina"
            />
          </div>
          <TextField
            id="litros"
            label="Qtd de Litros"
            variant="outlined"
            margin="dense"
            fullWidth
            value={litros}
            onChange={(event) => {setLitros(event.target.value)}
            }
          />
          <Button onClick={submitReview} className="btn-form" variant="contained" color="primary">
            Calcular
          </Button>
          <div>
           <Typography 
            color="inherit"
            align="center"
            variant="h5"
            sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
           >
            Resultado: {indice}
           </Typography>
          </div>
        </form>  
      </div>
    );
  }
  
  export default Calc;