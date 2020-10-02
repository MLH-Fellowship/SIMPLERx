import React from 'react'
import {Link} from 'react-router-dom'
 import './NavBar.css'
// import Button from '@material-ui/core/Button';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
//import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
//import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
//import PersonIcon from '@material-ui/icons/Person';
//import AddIcon from '@material-ui/icons/Add';
//import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
//import Logo from '../../Logo.png'
import Logo2 from '../../Logo2.png'


const emails = ['Doctor', 'Patient', 'Pharmacist'];
const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});




function SimpleDialog(props) {
  //const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = () => {
    onClose();
  };

  return (
    <Dialog scroll="body" onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Choose Role</DialogTitle>
      <List>
        {/* {emails.map((email) => (
          <ListItem button onClick={() => handleListItemClick(email)} key={email}>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={email} />
          </ListItem>
        ))} */}

        <Link to="/login">
            <ListItem button onClick={() => handleListItemClick()}>
            {/* <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar> */}
            <ListItemText primary="Doctor" style={{textAlign:"center"}}>    
            </ListItemText>
            </ListItem>
        </Link>

        <Link to="/patlogin">
        {/* eslint-disable-next-line */}
            <ListItem button button onClick={() => handleListItemClick()}>
                {/* <ListItemAvatar>
                <Avatar className={classes.avatar}>
                    <PersonIcon />
                </Avatar>
                </ListItemAvatar> */}
                <ListItemText primary="Patient" style={{textAlign:"center"}}/>
            </ListItem>
        </Link>
        <Link to="/pharmalogin">
        {/* eslint-disable-next-line */}
            <ListItem button button onClick={() => handleListItemClick()}>
                {/* <ListItemAvatar>
                <Avatar className={classes.avatar}>
                    <PersonIcon />
                </Avatar>
                </ListItemAvatar> */}
                <ListItemText primary="Pharmacist" style={{textAlign:"center"}}/>
            </ListItem>
        </Link>

      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};


export default function NavBar() {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(emails[1]);
    const classes = useStyles();

    const handleClickOpen = () => {
      setOpen(true);
    };
   
    const handleClose = (value) => {
      setOpen(false);
      setSelectedValue(value);
    };
  
    return (
      <div className="topnav">
      <nav>
      <ul>
      {/* <Link to="/" style={{float:"left", fontSize:24, fontFamily:"monospace"}}>SimpleRx</Link> */}
      
      <div className={classes.root} style={{float:"left"}}>
      <Link to='/'><Button size="large" variant="outlined" color="black" style={{width:"140px", height:"60px", fontSize:"23px", letterSpacing:"2px"}}>SimpleRx</Button></Link>
      </div>
      
      {/* <Link to='/'><img src={Logo} alt="Logo" style={{width:"100px", height:"50px", float:"right",marginBottom:'20px'}}></img></Link> */}


        <Button variant="contained" size="small" color="primary" onClick={handleClickOpen} style={{float:"right", marginRight:"20px ", marginTop: "34px"}}>
          Login
        </Button>

        <a href="https://github.com/MLH-Fellowship/SIMPLERx"><Button variant="contained" size="small"  color="primary" style={{float:"right", marginRight:"20px", marginTop: "20px"}}>
          Source Code
        </Button></a>
        <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
        {/* <Link to='/'><img src={Logo2} alt="Logo" style={{width:"150px", height:"75px", float:"right",marginBottom:'10px', marginRight:'883px'}}></img></Link> */}
        </ul>
        </nav>
      </div>
    );
  }


















// function NavBar(){
//     const [anchorEl, setAnchorEl] = React.useState(null);

//     const handleClick = (event) => {
//         setAnchorEl(event.currentTarget);
//     };

//     const handleClose = () => {
//         setAnchorEl(null);
//     };
//     return (<div className="topnav">
//         <nav>
            
//             <ul>
//                 <Link to="/" style={{float:"left", fontSize:24, fontFamily:"monospace"}}>SimpleRx</Link>

//             <div style={{float: "right", marginTop:"8px", marginRight: "20px"}}>
//                 <Button style={{fontSize:"24px"}} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
//                 Roles
//                 </Button>
//                 <Menu
//                 id="simple-menu"
//                 anchorEl={anchorEl}
//                 keepMounted
//                 open={Boolean(anchorEl)}
//                 onClose={handleClose}
//                 >
//                 <Link to="/doctor"><MenuItem dense="true" onClick={handleClose}>Doctor</MenuItem></Link>
//                 <Link to="/patient"><MenuItem onClick={handleClose}>Patient</MenuItem></Link>
//                 <Link to="/pharmacist"><MenuItem onClick={handleClose}>Pharmacist</MenuItem></Link>
//                 </Menu>
//                 </div>
//             </ul>
//         </nav>
//     </div>)
// }

// export default NavBar

















