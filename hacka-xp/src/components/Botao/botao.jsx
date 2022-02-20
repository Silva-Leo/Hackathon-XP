import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import "./botao.css"

export default function BasicButton({children}) {
  return (
    <Stack direction="row">
      <Button className='outlined' variant="outlined">{children}</Button>
    </Stack>
  );
}

