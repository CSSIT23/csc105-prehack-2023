import React from "react";
import { Autocomplete, InputAdornment, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  return (
    <Autocomplete
      freeSolo
      disableClearable
      options={[]}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="What do you want to listen to?"
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            
          }}
   
        />
      )}
      sx={searchStyle}
    />
  );
};

const searchStyle = {
  backgroundColor: "#2E2E2E",
  color:"#FFFFFF",
  borderRadius: "30px",
  maxWidth: "400px",
  marginBottom: "30px",
  '& .MuiInputBase-input::placeholder': {
    color: '#FFFFFF', // Customize the color of the placeholder text
  },
  '& .MuiSvgIcon-root': {
    color: '#FFFFFF', // Customize the color of the icon
  },
};

export default SearchBar;
