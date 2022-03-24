import React from 'react';
import ToggleSwitch from './ToggleSwitch';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import './App.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      color: 'white',
      backgroundColor: '#231F20'

    },
    root: {
      flexGrow: 1,
    },
  }),
);

function App() {
  const classes = useStyles();
    return (
      <>
        <body backgroundColor='black'>
          <div style={{ width: '100%',paddingTop: '40px',
                  padding: '20px', color: 'white'}}>GENERAL
            <Grid container spacing={2} >
              <Grid item xs={6} sm={4} md={4} >
                <Paper className={classes.paper}>CASE MANAGEMENT
                  <ToggleSwitch Name='case' />
                </Paper>
              </Grid>
            <Grid item xs={6} sm={4} >
              <Paper className={classes.paper}>MAP TIMELINE
                <ToggleSwitch Name='map'  />
              </Paper>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Paper className={classes.paper}>VIEWS & BRIEFINGS
                <ToggleSwitch Name='views' />
              </Paper>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Paper className={classes.paper}>NOTIFICATION
                <ToggleSwitch Name='notification' /> 
              </Paper>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Paper className={classes.paper}>MASS COMMUNICATION
                <ToggleSwitch Name='mass' />
              </Paper>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Paper className={classes.paper}>TRAFFIC CAMERAS
                <ToggleSwitch Name='traffic' />
              </Paper>
            </Grid>
          </Grid>
        </div>

        <div style={{ width: '100%', backgroundColor: 'black',
                  padding: '20px', color: 'white'}}> SETTINGS
          <Grid container spacing={2}>
            <Grid item xs={6} sm={4}>
              <Paper className={classes.paper}>AUDIT LOG
                <ToggleSwitch Name='log' />
              </Paper>
              <Paper className={classes.paper}>USERS
                <div style={{display: 'inline-grid', paddingLeft:'60%'}}>
                  <ToggleSwitch Name='user' />
                </div>
              </Paper>
            </Grid>        
          </Grid>
        </div>
      </body>
    </>

  );
}

export default App;
