import React, { useState } from "react";
import {
  Checkbox,
  FormControlLabel,
  Grid,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import { ButtonUnstyled } from "@mui/base";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Keyworder = () => {
  const [isLoading, setIsLoading] = useState({});
  const [tags, setTags] = useState({});
  const [limit, setLimit] = useState({});
  const [checkLimit, setCheckLimit] = useState({});
  const [data, setData] = useState({});

  return (
    <Grid container spacing={2}>
      <Grid item xs={7}>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Palabras"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={2}>
        <FormControlLabel
          value="bottom"
          control={<Checkbox />}
          label="Limite"
          labelPlacement="bottom"
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          fullWidth
          id="outlined-basic"
          type="number"
          label="Cantidad"
          variant="filled"
          defaultValue="50"
        />
      </Grid>
      <Grid item xs={12}>
        <ButtonUnstyled>Holi</ButtonUnstyled>
      </Grid>
      <Grid item xs={12}>
        <TextareaAutosize minRows={20} style={{ width: "100%" }} />
      </Grid>
    </Grid>
  );
};

export default Keyworder;
