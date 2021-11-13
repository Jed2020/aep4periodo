import React, { useState } from "react";
import{
    Button,
    TextField,
    Checkbox,
  FormControlLabel,
} from "@material-ui/core";

import "../form-calc.css";
import Axios from 'axios';

function Calc() {
    const [data, setData] = useState('');
    const [etanol, setEtanol] = useState(true);
    const [gasolina, setGasolina] = useState(true);
    const [litros, setLitros] = useState('');
    const [resultado, setResultado] = useState('');

    const result = (resultado) => {
      let data = resultado.data
      setResultado(data.msg_resultado)
    }

    const submitReview = () => {

      if (!etanol && !gasolina) {
        alert('Você precisa escolher ao menos um combustível!')
        setResultado('')
        return
      }

      Axios.post("http://localhost:3001/api/calc", {
        data: data, etanol: etanol, gasolina: gasolina, litros: litros,
      }).then((result));
      
    };
  
    return (
      <div className="form-calc">
        <h1>Calculo Índice de Poluição</h1>
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
              <p><h2>Resultado: {resultado}</h2></p>
          </div>
        </form>  
      </div>
    );
  }
  
  export default Calc;