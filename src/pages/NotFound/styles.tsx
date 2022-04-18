import React from 'react'

import { styled } from '@mui/material/styles'
import Container from '@mui/material/Container'

export const ContainerStyled = styled(Container)(() => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
}))
