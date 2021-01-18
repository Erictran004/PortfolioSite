import './../Components/font.css';

import image from './../Files/PortfolioPic.jpg';
import resume from './../Files/EricTranResume.pdf';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const useStyles = makeStyles(theme => ({
    picture: {
        height: "200px",
        width: "200px",
        borderRadius: "50%",
        [theme.breakpoints.down('sm')]: {
            marginLeft: "auto",
            marginRight: "auto"
        }

    },
    screen: {
        display: "flex",
        minHeight: "60vh",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        background: "linear-gradient(45deg, #2BC0E4 30%, #3CD3AD 90%)"
        
    },
    innerscreen:{
        display: "block",
        textAlign: "center",
        padding: "30px",
        background: "aliceblue",
        borderRadius: "5px",
        width: "50vw",
        height: "auto"
    }
}))
function AboutMe() {
    const classes = useStyles()
    return (

        <div className={classes.screen}>
            <div className={classes.innerscreen}>
                <img className={classes.picture} src={image} alt="" />
                <h1 className="title">Eric Tran</h1>
                <p>I am a second year Computer Science student currently studying at Carleton University. I am pursuing a career in this field as I enjoy the sense of satisfaction that comes from finishing a project that I've
                been working on for a long time. To turn that immense sense of satisfaction into a career would be a dream come true for me.
                </p>
                <Button variant="contained" color="primary" href="https://github.com/Erictran004" target="_blank" style={{margin: "5px"}}><GitHubIcon style={{fill: "white"}}/></Button>
                <Button variant="contained" color="primary" href={resume} target="_blank" style={{margin: "5px"}}>Resume</Button>
                <Button variant="contained" color="primary" href="https://www.linkedin.com/in/eric-tran-a37123180/" target="_blank" style={{margin: "5px"}}><LinkedInIcon style={{fill: "white"}}/></Button>
            </div>
        </div>
    );
}

export default AboutMe; 