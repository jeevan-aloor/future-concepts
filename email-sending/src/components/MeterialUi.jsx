import React from 'react'
import {Button,Autocomplete,TextField,Rating}  from '@mui/material'

function MeterialUi() {
  return (
    <div>
        <Button variant="outlined" href="#pen">add</Button>


        <div style={{height:"200px",border:"1px solid red"}}>
            menu
        </div>
        <div style={{height:"200px",border:"1px solid red"}}>
            menu
        </div>
        <div style={{height:"200px",border:"1px solid red"}}>
            menu
        </div>
        <div style={{height:"200px",border:"1px solid red"}}>
            menu
        </div>
        <div style={{height:"200px",border:"1px solid red"}}>
            menu
        </div>
        <div id="pen" style={{height:"200px",border:"1px solid red"}}>
            menu
        </div>
        <TextField
          
          label="Choose a country"
        //   inputProps={{
        //     ...params.inputProps,
        //     autoComplete: 'new-password', // disable autocomplete and autofill
        //   }}
        />
         <TextField
          
            variant="standard"
            label="Multiple values"
            placeholder="Favorites"
          />
          <Rating
  name="simple-controlled"
  value={3}
//   onChange={( => {
//     setValue();
//   }}
/>
        
    </div>
  )
}

export default MeterialUi