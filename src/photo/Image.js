import React from 'react'
import Paper from '@mui/material/Paper';

export default function Image({image}) {
  return (
    <Paper elevation={0}> <img src={image}/> </Paper>
  )
}
