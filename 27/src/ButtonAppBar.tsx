import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import "./ButtonAppBar.css"

interface ButtonAppBarProps {
  orientation: "horizontal" | "vertical"
}

export const ButtonAppBar: React.FC<ButtonAppBarProps> = ({ orientation }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <div
          className={orientation === "horizontal" ? "horizontal" : "vertical"}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </div>
      </AppBar>
    </Box>
  )
}
