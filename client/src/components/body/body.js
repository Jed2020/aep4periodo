import * as React from 'react';
import Button from './button.js';
import Typography from './typography.js';
import ProductHeroLayout from './layuot.js';

const backgroundImage =
  'https://tracan.com.br/wp-content/uploads/2020/04/Conhe%C3%A7a-a-colhedora-de-cana-que-%C3%A9-l%C3%ADder-de-mercado-1-1024x683.jpg';

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Mude para Biodiversidade
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Você sabia que o consumo de gasolina polue o dobro?
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="#cadastro"
        sx={{ minWidth: 200 }}
      >
        Cadastre-se
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Descubra essa experiência
      </Typography>
    </ProductHeroLayout>
  );
}