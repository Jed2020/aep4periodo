import React, { useState } from "react";
import{
    Button,
    TextField,
    Checkbox,
  FormControlLabel,
} from "@material-ui/core";

import "../form.css";
import Axios from 'axios';

function Calc() {
    const [data, setData] = useState('');
    const [etanol, setEtanol] = useState(true);
    const [gasolina, setGasolina] = useState(true);
    const [litros, setLitros] = useState('');
    const [consumo, setConsumo] = useState('');
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
        data: data, etanol: etanol, gasolina: gasolina, litros: litros, consumo: consumo,
      }).then((result));
      
    };
  
    return (
      <div className="form">
        <h1>Faça seu Calculo</h1>
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
          <TextField
            id="consumo"
            label="Km por Litro"
            variant="outlined"
            margin="dense"
            fullWidth
            value={consumo}
            onChange={(event) => {setConsumo(event.target.value)}}
          />
          <Button onClick={submitReview} className="btn-form" variant="contained" color="primary">
            Calcular
          </Button>
          <div>
              <p>Resultado: {resultado}</p>
          </div>
        </form>  
      </div>
    );
  }
  
  export default Calc;