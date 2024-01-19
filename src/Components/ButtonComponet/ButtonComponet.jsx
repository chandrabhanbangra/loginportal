import { Button } from '@mui/material';

const ButtonComponet = (props) => {
  return (
    <Button startIcon={props.startIcon} endIcon={props.endIcon} color={props.color} disabled={props.disabled} variant={props.BtnVariant} sx={props.BtnStyle} onClick={props.handleClick} >{props.BtnText}</Button>
  )
}

export default ButtonComponet