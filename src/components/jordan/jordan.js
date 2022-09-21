import "./jordan.css";
import {Component} from 'react';

class Jordan extends Component {
    render(){
        return(
            <div> 
                <h1>LATEST JORDAN NEWS</h1>
            </div>
        )
    }
}

export default Jordan;

// import "./vans.css";
// import VANSNEWS1 from "./VANSNEWS1.jpg";
// import VANSNEWS2 from "./VANSNEWS2.webp";
// import VANSNEWS3 from "./VANSNEWS3.webp";
// import VANSNEWS4 from "./VANSNEWS4.webp";
// import VANSNEWS5 from "./VANSNEWS5.webp";
// import VANSNEWS6 from "./VANSNEWS6.webp";
// // import {Component} from 'react';

// const Vans =()=> {
//     const data=[            
//     {name:'2022 VANS US OPEN OF SURFING', img: VANSNEWS1},
//     {name:'VANS SKATE X DANIEL JOHNSTON COLLECTION', img: VANSNEWS2},
//     {name:'AUTHENTIC CHINO LOOSE PANT', img: VANSNEWS3},
//     {name:'VAULT BY VANS X DOBALE', img: VANSNEWS4},
//     {name:'VANS HUATUNAN YEAR OF THE TIGER', img: VANSNEWS5},
//     {name:'VANS FA ULTIMATE WAFFLE', img: VANSNEWS6}
//   ]
//   const info=data.map((data)=>{
//     return(
//         <div className="VansNews">
//         <img alt=" tut map" src={data.img}/>
//             <div className="info">
//             {data.name}
//             </div>
//     </div>)
//   })
//         return(
//             <div>
//                 <h1 className="zagolovok">LATEST VANS NEWS</h1>
//              <div className="information"> 
//                 {info}
//             </div>     
//             </div>
//         )
// }
// export default Vans;