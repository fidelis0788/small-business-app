
import { AppBar, Toolbar,makeStyles} from '@material-ui/core';
import { Link } from 'react-router-dom';


const Navigation = (props) => {

  const logInOut = () => {
    window.location.replace("/login");
    if(props.isLoggedIn){
      document.cookie = "loggedIn=";
    }
  }
  const useStyles = makeStyles({
    header: {
      backgroundColor: "#2e7d32",
      color: "white",
      boxShadow: "0px 0px 0px 0px ",
      
    }
  });
  const classes = useStyles();
  return (
    
    <div style={{color: 'green'[500]}}>
      <AppBar color="primary" position="relative" className={classes.header} >
        <Toolbar color="contrastText" className = {classes.Toolbar}>
          <h3 style={{ flexGrow: "2" }}>Austin Small Business</h3>
          <ul className="nav-list">
            <li className="nav-item" >
              <Link to="/listings">Listings</Link>
            </li>
            {props.isLoggedIn ? 
              <li className="nav-item">
                <Link to="/add">Add</Link>
              </li>
              : null
            }
            <li className="nav-item" onClick={logInOut}>{props.isLoggedIn ? "Logout" : "Login"}</li>
          </ul>
        </Toolbar>
      </AppBar>
     
    </div>
  )
}

export default Navigation;
