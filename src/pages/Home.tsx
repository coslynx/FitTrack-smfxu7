import React from 'react';
import { Typography, Button, Grid } from '@mui/material';
import { styled } from '@emotion/styled';
import { useRouter } from 'next/router';
import { useAuth } from '../hooks/useAuth';

const StyledContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 20px;
`;

const Home: React.FC = () => {
  const { user, isAuthenticated, signIn, signUp } = useAuth();
  const router = useRouter();

  return (
    <StyledContainer>
      <Typography variant="h3" gutterBottom>
        {isAuthenticated ? `Welcome, ${user?.displayName}` : "Welcome to Fitness Tracker"}
      </Typography>

      <Grid container spacing={2}>
        {isAuthenticated ? (
          <Grid item xs={12}>
            <Button variant="contained" onClick={() => router.push('/dashboard')}>
              Dashboard
            </Button>
          </Grid>
        ) : (
          <>
            <Grid item xs={12}>
              <Button variant="contained" onClick={() => router.push('/signup')}>
                Sign Up
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" onClick={() => router.push('/login')}>
                Login
              </Button>
            </Grid>
          </>
        )}
      </Grid>
    </StyledContainer>
  );
};

export default Home;