import { InputLabel } from '@mui/material'
import React from 'react'

const FormInputLabel = (props) => {
  return (
    <InputLabel className={props.className}>{props.Lable}</InputLabel>
  )
}

export default FormInputLabel