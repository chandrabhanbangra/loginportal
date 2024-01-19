import { Slider } from '@mui/material'


const SliderComponet = (props) => {
  return (
    <Slider  sx={props.sx} defaultValue={props.defaultValue} max={props.max}  />
  )
}

export default SliderComponet