import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import styled from '@emotion/styled';

interface InputProps {
  label: string;
  type?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  fullWidth?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  type = 'text',
  value,
  onChange,
  error,
  required,
  fullWidth = true,
}) => {
  const [inputValue, setInputValue] = useState(value || '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange(e);
  };

  return (
    <TextField
      label={label}
      type={type}
      value={inputValue}
      onChange={handleChange}
      error={!!error}
      helperText={error}
      required={required}
      fullWidth={fullWidth}
      variant="outlined"
    />
  );
};

export default Input;