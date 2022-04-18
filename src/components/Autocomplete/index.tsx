import React from 'react'

import { Autocomplete, TextField } from '@mui/material'
import { useController, UseControllerProps } from 'react-hook-form'

export interface IAutocompleteComponentProp extends UseControllerProps<any> {
  id: string
  label: string
  control: any
  width: number
  variant?: 'standard' | 'filled' | 'outlined'
  rules?: object
  defaultValue?: any
  options: object[]
  multiple?: boolean
}

export default function AutocompleteComponent(
  props: IAutocompleteComponentProp
) {
  const { field } = useController({
    name: '',
    control: props.control,
    rules: props.rules,
    defaultValue: props.defaultValue,
  })

  return (
    <Autocomplete
      sx={{ width: props.width }}
      id={props.id}
      options={props.options}
      multiple={props.multiple}
      renderInput={(params) => (
        <TextField
          {...params}
          {...props}
          {...field}
          label={props.label}
          variant={props.variant || 'outlined'}
          defaultValue={props.defaultValue}
        />
      )}
    />
  )
}
