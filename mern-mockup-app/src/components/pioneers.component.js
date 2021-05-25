import React, { Component } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import SearchBar from './SearchBar';
import { Textfit } from 'react-textfit';
import "../pioneer.css";

import { useState, useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%'
  },
  paper: {
    padding: theme.spacing(0),
    margin: 'auto',
  },
  pioneerCardPaper: {
    padding: theme.spacing(0),
    margin: 'auto',
    background: '#000000',
    height: 100,
    width: '100%'
  },
  backgroundPaper: {
    padding: theme.spacing(0),
    margin: 'auto',
    background: '#000000',
  },
  title: {
    textAlign: 'center',
    background: 'linear-gradient(to top left,  #D52027 50%, #68000D 50%)'
  },
  videopaper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxHeight: 500,
    width: 400,
    background: 'linear-gradient(180deg, #D44949 20%, #000000 70%)',
    overflow: 'hidden',
    overflowY: 'scroll',
    borderRadius: 56
  },
  pioneerfullinfo: {
    padding: theme.spacing(2),
    margin: '15px',
    maxHeight: 500,
    maxWidth: '70%',
    overflow: 'hidden',
    overflowY: 'scroll',
    overflowX: 'scroll',
    background: 'linear-gradient(180deg, #DD5353 20%, #000000 70%)',
    borderRadius: 56
  },
  pioneerinfobody: {
    maxHeight: '100%',
    maxWidth: "35%",
    margin: '10px',
    overflow: 'hidden',
    overflowY: 'scroll',
    backgroundColor: "transparent",
  },
  pioneerinfovideo: {
    // maxHeight: '400',
    width: 470,
    backgroundColor: 'transparent'
  },
  pioneerifoimages: {
    maxWidth: '100%',
    height: 108,
    backgroundColor: 'transparent',
  },
  image: {
    width: 150,
    height: 70,
    maxHeight: '100%',
    margin: '5px',
  },
  img: {
    margin: '10px',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  pioneerofdaydescription: {
    maxHeight: 200,
    maxWidth: 200,
    overflow: 'hidden',
    overflowY: 'scroll',
    backgroundColor: 'transparent'
  },
  pioneerofthedayimg: {
    width: 200,
    height: 200,
    margin: '10px'
  },
  pioneerofthedaypaper: {
    maxHeight: '100%',
    maxWidth: '100%',
    background: 'linear-gradient(180deg, #D63C3C 20%, #000000 70%)',
    borderRadius: 56,
    overflow: 'hidden',
    overflowY: 'scroll',
  },
}));

var pioneerID = 0;

function usePioneersList(){

  const [pio, setPio] = React.useState([]);

  React.useEffect(() => {
		fetch("Pioneer.json")
			.then((response) => response.json())
			.then((data) => {
				setPio(data) 
			})
  }, []);

  return pio;
};

function PioneersList(pioneers) {
  const classes = useStyles();
  const [id, setID] = useState(0);

  useEffect(() => {
    pioneerID = id;
  });


  return pioneers.map((pioneer) => ((
    <div className={classes.root}>

      <Paper className={classes.pioneerCardPaper}>
        
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} src={"http://img.youtube.com/vi/" + pioneer.url.replace("https://www.youtube.com/embed/", "") + "/0.jpg" }/>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
              <Typography style={{color: 'white', fontWeight: 'bold'}} variant="body1" gutterBottom>
                  <Textfit mode="single" forceSingleModeWidth={false}>
                    {pioneer.pioneername + " "}
                  </Textfit>
                </Typography>
                <Typography style={{color: 'white'}} variant="body2" gutterBottom>
                  <Textfit mode="single" forceSingleModeWidth={false}>
                    {pioneer.student_name + " "}
                  </Textfit>
                </Typography>
                <button style={{background: 'linear-gradient(215deg, #000000 30%, #990000 90%)', color: 'white'}} onClick={() => setID(pioneer["_id"])}>View</button>;
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <br/>
    </div>
  )));
}

function PioneerInfo(pioneers) {
  const classes = useStyles();
  const [id, setID] = useState(0);

  useEffect(() => {
    setID(pioneerID)
  })

  let newpioneer = pioneers[id] ?? 0
  
  

  return (
    
    <div className="pioneer">
        <Typography gutterBottom variant="subtitle1">
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
              <iframe style={{backgroundColor: 'black'}} width="100%" height="250" alt="complex" src={newpioneer["url"]} />
              <Grid item>
               <ButtonBase className={classes.pioneerifoimages}>
                 <img className={classes.img} alt="complex" src={newpioneer["img_1"]} />
                 <img className={classes.img} alt="complex" src={newpioneer["img_2"]} />
               </ButtonBase>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
    </div>
  
  )
}

function PioneerOfTheDay() {
  const classes = useStyles();
  const pioneers = usePioneersList();

  var randomKey = 0;

  const today = new Date()
  var month = today.getMonth() + 1
  var day = today.getDate

  for (var i = 0; i < pioneers.length; i++) {
    var bday = pioneers[i].pioneer_bday.split("-");
    if (month===parseInt(bday[0]) && day===parseInt(bday[1])) {
      randomKey = pioneers[i]._id
      break;
    } else {
      randomKey = Math.floor(Math.random() * pioneers.length);
    }
   }

   const pioneer = pioneers[randomKey] ?? 0

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
              <img className={classes.img} alt="complex" src={pioneer["img_3"]} />
            </ButtonBase>
        </Grid>
        <Grid item>
            <ButtonBase className={classes.pioneerofthedayimg}>
              <img className={classes.img} alt="complex" src={pioneer["img_4"]} />
            </ButtonBase>
        </Grid>
        <Grid item>
            <ButtonBase className={classes.pioneerofthedayimg}>
              <img className={classes.img} alt="complex" src={pioneer["img_5"]} />
            </ButtonBase>
        </Grid>
        <Grid item>
            <ButtonBase className={classes.pioneerofthedayimg}>
              <img className={classes.img} alt="complex" src={pioneer["img_6"]} />
            </ButtonBase>
        </Grid>
      </Grid>
    </div>
  )
}

function Pioneers() {
  const classes = useStyles();
  const [pioneers, setPioneers] = React.useState([]);
  const [searchPioneers, setSearchPioneers] = useState([]);
  const [input, setInput] = useState('');

  React.useEffect(() => {
		fetch("Pioneer.json")
			.then((response) => response.json())
			.then((data) => {
        setPioneers(data) 
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
            </Paper>

            {/* paper for the pioneer of the day page */}
            <Grid item xs={12}>
              <Paper className={classes.pioneerofthedaypaper}>
                {PioneerOfTheDay()}
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </div>
  )
}

export default Pioneers;