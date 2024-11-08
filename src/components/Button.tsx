import React from 'react';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';

const StyledButton = styled(Button)`
  /* Add your custom styles here to override Material UI's defaults. */
`;

const Button: React.FC<ButtonProps> = ({
  variant,
  color,
  size,
  onClick,
  children,
  disabled,
}) => {
  return (
    <StyledButton
      variant={variant}
      color={color}
      size={size}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled ? 'true' : 'false'}
    >
      {children}
    </StyledButton>
  );
};

interface ButtonProps {
  variant?: 'contained' | 'outlined' | 'text';
  color?:
    | 'primary'
    | 'secondary'
    | 'inherit'
    | 'error'
    | 'info'
    | 'success'
    | 'warning';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}

export default Button;