import { Box } from "@mui/material";

export default function FooterIndex() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#c42dd5",
        width: "100%",
        height: "30px",
        position: "fixed",
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
        <p>&copy; Desenvolvido por Ana Carolina</p>
    </Box>
  );
}





