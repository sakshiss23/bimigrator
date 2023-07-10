import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function AlertDialog() {
  const [open, setOpen] = useState(false);
  const [isSourceSelected, setSourceSelected] = useState(false);
  const [isDestinationSelected, setDestinationSelected] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSourceSelected(false);
    setDestinationSelected(false);
  };

  return (
    <div>
      <Button
        onClick={handleClickOpen}
        className="button"
        variant="contained"
        startIcon={<PlayArrowIcon />}
        sx={{
          p: 1.5,
          fontFamily: "Roboto, sans-serif",
          fontSize: 11,
          textTransform: "uppercase",
          letterSpacing: 2,
          fontWeight: 500,
          color: "#fff",
          backgroundColor: "#1565c0",
          border: "none",
          borderRadius: 15,
          boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
          transition: "all 0.3s ease 0s",
          cursor: "pointer",
          outline: "none",
          "&:hover": {
            backgroundColor: "#231557",
            boxShadow: "0px 8px 15px rgba(35, 21, 87, 0.2)",
            color: "#fff",
            transform: "translateY(-7px)",
            p: 2,
          },
          zIndex: 10,
        }}
      >
        Let&apos;s get started
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{ width: "100%" }}
      >
        <DialogTitle sx={{ textAlign: "center" }} id="alert-dialog-title">
          {"Pick an option"}
        </DialogTitle>
        <DialogContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: 400,
              p: 2,
            }}
          >
            <FormControl fullWidth size="small" sx={{ m: 1 }}>
              <InputLabel id="demo-simple-select-label">Source</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={}
                label="Source"
                onChange={() => setSourceSelected(true)}
              >
                <MenuItem value={10}>Tableu</MenuItem>
                <MenuItem value={20}>Power BI</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth size="small" sx={{ m: 1 }}>
              <InputLabel id="demo-simple-select-label">Destination</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={}
                label="Destination"
                onChange={() => setDestinationSelected(true)}
              >
                <MenuItem value={10}>AWS Quicksight</MenuItem>
                <MenuItem value={20}>Power BI</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Box
            sx={{
              width: "100%",
              textAlign: "center",
            }}
          >
            {isDestinationSelected && isSourceSelected && (
              <Button
                onClick={handleClose}
                autoFocus
                variant="contained"
                size="small"
              >
                Let&apos;s Dive In
              </Button>
            )}
            <Button onClick={handleClose} autoFocus>
              Close
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </div>
  );
}
