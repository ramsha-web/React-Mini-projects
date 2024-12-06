import React, {useState} from "react";
function Component(){
    const [cars,setCars]= useState([]);
    const [caryear,setCaryear]=useState(new Date().getFullYear());
    const [carmodel,setCarmodel]=useState("");
    const [carmake,setCarmake]=useState("");

    function HandleAddcar(){
        const newcar ={
            year:caryear,
            model:carmodel,
            make:carmake
        };
        setCars(c=>[...c,newcar]);
        setCaryear(new Date().getFullYear());
        setCarmodel("");
        setCarmake("");


    }
    function HandleRemovecar(index){
        setCars(c=>c.filter((_,i)=>i!==index));

    }
    function HandleYearchange(event){
        setCaryear(event.target.value)

    }
    function HandleModelchange(event){
        setCarmodel(event.target.value)


    }
    function HandleMakechange(event){
        setCarmake(event.target.value)

    }
    return(
    <>
    <div>
        <h2>List of cars</h2>
        <ul>
            {cars.map((car,index)=>
            <li key={index} onClick={()=>HandleRemovecar(index)} >
                {car.year} {car.make} {car.model}

            </li>
             )}

        </ul>
        <input type="number" value={caryear} onChange={HandleYearchange}/><br/>
        <input type="text" value={carmake} onChange={HandleMakechange} placeholder="Enter car Make"/><br/>
        <input type="text" value={carmodel} onChange={HandleModelchange} placeholder="Enter car Model"/><br/>
        <button onClick={HandleAddcar}>Add Car</button>
    </div>

    </>
    
    );

}


export default Component
