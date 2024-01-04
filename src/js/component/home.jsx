
import React, { useState, useEffect } from 'react';




//create your first component
const Home = () => {
	const [task, setTask ] = useState("");
	const[lista, setLista]=   useState([]);

	const guardar=(event) => {

		if(event.key=="Enter"){
			if(task.trim != ""){
				setLista([...lista, task ])
				setTask("")}
			
						    	}
        
 							}
	const eliminar=(event)=>{
		let newarr=lista.filter((item, index)=>index!==event)
		return setLista(newarr)
		
	}

	const write=(e)=>(setTask(e.target.value))

	
	
	return (
		<>
		<div className="p-5">
		<div className="form-floating d-flex justify-content-center">
		  <input className="form-control"
			 	type="text"
				id="texto"
			    onChange={write} 
				value={task}
				onKeyDown={guardar}/>
		   <label for="texto">Lista</label>
		 
		</div>
		<ul className="list-inline">
			{lista.map((item, index)=>{
				return(
				     
					   <li className="list-inline m-2 " key={index}>
						 <div className="d-flex align-items-center">
					   <button className="btn btn-sm btn-danger"
					   onClick={()=>eliminar(index)}> X </button>
					   <p className="mt-1 mx-2">{item}</p>
					     </div>
					   </li>
					  )

			})}


		</ul>
		</div>
		
		</>
	)

		
};

export default Home;
