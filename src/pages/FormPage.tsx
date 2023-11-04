import { Button, Slider, TextField, Typography } from "@mui/material";
import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function FormPage(){

    
  
    const navigate = useNavigate();
    
    const [symptoms, setSymptoms] = useState<string>("")
    const [conditions, setConditions] = useState<string>("")
    const [painRating, setPainRating] = useState<number>(5)


    function handleSubmit(event: FormEvent){
      
    }
    
    return <div>{
      <>
      {/* <Typography>{symptoms}</Typography> */}
      
      <Typography>Symptoms:</Typography>
      <TextField
        fullWidth
        multiline
        label=""
        id="comments"
        // value={matchNum}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setSymptoms(event.target.value); } } />
      <Typography>Conditions:</Typography>
      <TextField
        fullWidth
        multiline
        label=""
        id="comments"
        // value={matchNum}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setConditions(event.target.value); } } />
      <Typography>Pain:</Typography>
        <Slider
          aria-label="painRating"
          defaultValue={5}
          valueLabelDisplay="on"
          step={1}
          marks
          min={1}
          max={10}
          value={painRating}
          onChange={(event, newValue) => { setPainRating(newValue as number) }}
        />
        <Button>Submit</Button>
        
      </>
      
      
    }</div>;
  }