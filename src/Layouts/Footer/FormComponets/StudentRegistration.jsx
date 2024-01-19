import React from 'react'
import { Box, Checkbox, FormGroup, InputAdornment, MenuItem, Select, TextField, Toolbar, Stack, Slider, Grid } from '@mui/material'
import InputMenu from '../../../Components/From/InputMenu'
import FormInputLabel from '../../../Components/From/FormInputLabel'
import TextfieldInput from '../../../Components/From/TextfieldInput'
import TextContent from '../../../Components/Typography/TextContent'
import SliderComponet from '../../../Components/ButtonComponet/Slider/SliderComponet'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SelectInput from '@mui/material/Select/SelectInput'
import ButtonComponet from '../../../Components/ButtonComponet/ButtonComponet'


const StudentRegistration = () => {

    return (
        <Box sx={{ marginTop: { xs: "50px", md: "30px", marginBottom: "20px" } }}>
            <SliderComponet sx={{ marginTop: "-19px" }} defaultValue="1" max="3" />
            <Grid container maxWidth="sm"  className="GlobalInputbox" gap="20px" xs="10" sm="12" md="12" sx={{ justifyContent: "space-evenly" }} >
                <Grid item xs={10} sm={10} md={10} mt={4} >
                    <Box sx={{ display: "flex", width: "100%", padding: "0px", marginTop: "-20px" }}>
                        <Box sx={{ textAlign: "start" }} >
                            <TextContent sx={{ fontSize: { xs: "16px", md: "24px" }, fontWeight: "700", lineHeight: "24px" }} variant="h5" content="Student Registration Form" />
                            <TextContent sx={{ fontSize: { xs: "10px", md: "12px" }, fontWeight: "500", lineHeight: "24px" }} variant="h6" content="Fill out the form carefully for registration" />
                        </Box>
                        <Box sx={{ textAlign: "end", width: { sm: "200px", md: "352px" }, }}>
                            <TextContent sx={{ fontSize: "12px", fontWeight: "500" }} variant="h6" content="Student Info" />
                            <TextContent sx={{ fontSize: "14px", fontWeight: "600" }} variant="h5" content="Personal Details" />
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={10} sm={5} md={5}>
                    <FormGroup className='formgroups'>
                        <FormInputLabel Lable="First Name" />
                        <InputMenu className="globalinput" InputVariant="filled" endAdornment={<InputAdornment position="end"><HelpOutlineIcon /></InputAdornment>} />
                    </FormGroup>
                </Grid>
                <Grid item xs={10} sm={5} md={5}>
                    <FormGroup className='formgroups'>
                        <Box sx={{padding:"0px", display:'flex'}}>
                        <TextContent  variant="body1" content="Middle"/>
                        <TextContent className="optioncolor"  variant="caption" content="(Optional)"/>
                        </Box>
                        <InputMenu className="globalinput" InputVariant="filled" endAdornment={<InputAdornment position="end"><HelpOutlineIcon /></InputAdornment>} />
                        
                    </FormGroup>
                </Grid>
                <Grid item xs={10} sm={5} md={5}>
                    <FormGroup className='formgroups'>
                        <FormInputLabel Lable="Last Name" />
                        <InputMenu className="globalinput" InputVariant="filled" endAdornment={<InputAdornment position="end"><HelpOutlineIcon /></InputAdornment>} />
                    </FormGroup>
                </Grid>
                <Grid item xs={10} sm={5} md={5}>
                    <FormGroup sx={{ display: "flex", flexDirection: 'row', maxWidth: "352px", gap: "5px" }}>
                        <FormGroup sx={{width:{xs:"100%", sm:"47%", md:"153px"}}}>
                            <FormInputLabel Lable="Prifix" />
                            <Select sx={{ width: "100%" }}
                                className="globalinput"
                                id="outlined-select-currency "
                                endAdornment={<InputAdornment position="end"><HelpOutlineIcon /></InputAdornment>}>
                                <MenuItem>1</MenuItem>
                            </Select >
                        </FormGroup>
                        <FormGroup sx={{width:{xs:"100%", sm:"48%", md:"153px"}}} >
                        <Box sx={{padding:"0px", display:'flex'}}>
                        <TextContent  variant="body1" content="Suffix"/>
                        <TextContent className="optioncolor"  variant="caption" content="(Optional)"/>
                        </Box>
                            <Select sx={{ width: "100%" }}
                                className="globalinput"
                                id="outlined-select-currency "
                                endAdornment={<InputAdornment position="end"><HelpOutlineIcon /></InputAdornment>}>
                                <MenuItem></MenuItem>
                            </Select >
                        </FormGroup>
                    </FormGroup>
                </Grid>
                <Grid item xs={10} sm={5} md={5}>
                    <FormGroup className='formgroups'>
                        <FormInputLabel Lable="Preffered Name" />
                        <InputMenu className="globalinput" endAdornment={<InputAdornment position="end"><HelpOutlineIcon /></InputAdornment>} />
                    </FormGroup>
                </Grid>
                <Grid item xs={10} sm={5} md={5}>
                    <FormGroup className='formgroups'>
                        <FormInputLabel Lable="Date Of Brith" />
                        <InputMenu type="date" className="globalinput" endAdornment={<InputAdornment position="end"><HelpOutlineIcon /></InputAdornment>} />
                    </FormGroup>
                </Grid>
                <Grid item xs={10} sm={5} md={5}>
                    <FormGroup className='formgroups'>
                        <FormInputLabel Lable="Gender" />
                        <Select
                            className="globalinput"
                            id="outlined-select-currency "
                            endAdornment={<InputAdornment position="end"><HelpOutlineIcon /></InputAdornment>}>
                            <MenuItem>Male</MenuItem>
                            <MenuItem> Female </MenuItem>
                        </Select >
                    </FormGroup>
                </Grid>
                <Grid item xs={10} sm={5} md={5}>
                    <FormGroup className='formgroups'>
                        <FormInputLabel Lable="Ethinicity" />
                        
                        <Select
                            className="globalinput"
                            id="outlined-select-currency "
                            endAdornment={<InputAdornment position="end"><HelpOutlineIcon /></InputAdornment>}>
                            <MenuItem></MenuItem>

                        </Select >
                    </FormGroup>
                </Grid>
                
            </Grid>
            
        </Box>
    )
}

export default StudentRegistration