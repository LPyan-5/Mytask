import React from 'react';
import {styles} from './components/styles';
import Header from './components/header';

const arr = [
            { "id": 1, "type": "COMPETITION", "title": "Logan's Family 2020 IN 2020", "description": null, "metric": 6, "date": { "start": "2020-01-01", "end": "2020-12-31" }, "image": 'https://i.pinimg.com/originals/ca/02/5b/ca025bb7fe96f1f2fbd9aec8d675da35.jpg', "isMember": false, "status": "ongoing" },
            { "id": 2, "type": "COMPETITION", "title": "How far can you run?", "description": null, "metric": 6, "date": { "start": "2021-07-15", "end": "2021-07-25" }, "image": 'https://thumbs.dreamstime.com/b/%D0%BA%D1%80%D0%B0%D1%81%D0%BE%D1%87%D0%BD%D1%8B%D0%B5-%D0%B8-%D1%83%D1%89%D0%B8%D0%B5-%D0%B8%D0%B0%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D1%8B-39711972.jpg', "isMember": false, "status": "upcoming" },
            { "id": 3, "type": "COMPETITION", "title": "Running Marathon 2019", "description": null, "metric": 6, "date": { "start": "2019-07-15", "end": "2019-07-25" }, "image": 'https://img.freepik.com/free-vector/running-marathon_7888-167.jpg?size=626&ext=jpg', "isMember": false, "status": "ended" },
            { "id": 4, "type": "CHALLENGE", "title": "World Water protection 2021!", "description": null, "metric": 5, "date": { "start": "2021-07-15", "end": "2021-07-25" }, "image": 'https://www.thebalance.com/thmb/uaxtjKzXxFSiaesRMVOtXSb4siI=/2121x1414/filters:fill(auto,1)/waterpollution-ae2932fd024e4e768be14c95c5caa57c.jpg', "isMember": false, "status": "upcoming" },
            { "id": 5, "type": "CHALLENGE", "title": "World Water protection 2019!", "description": null, "metric": 5, "date": { "start": "2019-07-15", "end": "2019-07-25" }, "image": 'https://thepointpress.org/wp-content/uploads/2019/02/WaterPolltution.jpg', "isMember": false, "status": "ended" },
            { "id": 6, "type": "CHALLENGE", "title": "World Water protection 2020!", "description": null, "metric": 5, "date": { "start": "2020-05-04", "end": "2020-05-16" }, "image": 'https://cleanmalaysia.com/wp-content/uploads/2016/10/water-pollution.jpg', "isMember": false, "status": "ongoing" },
            { "id": 7, "type": "CHALLENGE", "title": "Racha team", "description": "Team for racha activities", "metric": 4, "date": { "start": "2020-01-10", "end": "2021-01-09" }, "image": 'https://res.klook.com/image/upload/c_fill,w_750,h_500,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/gfolj62hkmr6xvevmbz6.webp', "isMember": false, "status": "ongoing" },
            { "id": 8, "type": "CHALLENGE", "title": "Ring in the New Year 2020", "description": null, "metric": 4, "date": { "start": "2020-12-01", "end": "2020-12-31" }, "image": 'https://toledocitypaper.com/wp-content/uploads/2018/12/NewYear_Splash_121918.jpg', "isMember": false, "status": "upcoming" },
            { "id": 9, "type": "CHALLENGE", "title": "Ring in the New Year 2019", "description": null, "metric": 4, "date": { "start": "2019-12-01", "end": "2019-12-31" }, "image": 'https://www.hlimg.com/images/events/738X538/Ring-in-the-New-Year-at-WOW_1546678986e.jpg', "isMember": false, "status": "ended" },
            { "id": 10, "type": "COMPETITION", "title": "Sleeping Competition 2020!", "description": null, "metric": 3, "date": { "start": "2020-06-01", "end": "2020-06-15" }, "image": 'https://tolksnov.ru/assets/i/ai/4/4/9/i/3044725.jpg', "isMember": false, "status": "upcoming" },
            { "id": 11, "type": "COMPETITION", "title": "Sleep and Win", "description": null, "metric": 3, "date": { "start": "2020-05-04", "end": "2020-05-10" }, "image": 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/01/woman-sleeping-asleep-alone-bed-1296x728-header-1296x728.jpg?h=1528', "isMember": false, "status": "ongoing" },
            { "id": 12, "type": "COMPETITION", "title": "Sleeping Competition 2019!", "description": null, "metric": 3, "date": { "start": "2019-06-01", "end": "2019-06-15" }, "image": 'https://aawsat.com/sites/default/files/styles/article_img_top/public/2020/01/02/sleeping_man.jpg?itok=4jEZdPP6', "isMember": false, "status": "ended" },
            { "id": 13, "type": "COMPETITION", "title": "Fitness!", "description": null, "metric": 2, "date": { "start": "2024-12-28", "end": "2024-12-29" }, "image": 'https://www.ifta-fitness.com/cms/wp-content/uploads/00_workout_The-Exercise-High-Is-for-Real%E2%80%94but-Theres-Only-One-Way-to-Get-It_586090217_SG-SHOT.png', "isMember": false, "status": "upcoming" },
            { "id": 14, "type": "CHALLENGE", "title": "Quarantine Fitness Challenge", "description":null, "metric": 2, "date": { "start": "2020-04-14", "end": "2020-12-31" }, "image": 'https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555352909/shape/mentalfloss/istock_000059406654_small.jpg', "isMember": false, "status": "ongoing" },
            { "id": 15, "type": "CHALLENGE", "title": "Chang-ily Fitness Challenge", "description": null,"metric": 2, "date": { "start": "2020-01-02", "end": "2020-12-31" }, "image": 'https://conceptodefinicion.de/wp-content/uploads/2016/12/Fitness2.jpg', "isMember": false, "status": "ongoing" },
            { "id": 16, "type": "COMPETITION", "title": "Fitness!", "description": null, "metric": 2, "date": { "start": "2019-05-05", "end": "2019-05-15" }, "image": 'https://landerapp.com/blog/wp-content/uploads/2018/07/6f66fc0ee89eac4cb13eceae9bf66242.jpeg', "isMember": false, "status": "ended" },
            { "id": 17, "type": "CHALLENGE", "title": "10k steps or more challenge", "description": "This group is created to motivate each other to reach 10k steps or more everyday", "metric": 1, "date": { "start": "2019-12-03", "end": "2020-02-10" }, "image": 'https://www.medschl.cam.ac.uk/wp-content/uploads/2016/09/step-image.png', "isMember": false, "status": "ongoing" }, 
            { "id": 18, "type": "COMPETITION", "title": "C2C Super Step Challenge!", "description": null, "metric": 1, "date": { "start": "2021-03-13", "end": "2021-05-15" }, "image": 'https://www.sbs.com.au/topics/sites/sbs.com.au.topics/files/styles/full/public/gettyimages-78616903.jpg?itok=vpRKMrOO&mtime=1502951087', "isMember": false, "status": "upcoming" },
            { "id": 19, "type": "CHALLENGE", "title": "Skinny peeps", "description": "wow", "metric": 1, "date": { "start": "2020-03-07", "end": "2020-12-31" }, "image": "https:\/\/static.inkin.com\/uploads\/2020\/03\/06\/1a660e24f187e6177fc98ee513862b5ce74465a5.jpg", "isMember": false, "status": "ongoing" },
            { "id": 20, "type": "COMPETITION", "title": "GPC 865 DC", "description": null, "metric": 1, "date": { "start": "2020-01-21", "end": "2020-12-31" }, "image": 'https://www.medschl.cam.ac.uk/wp-content/uploads/2016/09/step-image.png', "isMember": false, "status": "ongoing" },
            { "id": 21, "type": "CHALLENGE", "title": "Wk 2 EHPHoldings challenge", "description": null, "metric": 1, "date": { "start": "2020-01-28", "end": "2021-01-02" }, "image": "https:\/\/static.inkin.com\/uploads\/2020\/01\/26\/0e89ef414f3ded1669ad0ea40c9f0740a91be176.jpg", "isMember": false, "status": "ongoing" },
            { "id": 22, "type": "CHALLENGE", "title": "Step up", "description": "Most steps in a week ", "metric": 1, "date": { "start": "2020-04-27", "end": "2020-05-03" }, "image": 'https://s3-us-west-2.amazonaws.com/csbc.com/images/SCAM-logo-2019.jpg', "isMember": false, "status": "ended" },
            { "id": 23, "type": "CHALLENGE", "title": "Maz challenger", "description": null, "metric": 1, "date": { "start": "2020-04-26", "end": "2020-05-03" }, "image": "https://calendarmedia.blob.core.windows.net/assets/62e2c0d4-554b-450d-b9cb-7dc112335413.jpg", "isMember": false, "status": "ended" }  
];

function App() {
  if(!localStorage.getItem('data')){
    let jsonReq = JSON.stringify(arr);
    localStorage.setItem('data',jsonReq);
  }
  const classes = styles();
  document.body.style.backgroundColor='#F7F6F6';
  return (
  <div className={classes.mainDiv}>
    <Header/>
    </div>
  );
}

export default App;
