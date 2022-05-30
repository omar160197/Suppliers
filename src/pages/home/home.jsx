import { Box, Grid } from "@mui/material"
import Contact from "../../components/contacts/contact"
import SideBar from "../../components/sidebar/sidebar"
import SuplierForm from "../../components/supplierForm/supplierForm"

const Home =()=>{
    return (
    <Grid container >
        <Grid item xs={2} sx={{marginRight:"4%"}}>
            <Box sx={{height:"716.5px"}}>
                 <SideBar/>
            </Box>
        </Grid>
        <Grid item xs={3} sx={{marginRight:"12%"}}>
          <SuplierForm/> 
        </Grid>
        <Grid item xs={3} sx={{marginTop:"8%"}}>
        <Contact/>
        </Grid>
      </Grid>
      )
    
}
export default Home

