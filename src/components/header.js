import React, {useState,useEffect} from 'react';
import {styles} from './styles';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import OpacityIcon from '@material-ui/icons/Opacity';
import Challenge from './challenge'

function Header(props){
    const [inprocess,setInprocess] = useState([]);
    const [upcoming,setUpcoming] = useState([]);
    const [past,setPast] = useState([]);
    const [onClicked, setOnClicked] = useState(true);
    const [upClicked, setUpClicked] = useState(false);
    const [endClicked, setEndClicked] = useState(false);
    const [metric1,setMetric1] = useState(false);
    const [metric2,setMetric2] = useState(false);
    const [metric3,setMetric3] = useState(false);
    const [metric4,setMetric4] = useState(false);
    const [metric5,setMetric5] = useState(false);
    const [metric6,setMetric6] = useState(false);
   
    useEffect(() => {
        let arr = JSON.parse(localStorage.getItem('data'));
        let date= new Date();
        let m = date.getMonth()+1;
        let d = date.getDate();
        let today = date.getFullYear() + '-' + (m<10?'0'+m:m)  + '-' + (d<10?'0'+d:d);
        let process = [];
        let ended = [];
        let coming = [];
        arr.map(obj=>{
            if(today >= obj.date.start && today < obj.date.end){
                process.push(obj);
            }
            else 
            if(today >= obj.date.end){
                ended.push(obj);
            }
            else
            if(today < obj.date.start){
                coming.push(obj);
            }
            return true;
        });
        setInprocess(process);
        setUpcoming(coming);
        setPast(ended);
    },[]);
    const visualChange = (id, color, backGroundColor) => {
        document.getElementById(id).style.color = color;
        document.getElementById(id).style.backgroundColor = backGroundColor;
       
    }
    const metricsChange = (buttonId,iconId,backgroundColor,color,border) =>{
        document.getElementById(buttonId).style.backgroundColor=backgroundColor;
        document.getElementById(buttonId).style.border='0px';
        document.getElementById(iconId).style.color=color;
        document.getElementById(buttonId).style.border=border;
    }
    const decodeDate = (stringDate, getAttr) => {
        let year = stringDate.slice(0,4), month, day;
        stringDate = stringDate.slice(5,stringDate.length);
        if(stringDate.indexOf('-') === 1){
            month = stringDate[0];
            stringDate = stringDate.slice(2,stringDate.length);
        }else{
            month = stringDate.slice(0,2);
            stringDate = stringDate.slice(3,stringDate.length);
        }
        day = stringDate;
        if(getAttr === 'Year'){
            return year;
        }else if(getAttr === 'Month'){
            return month;
        }else{
            return day;
        }
    }
    const metrics = [metric1,metric2,metric3,metric4,metric5,metric6];
    const classes = styles();
    return(
        <>
            <div className={classes.headerFirst}>
                    <div className={classes.ongoingDiv} style={{borderBottom:onClicked?'2px solid #32C4A4':'0px'}} id='on'>
                        <span
                            id='ongoing'
                            onClick={()=>{  setOnClicked(true);
                                            setUpClicked(false);
                                            setEndClicked(false);
                                            document.getElementById('ongoing').style.color='#32C4A4'
                                            document.getElementById('on').style.borderBottom='2px solid #32C4A4';
                                            document.getElementById('up').style.borderBottom='0px';
                                            document.getElementById('upcoming').style.color='#A1A1A1';
                                            document.getElementById('end').style.borderBottom='0px';
                                            document.getElementById('ended').style.color='#A1A1A1';
                                            }
                                    }
                            onMouseOver = {() => visualChange('ongoing','#32C4A4', 'white')}
                            onMouseOut = {!onClicked? () => visualChange('ongoing','#A1A1A1','white'):false}
                            style={{fontSize:'120%',fontWeight:'bold',color: onClicked?'#32C4A4':'#A1A1A1',cursor:'pointer'}}

                        >
                            Ongoing
                        </span>
                </div>
                <div className={classes.upcomingDiv} style={{borderBottom:upClicked?'2px solid #32C4A4':'0px'}} id='up'>
                        <span
                            id='upcoming'
                            onClick={()=>{  setOnClicked(false);
                                            setUpClicked(true);
                                            setEndClicked(false);
                                            document.getElementById('up').style.borderBottom='2px solid #32C4A4';
                                            document.getElementById('upcoming').style.color='#32C4A4';
                                            document.getElementById('on').style.borderBottom='0px';
                                            document.getElementById('ongoing').style.color='#A1A1A1';
                                            document.getElementById('end').style.borderBottom='0px';
                                            document.getElementById('ended').style.color='#A1A1A1';
                                            }
                                    }
                            onMouseOver = {() => {visualChange('upcoming','#32C4A4', 'white')}}
                            onMouseOut = {!upClicked?() => visualChange('upcoming','#A1A1A1','white'):false}
                            style={{margin:'-5px',fontSize:'120%',fontWeight:'bold',color: upClicked?'#32C4A4':'#A1A1A1',cursor:'pointer'}}
                        >
                            Upcoming
                        </span>
                </div>
                    <div className={classes.endedDiv} style={{borderBottom:endClicked?'2px solid #32C4A4':'0px'}} id='end'>
                        <span
                            id='ended'
                            onClick={()=>{  setOnClicked(false);
                                            setUpClicked(false);
                                            setEndClicked(true);
                                            document.getElementById('end').style.borderBottom='2px solid #32C4A4';
                                            document.getElementById('ended').style.color='#32C4A4';
                                            document.getElementById('up').style.borderBottom='0px';
                                            document.getElementById('upcoming').style.color='#A1A1A1';
                                            document.getElementById('on').style.borderBottom='0px';
                                            document.getElementById('ongoing').style.color='#A1A1A1';
                                        }
                                    }
                            onMouseOver = {() => visualChange('ended','#32C4A4', 'white')}
                            onMouseOut = {!endClicked?() => visualChange('ended','#A1A1A1','white'):false}
                            style={{fontSize:'120%',fontWeight:'bold',color: endClicked?'#32C4A4':'#A1A1A1',cursor:'pointer'}}
                        >
                            Ended
                        </span>
                    </div>  
            </div>
            <div className={classes.headerSecond}>
                <span 
                    style={{fontSize:'80%',fontWeight:'bold',color:'#414141',position:'absolute',left:'1.5%',top:'7%'}}
                >
                    METRICS
                </span>
                <div style={{display:'flex',flexDirection:'row',alignContent:'center',width:'80%',height:'55%',marginLeft:'0.8%'}}>
                    <button 
                        className={classes.metrics} id='alarm'
                        onClick={()=>{setMetric1(!metric1);
                                        !metric1?metricsChange('alarm','icon1','#DAF5F0','#32C4A4','0px'):metricsChange('alarm','icon1','white','#A1A1A1','0.5px solid #A1A1A1');
                                     }
                                }
                    >
                        <span id='icon1' style={{color:'#A1A1A1'}} >steps</span>
                         
                    </button>
                    <button 
                        className={classes.metrics} id='shot' 
                        onClick={()=>{setMetric2(!metric2);
                                      !metric2?metricsChange('shot','icon2','#DAF5F0','#32C4A4','0px'):metricsChange('shot','icon2','white','#A1A1A1','0.5px solid #A1A1A1');
                        }}
                    >
                        <WhatshotIcon id='icon2' style={{color:'#A1A1A1'}}/>
                    </button>
                    <button 
                        className={classes.metrics} id='moon' 
                        onClick={()=>{setMetric3(!metric3);
                                      !metric3?metricsChange('moon','icon3','#DAF5F0','#32C4A4','0px'):metricsChange('moon','icon3','white','#A1A1A1','0.5px solid #A1A1A1');
                        }}
                    >
                        <Brightness3Icon id='icon3' style={{color:'#A1A1A1'}}/>
                    </button>
                    <button 
                        className={classes.metrics} id='walk' 
                        onClick={()=>{setMetric4(!metric4);
                                      !metric4?metricsChange('walk','icon4','#DAF5F0','#32C4A4','0px'):metricsChange('walk','icon4','white','#A1A1A1','0.5px solid #A1A1A1');
                        }}
                    >
                        <DirectionsWalkIcon id='icon4' style={{color:'#A1A1A1'}}/>
                    </button>
                    <button 
                        className={classes.metrics} id='water' 
                        onClick={()=>{setMetric5(!metric5);
                                      !metric5?metricsChange('water','icon5','#DAF5F0','#32C4A4','0px'):metricsChange('water','icon5','white','#A1A1A1','0.5px solid #A1A1A1');
                        }}
                    >
                        <OpacityIcon id='icon5' style={{color:'#A1A1A1'}}/>
                    </button>
                    <button 
                        className={classes.metrics} id='distance' 
                        onClick={()=>{ setMetric6(!metric6);
                                       if(!metric6){
                                            metricsChange('distance','icon6','#DAF5F0','#32C4A4','0px');
                                            metricsChange('distance','icon7','#DAF5F0','#32C4A4','0px');
                                       }
                                       else{
                                            metricsChange('distance','icon6','white','#A1A1A1','0.5px solid #A1A1A1');
                                            metricsChange('distance','icon7','white','#A1A1A1','0.5px solid #A1A1A1');
                                       }

                                    }
                        }
                    >
                        <p id='icon6' style={{color:'#A1A1A1',position:'absolute',bottom:'30%',marginLeft:'0.8%'}} >dis</p>
                        <p id='icon7' style={{color:'#A1A1A1',position:'absolute',marginTop:'-0.5%',marginLeft:'-0.1%'}} >tance</p>
                    </button>
                </div>
                    <div className={classes.challengeDiv} >
                            <Challenge decodeDate={decodeDate} array={onClicked?inprocess:upClicked?upcoming:past} metrics={metrics}/>
                    </div>
            </div> 
        </>
    );
}

export default  Header;