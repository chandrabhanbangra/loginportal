import { TextField,InputAdornment } from '@mui/material'


const TextfieldInput = (props) => {
  return (
    <TextField  type={props.type}   variant={props.InputVariant} label={props.InlineLabel} placeholder={props.InputPlacholder} sx={props.InputStyle}  inputProps={props.InputProps}  ></TextField>
  )
}

export default TextfieldInput