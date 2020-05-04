import React from 'react';
import {styles} from './styles';
import DateRangeIcon from '@material-ui/icons/DateRange';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';

  
function Challenge(props){
    const months = ['Jan','Feb','March','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec'];
    const classes = styles();
    //console.log(props.metrics);
    const trueMetrics = () => {
        let indexes = [];
        for(let i=0; i<6; i++){
            if(props.metrics[i]){
                indexes.push(i+1);
            }
        }
        return indexes;
    } 
    const wantedChallenges = trueMetrics();
    console.log(wantedChallenges);
    const challengeBox = arr =>(
        <>
            {arr.map(obj=>{ if(wantedChallenges.length===0 || (wantedChallenges.length && wantedChallenges.includes(obj.metric)))
                return(
                    <div 
                        key={obj.id} 
                        id={obj.id} 
                        className={classes.challengeBox}
                        onMouseOver={()=>document.getElementById(obj.id).style.opacity='0.9'}
                        onMouseOut={()=>document.getElementById(obj.id).style.opacity='1'}
                    > 
                        <div className={classes.challengeBoxSecond}>
                            <img src={obj.image} alt='' width='100%'height='100%' />
                            <button className={classes.challengeBtn}>
                                <FitnessCenterIcon style={{width:'15%',marginLeft:'-90%'}} />
                                <p 
                                    style={{fontWeight:'bold',marginTop:'-22%',marginLeft:'13%'}}
                                >
                                    {obj.type}
                                </p>
                            </button>
                        </div>
                        <div className={classes.challengeBoxThird}>
                            <p 
                                style={{fontFamily:'"Trebuchet MS", Helvetica, sans-serif',fontWeight:'bold',fontSize:obj.title.length>=27?'21px':'22px'}}>
                                {obj.title}
                            </p>
                            <DateRangeIcon style={{color:'#32C4A4',width:'7%',marginTop:'3%'}}/>
                            <p style={{fontWeight:'bold',postion:'relative',marginTop:'-9%',marginLeft:'10%'}}>
                                {props.decodeDate(obj.date.start,'Day') + " "+months[props.decodeDate(obj.date.start,'Month')-1]+" "+props.decodeDate(obj.date.start,'Year')+' - '+props.decodeDate(obj.date.end,'Day')+' '+months[props.decodeDate(obj.date.end,'Month')-1]+' '+props.decodeDate(obj.date.end,'Year')}
                            </p>
                            <button className={classes.join}>+ JOIN CONTEST</button>
                        </div>
                    </div>
                );
            })}
        </>
 
    );
        
    return (
        <>
            {challengeBox(props.array)}
        </>
    );

}

export default Challenge;