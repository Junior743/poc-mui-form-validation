import React from 'react'

import TextField from '@mui/material/TextField'
import { useController, UseControllerProps } from 'react-hook-form'

export interface ITextFieldComponentProp extends UseControllerProps<any> {
  label: string
  width?: number | string
  fullWidth?: boolean
}

export default function TextFieldComponent(props: ITextFieldComponentProp) {
  const { field } = useController(props)

  return <TextField {...props} {...field} />
}
