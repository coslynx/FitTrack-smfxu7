// src/components/GoalForm.tsx

import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import styled from '@emotion/styled';
import { createGoal } from '../services/firestore';

const StyledGoalForm = styled('form')`
  display: flex;
  flexDirection: column;
  gap: 16px;
  width: 100%;
  max-width: 400px;
`;

const GoalForm: React.FC = () => {
  const [name, setName] = useState('');
  const [targetValue, setTargetValue] = useState('');
  const [duration, setDuration] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name || !targetValue || !duration) {
      console.error('Please fill in all required fields.');
      return;
    }

    const newGoalData = {
      name,
      targetValue,
      duration,
      notes,
    };

    try {
      await createGoal(newGoalData);
      setName('');
      setTargetValue('');
      setDuration('');
      setNotes('');
    } catch (error) {
      console.error('Error creating goal:', error);
    }
  };

  return (
    <StyledGoalForm onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Goal Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Target Value"
            variant="outlined"
            fullWidth
            value={targetValue}
            onChange={(e) => setTargetValue(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Duration (e.g., weeks, days)"
            variant="outlined"
            fullWidth
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Notes (optional)"
            variant="outlined"
            fullWidth
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" type="submit">
            Add Goal
          </Button>
        </Grid>
      </Grid>
    </StyledGoalForm>
  );
};

export default GoalForm;