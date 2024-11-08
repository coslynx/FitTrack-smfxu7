import React, { useState, useEffect } from 'react';
import { Grid, List, ListItem, ListItemText, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { getGoals } from '../services/firestore';
import { Goal } from '../types';

const GoalList: React.FC = () => {
  const [goals, setGoals] = useState<Goal[]>([]);

  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const fetchedGoals = await getGoals();
        setGoals(fetchedGoals);
      } catch (error) {
        console.error('Error fetching goals:', error);
        // Display a user-friendly error message
      }
    };

    fetchGoals();
  }, []);

  const StyledListItem = styled(ListItem)`
    background-color: #f5f5f5;
    border-radius: 5px;
    &:hover {
      background-color: #e0e0e0;
      cursor: pointer;
    }
  `;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5">Your Goals</Typography>
      </Grid>
      <Grid item xs={12}>
        <List>
          {goals.map((goal) => (
            <StyledListItem key={goal.id}>
              <ListItemText
                primary={<Typography variant="body1">{goal.name}</Typography>}
                secondary={
                  <>
                    <Typography variant="body2">
                      Target: {goal.targetValue}
                    </Typography>
                    <Typography variant="body2">
                      Duration: {goal.duration}
                    </Typography>
                  </>
                }
              />
            </StyledListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

export default GoalList;