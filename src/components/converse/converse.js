import "./converse.css";
import CONVERSENEWS1 from "./CONVERSENEWS1.jpeg";
import CONVERSENEWS2 from "./CONVERSENEWS2.png";
import CONVERSENEWS3 from "./CONVERSENEWS3.jpeg";
import CONVERSENEWS4 from "./CONVERSENEWS4.jpeg";
import CONVERSENEWS5 from "./CONVERSENEWS5.jpeg";
import CONVERSENEWS6 from "./CONVERSENEWS6.png";

// import {Component} from 'react';

const Converse =()=> {
    const data=[            
    {name:'8 of the most fashionable Converse collaborations', img: CONVERSENEWS1},
    {name:'Converse is revisiting the iconic sneakers', img: CONVERSENEWS2},
    {name:'Chic and shine: the debut collection of Converse x Miley Cyrus', img: CONVERSENEWS3},
    {name:'Sports Mode: J.W. Collection AndersonXConverse', img: CONVERSENEWS4},
    {name:'Kim Jones and Converse launch capsule collection', img: CONVERSENEWS5},
    {name:'Masha Reva customizes Converse sneakers', img: CONVERSENEWS6}
  ]
  const info=data.map((data)=>{
    return(
        <div className="ConverseNews">
        <img alt=" tut map" src={data.img}/>
            <div className="info">
            {data.name}
            </div>
    </div>)
  })
        return(
            <div>
                <h1 className="zagolovok">LATEST CONVERSE NEWS</h1>
             <div className="information"> 
                {info}
            </div>     
            </div>
        )
}
export default Converse;
// import "./converse.css";
// import {Component} from 'react';

// class Converse extends Component {
//     render(){
//         return(
//             <div> 
//                 <h1>LATEST CONVERSE NEWS</h1>
//             </div>
//         )
//     }
// }

// export default Converse;