import { Grid, TextField, Button, Card, CardContent } from "@mui/material";
import React, { useState } from "react";

export const Home = () => {
  const [rev, setRev] = useState("");
  const [upper, setUpper] = useState("");
  const [squar, setSquar] = useState("");

  const handleTextChange = (e) => {
    const reversed = e.target.value.split("").reverse().join("");
    setRev(reversed);
  };

  const handleUpperText=(e)=>{
    const reversed = e.target.value.split(" ").reverse().join(" ");
    setUpper(reversed);
  };

  const handleSquare = (e) => {
    const number = parseFloat(e.target.value);
    const squared = isNaN(number) ? '' : Math.pow(number, 2);
    setSquar(squared);
};

  return (
    <Grid container spacing={2}>
      <Grid item xs={1}></Grid>

      <Grid item xs={10}>
      <Card sx={{border:"5px solid brown",padding:"30px",paddingBottom:"50px"}}>
        <CardContent>

        
        <h1 style={{ textAlign: "center" }}>Assignment 03</h1>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <TextField
              onChange={handleTextChange}
              variant="outlined"
              label="Reverse Letter"
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <Button
              sx={{ height: "53px", bgcolor: "brown", color: "wheat" }}
              fullWidth
              variant="contained"
            >
              <h2>{rev}</h2>
            </Button>
          </Grid>
          <Grid item xs={8}>
            <TextField
              fullWidth
              variant="outlined"
              label="Convert it into UpperCase"
              onChange={handleUpperText}
            />
          </Grid>
          <Grid item xs={4}>
            <Button
              sx={{ height: "53px", bgcolor: "brown", color: "wheat" }}
              variant="contained"
              fullWidth
            >
              <h2>{upper}</h2>
            </Button>
          </Grid>
          <Grid item xs={8}>
            <TextField label="Square Of Number" fullWidth onChange={handleSquare} />
          </Grid>
          <Grid item xs={4}>
            <Button
              sx={{ height: "53px", bgcolor: "brown", color: "wheat" }}
              variant="contained"
              fullWidth
            >
              <h2>{squar}</h2>
            </Button>
            
          </Grid>
        </Grid>
        </CardContent>
      </Card>
      </Grid>

      <Grid item xs={1}></Grid>
    </Grid>
  );
};
