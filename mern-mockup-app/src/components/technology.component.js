import React, { Component, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import styled from 'styled-components';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
// import tech_img_sources from '/Users/ahamedarif/Desktop/Mockup_App/mern-mockup-app/src/components/tech_img_sources/'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0),
    margin: 'auto',
    background: 'linear-gradient(45deg, #000000 30%, #990000 90%)'
    // maxWidth: '100%',
    // maxHeight: '100%',
    // overflow: 'hidden',
    // overflowY: 'scroll',
    // backgroundColor: "#BEBEBE",
  },
  title: {
    padding: theme.spacing(0),
    textAlign: 'center',
    // backgroundColor: "#990000",
    background: 'linear-gradient(215deg, #000000 30%, #990000 90%)',
  },
  tech_title: {
    padding: theme.spacing(0),
    textAlign: 'center',
    // backgroundColor: "#990000",
    background: 'linear-gradient(45deg, #000000 30%, #990000 90%)',
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
    // background: 'linear-gradient(45deg, #000000 30%, #990000 90%)'
  },
  modalpaper: {
    background: 'linear-gradient(45deg, #000000 30%, #990000 90%)',
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
    backgroundColor: '#000000'
  },
}));

const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: linear-gradient(45deg, #000000 30%, #990000 90%);
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;

function useTeschnologyList(){
  const [technologies, setTechnologies] = React.useState([]);

  React.useEffect(() => {
		fetch("random.json")
			.then((response) => response.json())
			.then((data) => {
				setTechnologies(data) // new
			})
  }, [])

  return technologies;
};

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
            <img className={classes.img} alt="complex" src={newTech["tech_img_1"]}/>
            <img className={classes.img} alt="complex" src={newTech["tech_img_2"]} />
          </Grid>
        </Grid>
        <Button onClick={() => window.open( newTech["student_tech_url"] )} >View Full Report</Button>
      </div>
    </Fade>
  );

  return technologies.map((technology) => ((
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <div class="row">
          <div class="col s12 m6">
            <div class="card">
              <div class="card-image">
                <img src={ technology.tech_timeline } />
                  {/* <div> */}
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
                  {/* </div> */}
              </div>
              <div style={{background: 'linear-gradient(180deg, #000000 30%, #990000 90%)'}} class="card-content">
                <h2 style={{color: 'white'}} class="card-title">{ technology.technology }</h2>
              </div>
            </div>
          </div>
        </div>
      </Paper>
    </div>
  )));
}

function Technology() {
  const classes = useStyles();
  const technologies = useTeschnologyList()

  return (
    <div className={classes.root}>
      <Paper className={classes.title}>
        <h1 style={{color:'white'}}>Technology</h1>
      </Paper>
      <Paper className={classes.paper}>
        {TechnologyList(technologies)}
      </Paper>
    </div>
  )
}

export default Technology;
