import React, { Component } from 'react';
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

// function useHandleOpen(value) {
//   const classes = useStyles();
//   const [open, setOpen] = React.useState(false);
//   const [technologies, setTechnologies] = React.useState([]);

//   React.useEffect(() => {
// 		fetch("random.json")
// 			.then((response) => response.json())
// 			.then((data) => {
// 				setTechnologies(data) // new
// 			})
//   }, [])

//   setOpen(true);

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//   <Modal
//     aria-labelledby="transition-modal-title"
//     aria-describedby="transition-modal-description"
//     className={classes.modal}
//     open={open}
//     onClose={handleClose}
//     closeAfterTransition
//     BackdropComponent={Backdrop}
//     BackdropProps={{
//       timeout: 500,
//     }}
//   >
//     <Fade in={open}>
//       <div className={classes.modalpaper}>
//         <Paper className={classes.title}>
//             <h2 id="transition-modal-title">{console.log(technologies[value].technology)}</h2>
            
//           </Paper>
//         <Grid container spacing={2}> 
//           <Paper className={classes.summarypaper}>
//             <p id="transition-modal-description">{technologies[value].tech_basic_summery}</p>
//           </Paper>
//           <Grid item>
//             <ButtonBase className={classes.image}>
//               <img className={classes.img} alt="complex" src={technologies[value].tech_img_1}/>
                
//             </ButtonBase>
//           </Grid>
//           <Grid item>
//               <ButtonBase className={classes.image}>
//                 <img className={classes.img} alt="complex" src={technologies[value].tech_img_2} />
//               </ButtonBase>
//           </Grid>
//         </Grid>
//         <Button onClick={() => window.open( 'http://www.google.com')} >View Full Report</Button>
//       </div>
//     </Fade>
//   </Modal>
//   )
// };


// function TechnologyList() {
//   const classes = useStyles();
//   const [technologies, setTechnologies] = React.useState([]);
//   // const [open, setOpen] = React.useState(false);

//   React.useEffect(() => {
// 		fetch("random.json")
// 			.then((response) => response.json())
// 			.then((data) => {
// 				setTechnologies(data) // new
// 			})
//   }, [])

//   return technologies.map((technology) => ((
//     <div className={classes.root}>
//       <Paper className={classes.paper}>
//         <div class="row">
//           <div class="col s12 m6">
//             <div class="card">
//               <div class="card-image">
//                 <img src={ technology.tech_timeline } />
//                   {/* <div> */}
//                     <button class="btn-floating halfway-fab waves-effect waves-light red" onClick={() => useHandleOpen(technology._id)} ><i class="material-icons">add</i></button>
//                   {/* </div> */}
//               </div>
//               <div class="card-content">
//                 <h2 class="card-title">{ technology.technology }</h2>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Paper>
//     </div>
//   )));
// }

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


function TechnologyList() {
  const classes = useStyles();
  const [technologies, setTechnologies] = React.useState([]);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
		fetch("random.json")
			.then((response) => response.json())
			.then((data) => {
				setTechnologies(data) // new
			})
  }, [])

  return technologies.map((technology) => ((
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <div class="row">
          <div class="col s12 m6">
            <div class="card">
              <div class="card-image">
                <img src={ technology.tech_timeline } />
                  {/* <div> */}
                    <button class="btn-floating halfway-fab waves-effect waves-light red" onClick={handleOpen} ><i class="material-icons">add</i></button>
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
                      <Fade in={open}>
                        <div className={classes.modalpaper}>
                          <Paper className={classes.tech_title}>
                              {/* <h2 id="transition-modal-title">{console.log(technology.technology)}</h2> */}
                              <h2 style={{color:'white'}} id="transition-modal-title">{technology.technology}</h2>
                            </Paper>
                          <Grid container spacing={2}> 
                            <Paper className={classes.summarypaper}>
                              <p style={{color:'white'}} id="transition-modal-description">{technology.tech_basic_summery}</p>
                            </Paper>
                            <Grid item>
                              <img className={classes.img} alt="complex" src={technology.tech_img_1}/>
                              <img className={classes.img} alt="complex" src={technology.tech_img_2} />
                            </Grid>
                          </Grid>
                          <Button onClick={() => window.open( technology.student_tech_url )} >View Full Report</Button>
                        </div>
                      </Fade>
                    </Modal>
                  {/* </div> */}
              </div>
              <div class="card-content">
                <h2 class="card-title">{ technology.technology }</h2>
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

  return (
    <div className={classes.root}>
      <Paper className={classes.title}>
        <h1 style={{color:'white'}}>Technology</h1>
      </Paper>
      <Paper className={classes.paper}>
        {TechnologyList()}
      </Paper>
    </div>
  )
}

export default Technology;
