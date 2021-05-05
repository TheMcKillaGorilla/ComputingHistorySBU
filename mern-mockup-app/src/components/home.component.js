import React, { Component } from 'react';
import Image from '../index.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import image1 from '../tech_img_sources/Timeline Graphic CSE 301.png';
import image2 from '../tech_img_sources/Timeline_Ai.jpg';
import image3 from '../tech_img_sources/timeline_gpu.jpg';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    background: 'linear-gradient(180deg, #B74141 30%, #000000 90%)'
  },
  img: {
    maxWidth: 400,
    maxHeight: 400,
    width: 'auto',
    height: 'auto',
    borderRadius: 10,
  },
  video: {
    maxWidth: 400,
    maxHeight: 400,
    width: 'auto',
    height: 'auto',
    borderRadius: 10,
  },
  title: {
    textAlign: 'center',
    background: 'linear-gradient(to top left,  #D52027 50%, #68000D 50%)'
  }
});

function useTechList(){

  const [Tech, setTech] = React.useState([]);

  React.useEffect(() => {
		fetch("random.json")
			.then((response) => response.json())
			.then((data) => {
				setTech(data)
			})
  }, []);

  return Tech;
}

function PioneerTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
        aria-label="icon tabs example"
      >
        <Tab icon={<iframe  className={classes.video} style={{borderRadius: 56}} alt="complex" src={ "https://www.youtube.com/embed/GWbla-pQnCI" } />} aria-label="phone" />
        <Tab icon={<iframe  className={classes.video} style={{borderRadius: 56}} alt="complex" src={ "https://www.youtube.com/embed/12BK4THxLIU" } />} aria-label="favorite" />
        <Tab icon={<iframe  className={classes.video} style={{borderRadius: 56}} alt="complex" src={ "https://www.youtube.com/embed/hAy5eKoA9Kk" } />} aria-label="person" />
      </Tabs>
    </Paper>
  );
}

function TechTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tech = useTechList();
  const tech1 = tech[0]  
  
  return (
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
        aria-label="icon tabs example"
      >
        <Tab icon={<img className={classes.img} style={{borderRadius: 56}} src={image1}/>} aria-label="phone" />
        <Tab icon={<img className={classes.img} style={{borderRadius: 56}} src={image2} />} aria-label="favorite" />
        <Tab icon={<img className={classes.img} style={{borderRadius: 56}} src={image3} />} aria-label="person" />
      </Tabs>
    </Paper>
  );
}


function Home() {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.title}>
        <h1 style={{color: 'white'}}>Home</h1>
      </Paper>
      <h1 style={{color: 'white'}}>
        Welcome to the SBU History of computing Gallery.
      </h1>
      <h2 style={{color: 'white'}}>
        Computing Pioneer in one minute videos
      </h2>
        <p style={{color: 'white'}}>
          Here are snapshots of some of the pioneers that students were assigned to make one minute videos of. Click any of the pioneers below to view more information about them, or explore all the other pioneers by clicking the pioneers tab on top of the screen!
        </p>
      <br/>
      {PioneerTabs()}
      <br/>
      <h2 style={{color: 'white'}}>
        Technology History/Timeline pages
      </h2>
        <p style={{color: 'white'}}>
          Here are the technology history that students were assigned to research on.  These technology range from the Calculators (Hint: they are computers too!) to CPUs to even Vacuum Tubes. Click below to learn more about a specific technology, or click the Technology tab on top to discover all the ones stedent were assigned!
        </p>
      <br/>
      {TechTabs()}    
    </div>

  )
}

export default Home;