import React from "react";
import { Home } from "./components/Home";
import { Card, CardContent } from "@mui/material";

function App() {
  return (
    <Card sx={{marginTop: "100px"}}>
      <CardContent>
   <Home />

      </CardContent>
    </Card>
  );
}

export default App;
