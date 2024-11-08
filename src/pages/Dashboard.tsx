import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Grid, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import { useAuth } from '../hooks/useAuth';
import firestoreService from '../services/firestore'; // You will create this file

const StyledDashboard = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
`;

const Dashboard: React.FC = () => {
  const { user, isAuthenticated, signOut } = useAuth();
  const [userData, setUserData] = useState(null);
  const [recentActivity, setRecentActivity] = useState([]);
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      if (isAuthenticated && user) {
        try {
          const fetchedUserData = await firestoreService.getUserData(user.uid);
          setUserData(fetchedUserData);
        } catch (error) {
          console.error('Error fetching user data:', error);
          // Consider displaying a user-friendly error message 
        }
      }
    };

    fetchUserData();
  }, [isAuthenticated, user]);

  useEffect(() => {
    const fetchRecentActivity = async () => {
      if (isAuthenticated && user) {
        try {
          const fetchedRecentActivity = await firestoreService.getRecentActivity(user.uid);
          setRecentActivity(fetchedRecentActivity);
        } catch (error) {
          console.error('Error fetching recent activity:', error);
        }
      }
    };

    fetchRecentActivity();
  }, [isAuthenticated, user]);

  useEffect(() => {
    const fetchGoals = async () => {
      if (isAuthenticated && user) {
        try {
          const fetchedGoals = await firestoreService.getGoals(user.uid);
          setGoals(fetchedGoals);
        } catch (error) {
          console.error('Error fetching goals:', error);
        }
      }
    };

    fetchGoals();
  }, [isAuthenticated, user]);

  const handleLogout = async () => {
    try {
      await signOut();
      // Redirect to the login page after logout 
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <StyledDashboard>
      <Grid container spacing={2} justify="center" alignItems="center">
        {/* User Profile Section */}
        {userData && (
          <Grid item xs={12} sm={6}>
            <Typography variant="h5">Welcome, {userData.displayName}!</Typography>
            <img src={userData.profilePicture} alt="Profile Picture" />
          </Grid>
        )}

        {/* Recent Activity Section */}
        <Grid item xs={12} sm={6}>
          <Typography variant="h5">Recent Activity</Typography>
          <List>
            {recentActivity.map((activity) => (
              <ListItem key={activity.id}>
                <ListItemText primary={<Typography variant="body1">{activity.description}</Typography>} />
              </ListItem>
            ))}
          </List>
        </Grid>

        {/* Goal Progress Section */}
        <Grid item xs={12}>
          <Typography variant="h5">Goal Progress</Typography>
          <List>
            {goals.map((goal) => (
              <ListItem key={goal.id}>
                <ListItemText
                  primary={<Typography variant="body1">{goal.name}</Typography>}
                  secondary={
                    <>
                      <Typography variant="body2">Target: {goal.targetValue}</Typography>
                      <Typography variant="body2">Progress: {goal.progress}%</Typography>
                    </>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Grid>

        {/* Logout Button */}
        <Grid item xs={12}>
          <Button variant="contained" color="secondary" onClick={handleLogout}>
            Logout
          </Button>
        </Grid>
      </Grid>
    </StyledDashboard>
  );
};

export default Dashboard;