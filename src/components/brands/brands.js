import "./brands.css";

const Brands  =()=> {
          const data=[
            {name:'Jordan'},
            {name:'Converse'},
            {name:'Vans'}
          ]
         const buttons=data.map(({name})=>{
        // const active=props.filter===name;
        // const classCss=active? 'btn btn-light': "btn btn-light-light";
        return(
            <button type="button"
            key={name}>
            {/* // onClick={()=>props.onFilterSelect(name)}
            //     {label} */}
            {name}
            </button>
            )
        })
        return(
          <div className="brand">
        <div className="button">
            {buttons}
        </div> 
        </div>
        )
    
}

export default Brands;