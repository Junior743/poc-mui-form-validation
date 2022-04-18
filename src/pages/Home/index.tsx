import React from 'react'

import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useNavigate } from "react-router-dom"


import { ContainerStyled } from './styles'

export default function HomePage() {
  let navigate = useNavigate()

  function goToSignup() {
    navigate('/cadastrar')
  }

  return (
    <ContainerStyled>
      <Typography variant="h3">Seja bem-vindo(a)</Typography>
      <br />
      <hr />
      <br />
      <Button variant="contained" onClick={goToSignup}>Cadastre-se</Button>
    </ContainerStyled>
  )
}
