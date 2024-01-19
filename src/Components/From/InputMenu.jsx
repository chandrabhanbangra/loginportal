import { TextField,InputAdornment, Input, OutlinedInput } from '@mui/material'
import React from 'react'

const InputMenu = (props) => {
  return (
    <OutlinedInput type={props.type}  className={props.className} id={props.Id}  variant={props.InputVariant} label={props.InlineLabel} placeholder={props.InputPlacholder} sx={props.InputStyle} endAdornment={props.endAdornment} ></OutlinedInput>
  )
}

export default InputMenu