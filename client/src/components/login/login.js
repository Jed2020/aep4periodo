import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import{
    Button,
    TextField,
} from "@material-ui/core";
import "../form.css";
import Typography from '../body/typography';
import Axios from 'axios';

function MyForm() {
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');
    const history = useHistory();

    const submitReview = () => {
      Axios.post("http://localhost:3001/api/select", {
        cpf: cpf, senha: senha,
      }).then((response) => {
        localStorage.setItem("cpf", cpf);       
        localStorage.setItem("token", response.data.token); 
        Axios.defaults.headers.Authorization = "Bearer " + response.data.token;
        history.push('/calc');
        alert('Inserido com Sucesso!')
      });
    };
  
    return (
      <div id="cadastro" className="cadastroLogin">
        <Typography 
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
        >
        Faça seu de Login
        </Typography>
        <form onSubmit={(event) => {
          event.preventDefault();
        }}>
          <TextField
            id="cpf"
            label="CPF"
            variant="outlined"
            margin="dense"
            fullWidth
            value={cpf}
            onChange={(event) => {setCpf(event.target.value)}}
          />
          <TextField
            id="senha"
            label="Senha"
            variant="outlined"
            margin="dense"
            fullWidth
            value={senha}
            onChange={(event) => {setSenha(event.target.value)}}
          />
          <Button onClick={submitReview} className="btn-form" variant="contained" color="primary">
            Enviar
          </Button>
        </form>  
      </div>
    );
  }
  
  export default MyForm;