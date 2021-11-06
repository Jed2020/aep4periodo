import React, { useState } from "react";
import{
    Button,
    TextField,
    Checkbox,
  FormControlLabel,
} from "@material-ui/core";

import "../form.css";
import Axios from 'axios';

var indiceEtanol = 1.09;
var indiceGasolina = 2.27;

function Calc() {
    const [data, setData] = useState('');
    const [etanol, setEtanol] = useState(true);
    const [gasolina, setGasolina] = useState(true);
    const [litros, setLitros] = useState('');
    const [consumo, setConsumo] = useState('');
    const [resultado, setResultado] = useState('');

    const result = (etanol, litros) => {
        if (etanol) {
            document.write("Ao usar Etanol a poluição será:",indiceEtanol*litros);
        } else {
            document.write("Ao usar Gasolina a poluição será:",indiceGasolina*litros);
        }
    }
    

    const submitReview = () => {
      Axios.post("http://localhost:3001/api/calc", {
        data: data, etanol: etanol, gasolina: gasolina, litros: litros, consumo: consumo, resultado : resultado
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
          <TextField
            id="resultado"
            label="Resultado"
            variant="outlined"
            margin="dense"
            fullWidth
            value={submitReview}
            onChange={(event) => {setResultado(event.target.value)}}
          />
        </form>  
      </div>
    );
  }
  
  export default Calc;