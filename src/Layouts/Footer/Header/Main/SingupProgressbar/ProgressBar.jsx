import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import {StepButton,StepIcon, createTheme,StepLabel, Paper,  StepConnector, ThemeProvider, Toolbar  } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import CreateIcon from '@mui/icons-material/Create';
import { Stack } from '@mui/system';
import '../../../../../index.css'
import SingUp from '../../../FormComponets/SignUp';
import StudentRegistration from '../../../FormComponets/StudentRegistration';
import ParentInfo from '../../../FormComponets/ParentInfo';
import ButtonComponet from '../../../../../Components/ButtonComponet/ButtonComponet';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TextContent from '../../../../../Components/Typography/TextContent';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const steps = {"Account Info":[<PeopleIcon/>], 'Student Info':[<PersonIcon/>], 'Parent Info':[<CreateIcon/>]};
 



function ProgressBar() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const [color, setcolor] = React.useState("")
  const totalSteps = () => {
    
    return Object.keys(steps).length;
  };
  
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  
  
  React.useEffect(()=>{
    if(activeStep == 0){
      let activeclass = document.getElementsByClassName('css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root')
      let first = document.getElementsByClassName('css-i4bv87-MuiSvgIcon-root')
      first[0].style.color="black";
      activeclass[0].style.color="white";
      first[2].style.color="#B0BEC5";
      first[1].style.color="#B0BEC5";
    }
    if(activeStep === 1  ){
      let first = document.getElementsByClassName('css-i4bv87-MuiSvgIcon-root')
      let activeclass = document.getElementsByClassName('css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root')
      first[0].style.color="white";
      activeclass[0].style.color="#105968";
      first[1].style.color="#105968";
    }
    if(activeStep === 2){
      let activeclass = document.getElementsByClassName('css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root')
      let first = document.getElementsByClassName('css-i4bv87-MuiSvgIcon-root')
      first[1].style.color="white";
      activeclass[1].style.color="#105968";
      first[2].style.color="#105968";
    }
    if(activeStep <2  ){
      let activeclass = document.getElementsByClassName('css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root')
      let first = document.getElementsByClassName('css-i4bv87-MuiSvgIcon-root')
      // first[1].style.color="black";
      activeclass[1].style.color="white"; 
    }
    
  }, [activeStep])
  

  return (
    <Box sx={{display:"flex", justifyContent:"center"}}>
      
    <Box sx={{ width:"fit-content",  marginTop:"60px",  }}>
     {activeStep < 3 && <Stack sx={{  width:"100%",alignItems:"center"}} >
       <Box sx={{width:{xs:"200px",sm:"313px"}, display:"flex",justifyContent:'center'}}>
        <Stepper sx={{gap:"3px"}} nonLinear className='singupbar' activeStep={activeStep}>
        
        {Object.entries(steps).map(([key, val]) => (
          
        <Step orientation="vertical" activeStep> 
        
        {val}
        
        <StepLabel >{key} </StepLabel>
        
        </Step>
        
        ))}
            
            
        
      </Stepper>
      </Box>
      </Stack>
     }
      <div>
        {activeStep == 3 &&
          <React.Fragment>
            <Box sx={{maxWidth:"800px",height:"252px",textAlign:'center', backgroundColor:"#ffff", gap:"24px"}}>
              <Box sx={{padding:"30px", gap:"24px", marginTop:"60px"}}>
            <Box ><TaskAltIcon sx={{width:"52px", height:"52px", color:"#2c889e"}}/></Box>
            <TextContent sx={{color:"#212121 ", fontWeight:"600"}}  variant="h6" content="Thank you for creating an account with this organization."></TextContent>
            <TextContent variant="caption1" sx={{color:"#616161", fontSize:"14px"}} content="Sometimes our emails may end up in your junk, spam or bulk mail folder. Please check these folders so you don’t miss out on receiving more information about issues."></TextContent>
            </Box>
            </Box>
            
          </React.Fragment>
          }
          
               
            <Paper sx={{borderRadius:"16px"}}>
              <Box sx={{minWidth:"200px", maxWidth:{sm:"600px", md:"752px"} }}>
              {activeStep == 0 &&
                <SingUp/>
                
              }
              {activeStep == 1 &&
                <StudentRegistration/>
              }
              {activeStep == 2 &&
                <ParentInfo/>
              }
            </Box>
            
              {activeStep == 0 && <Box >
                <Toolbar sx={{pt: 2, justifyContent:"center" ,paddingBottom:"20px", marginTop:"-20px"}}>
              <ButtonComponet   disabled={activeStep === 0} BtnStyle={{fontWeight:"600", fontSize:{xs:"11",sm:"16"},marginRight:"10px",color:"#105968", backgroundColor:"#E8F3F5", '&:hover':{backgroundColor:"#E8F3F5"} }} handleClick={handleBack} BtnVariant="contained" BtnText="Cancel"  onClick={handleNext}  />
              <ButtonComponet  BtnStyle={{backgroundColor:"#1A889E",  fontWeight:"600", fontSize:{xs:"11",sm:"16"},'&:hover':{backgroundColor:"#1A889E",} }} handleClick={handleNext} BtnVariant="contained" BtnText="Create Account"  onClick={handleNext}  />
             </Toolbar>
             </Box>}
             {activeStep == 1 && <Box >
                <Toolbar sx={{pt: 2, justifyContent:"end" ,paddingBottom:"20px", marginTop:"-20px"}}>
              <ButtonComponet   disabled={activeStep === 0} BtnStyle={{fontWeight:"600", fontSize:{xs:"11",sm:"16"},marginRight:"10px",color:"#105968", backgroundColor:"#E8F3F5", '&:hover':{backgroundColor:"#E8F3F5"} }} handleClick={handleBack} BtnVariant="contained" BtnText="Cancel"  onClick={handleNext}  />
              <ButtonComponet endIcon={<ArrowForwardIcon />}  BtnStyle={{backgroundColor:"#1A889E",  fontWeight:"600", fontSize:{xs:"11",sm:"16"},'&:hover':{backgroundColor:"#1A889E",} }} handleClick={handleNext} BtnVariant="contained" BtnText="Save & Continue"  onClick={handleNext}  />
             </Toolbar>
             </Box>}
             {activeStep == 2 && <Box >
                <Toolbar sx={{pt: 2, justifyContent:"end" ,paddingBottom:"20px", marginTop:"-20px"}}>
              <ButtonComponet startIcon={<ArrowBackIcon />}   disabled={activeStep === 0} BtnStyle={{fontWeight:"600", fontSize:{xs:"11",sm:"16"},marginRight:"10px",color:"#105968", backgroundColor:"#E8F3F5", '&:hover':{backgroundColor:"#E8F3F5"} }} handleClick={handleBack} BtnVariant="contained" BtnText="Previous"  onClick={handleNext}  />
              <ButtonComponet endIcon={<ArrowForwardIcon />}   BtnStyle={{backgroundColor:"#1A889E",  fontWeight:"600", fontSize:{xs:"11",sm:"16"},'&:hover':{backgroundColor:"#1A889E",} }} handleClick={handleNext} BtnVariant="contained" BtnText="Save & Continue"  onClick={handleNext}  />
             </Toolbar>
             </Box>}
            </Paper>
           
         
            
      </div>
    </Box>
    </Box>
    
  );
}
export default ProgressBar 




