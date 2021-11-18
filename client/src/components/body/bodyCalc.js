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
      <Typography color="inherit" align="center" variant="h4" marked="center">
      Segundo Estadão(2020), os carros particulares são responsáveis 72,6% da emissão de gases do efeito estufa na cidade de São Paulo.
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h6"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Segundo Esalq(2021) um litro de Gasolina gera 2,27 total de kg CO2, no caso do Etanol, 1,09 total de kg CO2.

      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="#calculo"
        sx={{ minWidth: 200 }}
      >
        Calcule
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Descubra o quanto de poluição você deixa de emitir usando um biocombustível.
      </Typography>
    </ProductHeroLayout>
  );
}