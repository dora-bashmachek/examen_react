import "./jordan.css";
import JORDANNEWS1 from "./JORDANNEWS1.jpg";
import JORDANNEWS2 from "./JORDANNEWS2.jpeg";
import JORDANNEWS3 from "./JORDANNEWS3.jpg";
import JORDANNEWS4 from "./JORDANNEWS4.jpg";
import JORDANNEWS5 from "./JORDANNEWS5.webp";
import JORDANNEWS6 from "./JORDANNEWS6.jpg";

// import {Component} from 'react';

const Jordan =()=> {
    const data=[            
    {name:'JORDAN BRAND TO RELEASE SNEAKERS INSPIRED BY HERMÈS BIRKIN BAG', img: JORDANNEWS1},
    {name:"EDITOR'S CHOICE: SPRING 2022 WOMEN'S SNEAKERS", img: JORDANNEWS2},
    {name:'TRAVIS SCOTT SHOWED THE NEW TRAVIS SCOTT X NIKE AIR JORDAN 1 LOW', img: JORDANNEWS3},
    {name:'ALL AIR JORDAN RELEASES IN 2021', img: JORDANNEWS4},
    {name:'Michael Jordan and his sneakers added to PGA Tour 2K23', img: JORDANNEWS5},
    {name:'OFF-WHITE X NIKE AIR JORDAN 5 "SAIL" TO BE RELEASED IN LATE OCTOBER', img: JORDANNEWS6}
  ]
  const info=data.map((data)=>{
    return(
        <div className="JordanNews">
        <img alt=" tut map" src={data.img}/>
            <div className="info">
            {data.name}
            </div>
    </div>)
  })
        return(
            <div>
                <h1 className="zagolovok">LATEST VANS NEWS</h1>
             <div className="information"> 
                {info}
            </div>     
            </div>
        )
}
export default Jordan;

// import "./jordan.css";
// import {Component} from 'react';

// class Jordan extends Component {
//     render(){
//         return(
//             <div> 
//                 <h1>LATEST JORDAN NEWS</h1>
//             </div>
//         )
//     }
// }

// export default Jordan;