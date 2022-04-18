import React from 'react'

import { styled } from '@mui/material/styles'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

export const ContainerStyled = styled(Container)(() => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
}))

export const BoxStyled = styled(Box)(() => ({
  width: '100%',
}))

export const BoxButton = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  pt: 2,
}))
