import { NativeSelect, Select } from '@mui/material'
import React from 'react'

const SelectInput = () => {
  return (
    <Select Select={NativeSelect} className={props.className}  inputProps={props.inputprops}></Select>
  )
}

export default SelectInput