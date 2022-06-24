import React from "react";
import react, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Semaforo = () => {
	const [selectLight, setSelectLight] = useState(null);
	return (
		<>
		<div className="soporte"></div>
		<div className="semaforo">
		<div
			onClick={() => setSelectLight("red")}
			className={"light" +(selectLight == "red" ? " seleccionado  redSel" : " red")}></div>
			<div
			onClick={() => setSelectLight("yellow")}
			className={"light" +(selectLight == "yellow" ? " seleccionado yellowSel" : " yellow")}></div>
			<div
			onClick={() => setSelectLight("green")}
			className={"light" +(selectLight == "green" ? " seleccionado greenSel" : " green")}></div>
		</div>
		</>
	);
};

export default Semaforo;
