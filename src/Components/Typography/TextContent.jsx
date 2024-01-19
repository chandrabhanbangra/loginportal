import { Typography } from '@mui/material';

const TextContent = (props) => {
  console.log(props.vb)


  return (
    <Typography className={props.className} variant={props.variant} color={props.color} sx={props.sx}>{props.content}</Typography>
  )
}

export default TextContent