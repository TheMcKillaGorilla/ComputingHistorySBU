import React, { Component } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

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

// const handleClick = value => () => PioneerInfo(value)
// function PioneerInfo(value) {

//   const [id, setID] = useState(0);
//   setID(value);

//   const classes = useStyles();
//   const pioneers = usePioneersList();
//   const pioneer = pioneers[value];

//   return (
//     <div className={classes.root}>
//       <Typography gutterBottom variant="subtitle1">
//         <h4>{pioneer.pioneername} </h4>
//       </Typography>
//       <Grid container spacing={2}>
        
//         <Paper className={classes.pioneerinfobody}>
//           <Typography variant="body2" gutterBottom>
//             Born on August 26, 1892 in Indiana Attended University of Ohio briefly before she moved to Hillstock College to be closer to home and her sick father Graduated with a English liturature degree Met Mary Robert Friedman who introduced her to the world of cryptography. Worked on decrypting cyphers for 4 years together before she quit to work for the war department in washington DC Passion of language helped her decrypt cryptography in Chinese and Mandorin
//           </Typography>
//         </Paper>
//         <Grid item>
//           <Paper className={classes.pioneerinfovideo}>
//             <iframe width="500" height="300" alt="complex" src="https://www.youtube.com/embed/12BK4THxLIU" />
//           </Paper>
//         </Grid>
//         <Grid item>
//             <ButtonBase className={classes.pioneerifoimages}>
//               <img className={classes.img} alt="complex" src="https://i.pinimg.com/originals/f0/ab/2e/f0ab2ece8fa15937f0d1cbd3c882203d.jpg" />
//               <img className={classes.img} alt="complex" src="http://cdn.coverstand.com/24294/595236/article_assets/dad9fb03df9ab821703a9603d3cfef91fea34ec7.jpg" />
//               <img className={classes.img} alt="complex" src="https://i1.wp.com/www.brainpickings.org/wp-content/uploads/2018/09/elizebethfriedman1.jpg" />
//             </ButtonBase>
//         </Grid>
//       </Grid>
//     </div>
//   )
// }


function usePioneersList(){

  const [pioneers, setPioneers] = React.useState([]);
  // const sayHello = () => console.log(pioneers[0]);

  React.useEffect(() => {
		fetch("sample_master.json")
			.then((response) => response.json())
			.then((data) => {
				setPioneers(data) // new
			})
  }, []);

  return pioneers;
}

// function PioneersList() {
//   const classes = useStyles();
  
//   const pioneers = usePioneersList();

//   function PioneerInfo(pioneerObject) {
  
//     return (
      
//       <div className={classes.root}>
//         <Paper className={classes.pioneerfullinfo}>
//           <Typography gutterBottom variant="subtitle1">
//             <h4>{console.log(pioneerObject)} </h4>
//           </Typography>
//           <Grid container spacing={2}>
          
//           <Paper className={classes.pioneerinfobody}>
//             <Typography variant="body2" gutterBottom>
//               Born on August 26, 1892 in Indiana Attended University of Ohio briefly before she moved to Hillstock College to be closer to home and her sick father Graduated with a English liturature degree Met Mary Robert Friedman who introduced her to the world of cryptography. Worked on decrypting cyphers for 4 years together before she quit to work for the war department in washington DC Passion of language helped her decrypt cryptography in Chinese and Mandorin
//             </Typography>
//           </Paper>
//           <Grid item>
//             <Paper className={classes.pioneerinfovideo}>
//               <iframe width="500" height="300" alt="complex" src="https://www.youtube.com/embed/12BK4THxLIU" />
//             </Paper>
//           </Grid>
//           <Grid item>
//               <ButtonBase className={classes.pioneerifoimages}>
//                 <img className={classes.img} alt="complex" src="https://i.pinimg.com/originals/f0/ab/2e/f0ab2ece8fa15937f0d1cbd3c882203d.jpg" />
//                 <img className={classes.img} alt="complex" src="http://cdn.coverstand.com/24294/595236/article_assets/dad9fb03df9ab821703a9603d3cfef91fea34ec7.jpg" />
//                 <img className={classes.img} alt="complex" src="https://i1.wp.com/www.brainpickings.org/wp-content/uploads/2018/09/elizebethfriedman1.jpg" />
//               </ButtonBase>
//           </Grid>
//         </Grid>
//         </Paper>
//       </div>
    
//     )
//   }

//   return pioneers.map((pioneer) => ((
//     <div className={classes.root}>

//       <Paper className={classes.paper}>
//         <Grid container spacing={2}>
//           <Grid item>
//             <ButtonBase className={classes.image}>
//               <iframe  className={classes.img} alt="complex" src={ pioneer.url } />
//             </ButtonBase>
//           </Grid>
//           <Grid item xs={12} sm container>
//             <Grid item xs container direction="column" spacing={2}>
//               <Grid item xs>
//                 <Typography gutterBottom variant="subtitle1">
//                   <h4>{pioneer.pioneername}</h4>
//                 </Typography>
//                 <Typography variant="body2" gutterBottom>
//                   {pioneer.student_name}
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   {pioneer._id}
//                 </Typography>
//                 <button onClick={() => PioneerInfo(pioneer)}>View</button>;
//               </Grid>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Paper>
//     </div>
//   )));
// }

function PioneersList() {
  const classes = useStyles();
  
  const pioneers = usePioneersList();

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
                <button onClick={() => PioneerInfo(pioneer)}>View</button>;
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )));
}

function PioneerInfo(pioneerObject) {
  const classes = useStyles();
  const pioneers = usePioneersList();
  const [pioneer, updatePioneer] = useState(pioneers[1])

  

  return (
    
    <div className={classes.root}>
      {/* <Paper className={classes.pioneerfullinfo}> */}
        <Typography gutterBottom variant="subtitle1">
          {/* <h4>{console.log(pioneerObject)} </h4> */}
          <h4 style={{color: 'white'}}> Elizebeth Friedman </h4>
          <br/>
        </Typography>
        <Grid container spacing={2}>        
          <Paper className={classes.pioneerinfobody}>
            <Typography style={{color:'white'}} variant="body2" gutterBottom>
              Born on August 26, 1892 in Indiana Attended University of Ohio briefly before she moved to Hillstock College to be closer to home and her sick father Graduated with a English liturature degree Met Mary Robert Friedman who introduced her to the world of cryptography. Worked on decrypting cyphers for 4 years together before she quit to work for the war department in washington DC Passion of language helped her decrypt cryptography in Chinese and Mandorin
            </Typography>
          </Paper>
          <Grid item>
            <Paper className={classes.pioneerinfovideo}>
              <iframe style={{backgroundColor: 'black'}} width="500" height="300" alt="complex" src="https://www.youtube.com/embed/12BK4THxLIU" />
            </Paper>
          </Grid>
          <Grid item>
              <ButtonBase className={classes.pioneerifoimages}>
                <img className={classes.img} alt="complex" src="https://i.pinimg.com/originals/f0/ab/2e/f0ab2ece8fa15937f0d1cbd3c882203d.jpg" />
                <img className={classes.img} alt="complex" src="http://cdn.coverstand.com/24294/595236/article_assets/dad9fb03df9ab821703a9603d3cfef91fea34ec7.jpg" />
                <img className={classes.img} alt="complex" src="https://i1.wp.com/www.brainpickings.org/wp-content/uploads/2018/09/elizebethfriedman1.jpg" />
              </ButtonBase>
          </Grid>
        </Grid>
      {/* </Paper> */}
    </div>
  
  )
}


function PioneerOfTheDay() {
  const classes = useStyles();
  const pioneers = usePioneersList();
  const randomKey = Math.floor(Math.random() * 2);

  const pioneer = pioneers[randomKey];

  const sayHello = () => console.log(pioneer);


  return (
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}} className={classes.root}>
      <Typography gutterBottom variant="subtitle1">
        <h4 style={{color: 'white', margin: '10px'}}>Pioneer Of The Day </h4>
      </Typography>
      <Grid container spacing={0}>
        
        <Paper className={classes.pioneerofdaydescription}>
          <Typography style={{color: 'white'}} variant="body2" gutterBottom>
            Born on August 26, 1892 in Indiana Attended University of Ohio briefly before she moved to Hillstock College to be closer to home and her sick father Graduated with a English liturature degree Met Mary Robert Friedman who introduced her to the world of cryptography. Worked on decrypting cyphers for 4 years together before she quit to work for the war department in washington DC Passion of language helped her decrypt cryptography in Chinese and Mandorin
            {/* {pioneer.pioneername} */}
          </Typography>
        </Paper>
        <Grid item>
            <ButtonBase className={classes.pioneerofthedayimg}>
              <img className={classes.img} alt="complex" src="https://i.pinimg.com/originals/f0/ab/2e/f0ab2ece8fa15937f0d1cbd3c882203d.jpg" />
            </ButtonBase>
        </Grid>
        <Grid item>
            <ButtonBase className={classes.pioneerofthedayimg}>
              <img className={classes.img} alt="complex" src="http://cdn.coverstand.com/24294/595236/article_assets/dad9fb03df9ab821703a9603d3cfef91fea34ec7.jpg" />
            </ButtonBase>
        </Grid>
        <Grid item>
            <ButtonBase className={classes.pioneerofthedayimg}>
              <img className={classes.img} alt="complex" src="https://i1.wp.com/www.brainpickings.org/wp-content/uploads/2018/09/elizebethfriedman1.jpg" />
            </ButtonBase>
        </Grid>
        <button onClick={sayHello} />
      </Grid>
    </div>
  )
}

function Pioneers() {
  const classes = useStyles();

  return (
      <div className={classes.root}>

        <Paper className={classes.title}>
          <h1 style={{color: 'white'}}>Pionners</h1>
        </Paper>

        {/* root paper for the pioneer page */}
        <Paper className={classes.backgroundPaper}> 
        
          <Grid container spacing={3}>
            
            {/* paper for the pioneer full information */}
            <Paper  className={classes.pioneerfullinfo}>
              {PioneerInfo()}
              {/* {PioneersList().PioneerInfo()} */}
            </Paper>
            
             
            {/* paper for the playlist of all the pioneers */}
            <Paper className={classes.videopaper}>
              <Grid item >{PioneersList()}</Grid>
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

class nia extends Component {
  
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     pioneers: []
  //   };
  // }

  // componentDidMount() {
  //   // https://learn-co-curriculum.github.io/books-json-example-api/books.json
  //   fetch('sample_master.json')
  //     .then(response => response.json())
  //     .then(pioneerData => this.setState({ pioneers: pioneerData.pioneers }))
  // }

  // renderPioneers = () => {
  //   return this.state.pioneers.map(pioneer => {
  //     return (
  //       <>
  //       {/* <div class="card">
  //         <h2>{ pioneer.pioneername }</h2>
  //         <div className="video-container">
  //           <iframe width="853" height="480" src={ pioneer.url } allowfullscreen></iframe>
  //         </div>
  //           <br/>
  //         <p>{ pioneer.description_one }</p>
  //           <br/>
//           <img width="200" height="200" src={ pioneer.img_1 } />
//           <img width="200" height="200" src={ pioneer.img_2 } />
//           <img width="200" height="200" src={ pioneer.img_3 } />
//             <br/>
//           <p>{ pioneer.student_name }</p>
//             <br/>
//         </div> */}
//           <div class="row">
//             <div class="col s12 m6">
//               <div class="card">
//                 <div class="card-image">
//                 </div>
//                 <div class="card-content">
//                   <div className="video-container">
//                     <iframe src={ pioneer.url } allowfullscreen></iframe>
//                   </div>
//                   <br/>
//                   <h3>{ pioneer.pioneername }</h3>
//                   <h5> By: {pioneer.student_name }</h5>
//                   <p>{ pioneer.description_one }</p>
//                   <br/>
//                   <img width="300" height="300" src={ pioneer.img_1 } />
//                   <img width="300" height="300" src={ pioneer.img_2 } />
//                   <img width="300" height="300" src={ pioneer.img_3 } />

//                 </div>
//               </div>    
//             </div>
//           </div>
//         </>
//       )
//     })
//   }

  // render() {
  //   return (
  //     <>
  //       <h1>Welcome to the Pionners Page</h1>
  //       <br/>
  //       <div className="book-list">
  //         { this.renderPioneers() }
  //       </div>
  //     </>
  //   )
  // }

}

export default Pioneers;