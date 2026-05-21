import { Box } from "@mui/material";

export default function FooterIndex() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#ae2dd5",
        width: "100%",
        height: "30px",
        position: "fixed",
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
        <p>&copy; Desenvolvido por Ana Carolina de Oliveira Monteiro</p>
    </Box>
  );
}





