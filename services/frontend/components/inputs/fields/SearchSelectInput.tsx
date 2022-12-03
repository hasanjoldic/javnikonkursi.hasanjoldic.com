import React from "react";

import TextField from "@mui/material/TextField";
import Autocomplete, { AutocompleteProps } from "@mui/material/Autocomplete";

import { ISelectOption } from "./types";

interface Props
  extends Omit<
    AutocompleteProps<ISelectOption, true, undefined, false>,
    "renderInput"
  > {
  label?: string;
}

export const SearchSelectInput: React.FC<Props> = ({
  label,
  placeholder,
  ...props
}) => {
  return (
    <Autocomplete
      {...props}
      renderInput={(params) => (
        <TextField {...params} label={label} placeholder={placeholder} />
      )}
      isOptionEqualToValue={(option, value) => option.value === value.value}
    />
  );
};
