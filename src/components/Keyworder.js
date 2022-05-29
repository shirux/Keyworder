import React, { useState } from 'react';
import { Grid, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Keyworder = () => {

  const [isLoading, setIsLoading] = useState({});
  const [tags, setTags] = useState({});
  const [limit, setLimit] = useState({});
  const [checkLimit, setCheckLimit] = useState({});
  const [data, setData] = useState({});

  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <TextField fullWidth id="outlined-basic" label="Tags" variant="filled" />
      </Grid>
      <Grid item xs={4}>
        <Item>xs=4</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>xs=4</Item>
      </Grid>
      <Grid item xs={8}>
        <Item>xs=8</Item>
      </Grid>
    </Grid>
  );
}

export default Keyworder;