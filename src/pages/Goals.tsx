// src/pages/Goals.tsx
import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import { styled } from '@emotion/styled';
import GoalForm from '../components/GoalForm';
import GoalList from '../components/GoalList';
import { useAuth } from '../hooks/useAuth';
import firestoreService from '../services/firestore'; 

const StyledGoalsPage = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
`;

const Goals: React.FC = () => {
  const { user, isAuthenticated } = useAuth();
  const [goals, setGoals] = useState([]); 

  useEffect(() => {
    const fetchGoals = async () => {
      if (isAuthenticated && user) {
        try {
          const fetchedGoals = await firestoreService.getGoals(user.uid);
          setGoals(fetchedGoals); 
        } catch (error) {
          console.error('Error fetching goals:', error);
          // Display an error message to the user
        }
      }
    };

    fetchGoals(); 
  }, [isAuthenticated, user]); 

  return (
    <StyledGoalsPage>
      <Typography variant="h4" gutterBottom>
        Your Fitness Goals
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6}>
          <GoalForm /> 
        </Grid>
        <Grid item xs={12} sm={6}>
          <GoalList goals={goals} /> 
        </Grid>
      </Grid>
    </StyledGoalsPage>
  );
};

export default Goals;