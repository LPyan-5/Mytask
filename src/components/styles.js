import {makeStyles} from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
    mainDiv:{
        height:'94%',
        width:'45%',
        display:'flex',
        flexDirection:'column',
        position:'absolute',
        marginTop:'2%',
        left:'28%',
    },
    headerFirst: {
        height:'6%',
        width:'98%',
        display:'flex',
        flexDirection:'row',
        position:'absolute',
        backgroundColor:'white',
        margin:'0.5% 1% 0.5% 1.2%',
        borderRadius:'1.5%' 
    },
    ongoingDiv:{
        width:'9%',
        height:'66%',
        margin:'1.5% 4% 0.5% 2%',  
    },
    upcomingDiv:{
        width:'9%',
        height:'66%',
        margin:'1.5% 4% 0.5% 1%', 
    },
    endedDiv:{
        width:'9%',
        height:'66%',
        margin:'1.5% 1.5% 0% 2.5%',
    },
    headerSecond:{
        height:'10%',
        width:'98%',
        display:'flex',
        flexDirection:'column',
        position:'absolute',
        border: '1px solid #F7F4F4',
        backgroundColor:'white',
        margin:'0.5% 1% 0.5% 1%', 
        top:'6.1%',
        borderRadius:'1.5%'
    },
    metrics:{
        borderRadius:'50%',
        marginTop:'5%',
        marginLeft:'2%',
        backgroundColor:'white',
        border:'0.5px solid #A1A1A1',
        cursor:'pointer',
        width:'7%',
        height:'82%', 
        outline:'none'
    },
    challengeDiv:{
        float:'left',
        position:'absolute',
        marginTop:'14%',                                           
        height:'800%',                     
        width:'100%'
    },
    challengeBox:{
        width:'47%',
        height:'54%',
        backgroundColor:'white',
        margin:'11px',
        float:'left',
        borderRadius:'1.5%'
    },
    join:{
        backgroundColor: '#2FCFBF',
        border: 'none',
        color: '#FDFDFD',
        padding: '10px 20px',
        textAlign: 'center',
        display: 'inline-block',
        margin: '4px 2px',
        cursor: 'pointer',
        borderRadius: '16px',
        fontWeight:'bold',
        fontFamily:'Chenla',
        marginLeft:'26%',
        marginTop:'2.5%',
        outline:'none',
          '&:hover': {
            backgroundColor: '#36E3D1',
          },
    },
    challengeBtn:{
        backgroundColor:'white',
        color:'#32C4A4',
        outline:'none',
        cursor:'pointer',
        border:'1px solid white',
        borderRadius:'10px',
        width:'16%',
        height:'4%',
        position:'absolute',
        marginTop:'20%',
        marginLeft:'-45%',
        '&:hover':{opacity: '0.9'}
    },
    challengeBoxSecond:{
        width:'100%',
        height:'50%',
        textAlign:'center'
    },
    challengeBoxThird:{
        width:'85%',
        height:'50%',
        textAlign:'left',
        marginLeft:'6%'
    }

}));


export {styles};