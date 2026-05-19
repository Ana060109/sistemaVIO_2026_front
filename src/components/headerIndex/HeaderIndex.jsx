import { AppBar, Toolbar } from "@mui/material";

function HeaderIndex(){
    return(
        <AppBar position="static" sx={{backgroundColor:"#9705a8"}}>
            <Toolbar sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                <h2>SISTEMA VIO</h2>                
            </Toolbar>
        </AppBar>
    )
}

export default HeaderIndex;