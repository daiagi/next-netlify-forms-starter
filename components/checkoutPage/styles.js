import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(theme => ({
  stepper: {
    padding: theme.spacing(3, 0, 5)
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
     height:36,

  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative'
  },
  circularspinnercontainer: {
    width:39,
    height: 24,
    

  },
  buttonProgress: {

  }
}));
