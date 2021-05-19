import React, { Component, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import SearchBar from './SearchBar'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0),
    margin: 'auto',
    background: 'linear-gradient(180deg, #DC4141 30%, #000000 90%)',
    borderRadius: 56,
    overflow: 'hidden',
    overflowY: 'scroll',
  },
  title: {
    padding: theme.spacing(0),
    textAlign: 'center',
    background: 'linear-gradient(to top left,  #D52027 50%, #68000D 50%)'
    },
  techCardPaper: {
    padding: theme.spacing(0),
    margin: 'auto',
    background: 'transparent',
  },
  tech_title: {
    padding: theme.spacing(0),
    textAlign: 'center',
    background: 'linear-gradient(to top left,  #D52027 50%, #68000D 50%)'
  },
  image: {
    width: 500,
    height: 300,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalpaper: {
    background: 'linear-gradient(180deg, #DC4141 30%, #000000 90%)',
    width: 1200,
    height: 700,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    overflow: 'hidden',
    overflowY: 'scroll',
  },
  image: {
    width: 500,
    height: 350,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: 400,
    maxHeight: 400,
    width: 'auto',
    height: 'auto',
  },
  summarypaper: {
    height: 500,
    width: 600,
    overflow: 'hidden',
    overflowY: 'scroll',
    backgroundColor: 'transparent'
  },
}));

const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: transparent;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;

function TechnologyList(technologies) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [newTech, setNewTech] = useState([]);


  const handleOpen = value => () => {
    setOpen(true);
    setNewTech(value)
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <Fade in={open}>
      <div className={classes.modalpaper}>
        <Paper className={classes.tech_title}>
            <h2 style={{color: 'white'}} id="transition-modal-title">{newTech["technology"]}</h2>
          </Paper>
        <Grid container spacing={2}> 
          <Paper className={classes.summarypaper}>
            <p style={{color:'white'}} id="transition-modal-description">{newTech["tech_basic_summery"]}</p>
          </Paper>
          <Grid item>
            <img className={classes.img} alt="complex" src={"./Tech_Timelines/" + newTech["technology"] + "/" + newTech["tech_img_1"]}/>
            <img className={classes.img} alt="complex" src={"./Tech_Timelines/" + newTech["technology"] + "/" + newTech["tech_img_2"]} />
          </Grid>
        </Grid>
        <Button onClick={() => window.open( "./Tech_Timelines/" + newTech["technology"] + "/" + newTech["student_tech_url"] )} >View Full Report</Button>
      </div>
    </Fade>
  );

  return technologies.map((technology) => ((
    <div className={classes.root}>
      <Paper className={classes.techCardPaper}>
        <div class="row">
          <div class="col s12 m6">
            <div class="card" style={{borderRadius: 56}}>
              <div class="card-image">
                <img src={ "./Tech_Timelines/" + technology.technology + "/" + technology.tech_timeline } />
                    <button class="btn-floating halfway-fab waves-effect waves-light red" onClick={handleOpen(technology)} ><i class="material-icons">add</i></button>
                    <Modal
                      aria-labelledby="transition-modal-title"
                      aria-describedby="transition-modal-description"
                      className={classes.modal}
                      open={open}
                      onClose={handleClose}
                      closeAfterTransition
                      BackdropComponent={Backdrop}
                      BackdropProps={{
                        timeout: 500,
                      }}
                    >
                      {body}
                    </Modal>
              </div>
              <div style={{background: 'linear-gradient(180deg, #DC4141 30%, #000000 90%)'}} class="card-content">
                <h2 style={{color: 'white'}} class="card-title">{ technology.technology }</h2>
              </div>
            </div>
          </div>
        </div>
      </Paper>
      <br/>
    </div>
  )));
}
//techname should be gray like figma 
//tech modal should have consistant color as to the card paper color
function Technology() {
  const classes = useStyles();
  const [searchTech, setSearchTech] = useState([]);
  const [input, setInput] = useState('');
  const [technologies, setTechnologies] = React.useState([]);
  
  React.useEffect(() => {
        fetch("Technology.json")
            .then((response) => response.json())
            .then((data) => {
                setTechnologies(data)
                setSearchTech(data)
            })
  }, [])

  const updateInput = async (input) => {
    const filtered = technologies.filter(technology => {
     return technology.technology.toLowerCase().includes(input.toLowerCase())
    })
    setInput(input);
    setSearchTech(filtered);
 };

  return (
    <div className={classes.root}>
      <Paper className={classes.title}>
        <h1 style={{color:'white'}}>Technology</h1>
      </Paper>
      <SearchBar 
       input={input} 
       onChange={updateInput}
      />
      <Paper className={classes.paper}>
        {TechnologyList(searchTech)}
      </Paper>
    </div>
  )
}

export default Technology;
