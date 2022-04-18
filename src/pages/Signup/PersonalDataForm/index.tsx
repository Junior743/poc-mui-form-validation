import React from 'react'

import { Control } from 'react-hook-form'
import Container from '@mui/material/Container'

import TextFieldComponent from '../../../components/TextField'

export interface ISignupPageProp {
  control: Control<any>
}

export default function PersonalDataForm(props: ISignupPageProp) {
  return (
    <Container>
      <TextFieldComponent
        control={props.control}
        name="name"
        label="Nome"
        fullWidth={true}
      />
    </Container>
  )
}
