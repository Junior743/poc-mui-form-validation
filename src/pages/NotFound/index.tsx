import React from 'react'

import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom'

import { ContainerStyled } from './styles'

export default function NotFoundPage() {
  let navigate = useNavigate()

  function goToHome() {
    navigate('/')
  }

  return (
    <ContainerStyled>
      <Typography variant="h3">Error 404 - Page Not Found</Typography>
      <br />
      <hr />
      <br />
      <Button variant="contained" onClick={goToHome}>
        Voltar para home!
      </Button>
    </ContainerStyled>
  )
}
