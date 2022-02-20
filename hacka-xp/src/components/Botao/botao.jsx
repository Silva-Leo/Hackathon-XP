import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import "./botao.scss"

export default function BasicButtons() {
  return (
    <Stack direction="row">
      <Button className='outlined' variant="outlined">Clique aqui</Button>
    </Stack>
  );
}

