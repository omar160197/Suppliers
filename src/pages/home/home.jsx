import { Box, Grid } from "@mui/material"
import Contact from "../../components/contacts/contact"
import SideBar from "../../components/sidebar/sidebar"
import SuplierForm from "../../components/supplierForm/supplierForm"
import styles from "./home.module.css"

const Home =()=>{
    return (
      <div >
    <Grid container>
        <Grid item xs={2} className={styles.sideBar}>
            <Box sx={{height:"90vh"}}>
                 <SideBar/>
            </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={3} sx={{marginRight:"5%",marginLeft:"5%"}}>
          <SuplierForm/> 
        </Grid>
        <Grid item xs={12} sm={12} md={4} sx={{marginTop:"8%"}}>
        <Contact/>
        </Grid>
      </Grid>
      </div>
      )
    
}
export default Home

