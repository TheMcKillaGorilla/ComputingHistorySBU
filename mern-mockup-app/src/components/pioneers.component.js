import React, { Component } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import SearchBar from './SearchBar';

import { useState, useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0),
    margin: 'auto',
    // background: 'linear-gradient(45deg, #000000 30%, #990000 90%)',
    // backgroundColor: "#000000",
    // backgroundColor: "#BEBEBE",
  },
  pioneerCardPaper: {
    padding: theme.spacing(0),
    margin: 'auto',
    background: 'linear-gradient(215deg, #000000 30%, #990000 90%)',
  },
  backgroundPaper: {
    padding: theme.spacing(0),
    margin: 'auto',
    background: '#000000',
  },
  title: {
    padding: theme.spacing(0),
    textAlign: 'center',
    background: 'linear-gradient(215deg, #000000 30%, #990000 90%)',
  },
  videopaper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxHeight: 500,
    maxWidth: '32%',
    background: 'linear-gradient(45deg, #000000 30%, #990000 90%)',
    overflow: 'hidden',
    overflowY: 'scroll',
  },
  pioneerfullinfo: {
    padding: theme.spacing(2),
    margin: '5px',
    maxHeight: 500,
    maxWidth: '65%',
    overflow: 'hidden',
    overflowY: 'scroll',
    overflowX: 'scroll',
    background: 'linear-gradient(45deg, #000000 30%, #990000 90%)'
  },
  pioneerinfobody: {
    maxHeight: 500,
    maxWidth: 350,
    margin: '10px',
    overflow: 'hidden',
    overflowY: 'scroll',
    backgroundColor: "#000000",
  },
  pioneerinfovideo: {
    maxHeight: '100%',
    maxWidth: '100%',
    background: 'linear-gradient(45deg, #000000 30%, #990000 90%)'
  },
  pioneerifoimages: {
    width: 900,
    height: 238,
  },
  image: {
    width: 200,
    maxHeight: '100%',
    margin: '5px',
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  pioneerofdaydescription: {
    maxHeight: 200,
    maxWidth: 200,
    overflow: 'hidden',
    overflowY: 'scroll',
    backgroundColor: '#000000'
  },
  pioneerofthedayimg: {
    width: 200,
    height: 200,
  },
  pioneerofthedaypaper: {
    maxHeight: '100%',
    background: 'linear-gradient(45deg, #000000 30%, #990000 90%)',
  },
}));

function SavePioneer(pioneerID) {
  const [prevState, setState] = React.useState([]);
  // setState(prevState => [...prevState, pioneer] )

}

var pioneerID = 0;

function useID(newid){
  const [id, setID] = useState(0);

  useEffect(() => {
    setID(newid)
  })

  return id
}

// function usePioneersList(){

//   const [pioneers, setPioneers] = React.useState([]);
//   // const sayHello = () => console.log(pioneers[0]);

//   React.useEffect(() => {
// 		fetch("sample_master.json")
// 			.then((response) => response.json())
// 			.then((data) => {
// 				setPioneers(data) // new
// 			})
//   }, []);

//   return pioneers;
// };

function PioneersList(pioneers) {
  const classes = useStyles();
  // const pioneers = usePioneersList();
  const [id, setID] = useState(0);

  useEffect(() => {
    pioneerID = id;
    // console.log(pioneerID)
  });


  return pioneers.map((pioneer) => ((
    <div className={classes.root}>

      <Paper className={classes.pioneerCardPaper}>
        
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <iframe  className={classes.img} alt="complex" src={ pioneer.url } />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  <h5 style={{fontSize: '16', color: 'white'}}>{pioneer.pioneername}</h5>
                </Typography>
                <Typography style={{color: 'white'}} variant="body2" gutterBottom>
                  {pioneer.student_name}
                </Typography>
                <Typography style={{color: 'white'}} variant="body2" color="textSecondary">
                  {pioneer._id}
                </Typography>
                <button style={{background: 'linear-gradient(215deg, #000000 30%, #990000 90%)', color: 'white'}} onClick={() => setID(pioneer["_id"])}>View</button>;
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )));
}

function PioneerInfo(pioneers) {
  const classes = useStyles();
  // const pioneers = usePioneersList();
  const [id, setID] = useState(0);

  useEffect(() => {
    setID(pioneerID)
  })

  let newpioneer = pioneers[id] ?? 0
  console.log(newpioneer)
  
  

  return (
    
    <div className={classes.root}>
      {/* <Paper className={classes.pioneerfullinfo}> */}
        <Typography gutterBottom variant="subtitle1">
          {/* <h4>{console.log(pioneerObject)} </h4> */}
          <h4 style={{color: 'white'}}> {newpioneer["pioneername"]} </h4>
          <br/>
        </Typography>
        <Grid container spacing={2}>        
          <Paper className={classes.pioneerinfobody}>
            <Typography style={{color:'white'}} variant="body2" gutterBottom>
              {newpioneer["description_one"]}
            </Typography>
          </Paper>
          <Grid item>
            <Paper className={classes.pioneerinfovideo}>
              <iframe style={{backgroundColor: 'black'}} width="500" height="300" alt="complex" src={newpioneer["url"]} />
            </Paper>
          </Grid>
          <Grid item>
              <ButtonBase className={classes.pioneerifoimages}>
                <img className={classes.img} alt="complex" src={newpioneer["img_1"]} />
                <img className={classes.img} alt="complex" src={newpioneer["img_2"]} />
                <img className={classes.img} alt="complex" src={newpioneer["img_3"]} />
              </ButtonBase>
          </Grid>
        </Grid>
      {/* </Paper> */}
    </div>
  
  )
}


function PioneerOfTheDay(pioneers) {
  const classes = useStyles();
  // const pioneers = usePioneersList();
  const randomKey = Math.floor(Math.random() * 3);

  const pioneer = pioneers[randomKey] ?? 0

  // const sayHello = () => console.log(pioneer);


  return (
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}} className={classes.root}>
      <Typography gutterBottom variant="subtitle1">
        <h4 style={{color: 'white', margin: '10px'}}>Pioneer Of The Day </h4>
      </Typography>
      <Grid container spacing={0}>
        
        <Paper className={classes.pioneerofdaydescription}>
          <Typography style={{color: 'white'}} variant="body2" gutterBottom>
            {pioneer["description_two"]}
          </Typography>
        </Paper>
        <Grid item>
            <ButtonBase className={classes.pioneerofthedayimg}>
              <img className={classes.img} alt="complex" src={pioneer["img_1"]} />
            </ButtonBase>
        </Grid>
        <Grid item>
            <ButtonBase className={classes.pioneerofthedayimg}>
              <img className={classes.img} alt="complex" src={pioneer["img_2"]} />
            </ButtonBase>
        </Grid>
        <Grid item>
            <ButtonBase className={classes.pioneerofthedayimg}>
              <img className={classes.img} alt="complex" src={pioneer["img_3"]} />
            </ButtonBase>
        </Grid>
      </Grid>
    </div>
  )
}

function Pioneers() {
  const classes = useStyles();
  // const pioneers = usePioneersList();
  const [pioneers, setPioneers] = React.useState([]);
  const [searchPioneers, setSearchPioneers] = useState([]);
  const [input, setInput] = useState('');

  React.useEffect(() => {
		fetch("sample_master.json")
			.then((response) => response.json())
			.then((data) => {
        setPioneers(data) // new
        setSearchPioneers(data)
			})
  }, []);

  const updateInput = async (input) => {
    const filtered = pioneers.filter(pioneer => {
     return pioneer.pioneername.toLowerCase().includes(input.toLowerCase())
    })
    setInput(input);
    setSearchPioneers(filtered);
 };

  return (
      <div className={classes.root}>

        <Paper className={classes.title}>
          <h1 style={{color: 'white'}}>Pioneers</h1>
        </Paper>

        <SearchBar input={input} onChange={updateInput}/>

        {/* root paper for the pioneer page */}
        <Paper className={classes.backgroundPaper}> 
        
          <Grid container spacing={3}>
             
            {/* paper for the playlist of all the pioneers */}
            <Paper className={classes.videopaper}>
              <Grid item >{PioneersList(searchPioneers)}</Grid>
            </Paper>

            {/* paper for the pioneer full information */}
            <Paper  className={classes.pioneerfullinfo}>
              {PioneerInfo(pioneers)}
              {/* {PioneersList().PioneerInfo()} */}
            </Paper>

            {/* paper for the pioneer of the day page */}
            <Grid item xs={12}>
              <Paper className={classes.pioneerofthedaypaper}>
                {PioneerOfTheDay(pioneers)}
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </div>
  )
}

export default Pioneers;