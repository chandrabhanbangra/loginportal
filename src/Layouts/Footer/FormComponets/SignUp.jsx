import { FormControlLabel, Box, OutlinedInput, Checkbox, IconButton, FormControl, InputAdornment, Toolbar } from '@mui/material'
import React from 'react'
import InputMenu from '../../../Components/From/InputMenu'
import FormInputLabel from '../../../Components/From/FormInputLabel'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import TextfieldInput from '../../../Components/From/TextfieldInput';
import { CheckBox, Visibility, VisibilityOff } from '@mui/icons-material';
import { AccountCircle } from '@mui/icons-material'
import TextContent from '../../../Components/Typography/TextContent';
import DoneIcon from '@mui/icons-material/Done';

const SingUp = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Box className="GlobalInputbox" sx={{ maxWidth: "416px", padding: "32px", borderRadius: "16px", gap: "10px" }} display="flex" flexDirection="column" >
      <TextContent variant='h5' content="Sign Up" sx={{ fontWeight: "700", lineHeight: "32px", fontSize: "24px", }} />
      <FormInputLabel className="label" Lable="Email" />
      <InputMenu InputVariant="standard" endAdornment={<InputAdornment position="end"><HelpOutlineIcon /></InputAdornment>} />
      <FormInputLabel className="label" Lable="Set Password" />
      <InputMenu
        Id="standard-adornment-password"
        Type={showPassword ? 'text' : 'password'}
        InputVariant="filled"
        InputStyle={{}}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}

            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
            <HelpOutlineIcon />
          </InputAdornment>
        }
      />
      <FormInputLabel className="label" Lable="Confirm Password" />
      <InputMenu
        id="standard-adornment-password"
        type={showPassword ? 'text' : 'password'}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
            <HelpOutlineIcon />
          </InputAdornment>
        }
      />

      <FormControlLabel control={<Checkbox checkedIcon={<CheckBox style={{ color: "white", background: '#105968', width: "24px", height: "24px", borderRadius: "4px", }} />} defaultChecked />} label="I agree to registration agreement" />
      <Box sx={{backgroundColor:"black", color:"white", borderRadius:"10px" ,padding:"15px 15px 15px 3px"  }}>
        <Box className="formboxsuggestion">
        <DoneIcon/>
          <TextContent variant="body1" content="At least 8 characters in length."/>
        </Box>
        <Box className="formboxsuggestion">
        <DoneIcon/>
          <TextContent variant="body1" content="Maximum 20 characters allowed."/>
        </Box>
        <Box className="formboxsuggestion">
        <DoneIcon/>
          <TextContent variant="body1" content="At least one uppercase letter (A-Z)."/>
        </Box>
        <Box className="formboxsuggestion">
        <DoneIcon/>
          <TextContent variant="body1" content="At least one lowercase letter (a-z)."/>
        </Box>
        <Box className="formboxsuggestion">
        <DoneIcon/>
          <TextContent variant="body1" content="At least one digit (0-9)."/>
        </Box>
        <Box className="formboxsuggestion">
        
        <DoneIcon/>
          <TextContent variant="body1" content="At least one lspecial character."/>
        </Box>

        
      </Box>
    </Box>
  )
}

export default SingUp