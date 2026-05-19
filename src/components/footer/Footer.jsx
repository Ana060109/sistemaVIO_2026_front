import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#c42dd5",
        width: "100%",
        height: "30px",
        position: "fixed",
        bottom: 0,
      }}
    />
  );
}
