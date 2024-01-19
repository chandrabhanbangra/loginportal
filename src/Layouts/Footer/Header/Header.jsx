import AppBar from '@mui/material/AppBar';
import { Box, Toolbar, Container, ThemeProvider, createTheme } from '@mui/material';
import TextContent from '../../../Components/Typography/TextContent'
import ButtonComponet from '../../../Components/ButtonComponet/ButtonComponet';

const theme = createTheme({
  palette:{
  primary:{
    main:"#f9fafb",
    light:"yellow",
    dark:"white",
    contrastText:"Black"
  },
  Typography:{
    fontFamily: 'Inter, Arial'
  }
}
})

function Header() {


  return (
    <Container >
      <ThemeProvider theme={theme}>
      <AppBar  elevation={0} >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <TextContent variant="Text" content="Logo" sx={{
            fontSize: "calc(1.375rem + ((1vw - 2.68px) * 1.0896))",
            fontWeight: "600",
            color:"black",
            fontFamily:"Inter"
          }} />
          <Toolbar>
            <ButtonComponet BtnVariant="Text" BtnStyle={{fontSize:{xs:"11px",sm:"14px"}, '&:focus': { outline: "none" } }} BtnText="Alreadey have an account?" />
            <ButtonComponet BtnVariant="Text" BtnStyle={{fontSize:{xs:"12x",sm:"16px"},  backgroundColor: "#E8F3F5", fontWeight: "600", '&:focus': { outline: "none" } }} BtnText="Login Now" />
          </Toolbar>
        </Toolbar>
      </AppBar>
      </ThemeProvider>
    </Container>
  );
}
export default Header