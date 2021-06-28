import React, { useState, useEffect, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import injectContext from "../store/appContext";

// import logo from '../img/logoGrande.png';

function Navbar() {
	const { store, actions } = useContext(Context);

	const [padding, setPadding] = useState("");
	const [alinear, setAlinear] = useState("");
	const [toggle, setToggle] = useState("");
	const [target, setTarget] = useState("");
	const [expanded, setExpanded] = useState("");

	useEffect(() => {
		if (store.mobile) {
			setPadding("p-1");
			setAlinear("justify-content-center");
			setToggle("collapse");
			setTarget("#navbarNav");
			setExpanded("false");
		} else {
			setPadding("p-3");
			setAlinear("justify-content-start");
			setToggle("");
			setTarget("");
			setExpanded("");
		}
	}, []);

	const styleNavbar = {
		margin: "0",
		marginBottom: "0",
		// marginBottom: margenBottom,
		minHeight: "100px",
		fontSize: "21px"
		// borderRadius: '0 0 5px 5px'
	};
	const style = {
		marginTop: "15px",
		paddingBottom: "15px"
	};

	return (
		<nav
			style={styleNavbar}
			className={"bg-dark shadow-lg navbar navbar-expand-lg navbar-light fixed-top" + padding}>
			<Link className={"col-lg-6 col-12 my-3 d-flex " + alinear} to="/">
				{/* <img className="my-2" style={{width: '250px'}} src={logo} alt=""/> */}
			</Link>
			<button
				style={{ margin: "auto" }}
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>
			<div style={style} className={"collapse navbar-collapse "} id="navbarNav">
				<ul className="navbar-nav">
					<li style={{ margin: "auto" }} className="nav-item">
						<NavLink
							className="nav-link"
							exact
							to="/"
							data-toggle={toggle}
							data-target={target}
							aria-expanded={expanded}>
							Inicio
						</NavLink>
					</li>
					<li style={{ margin: "auto" }} className="nav-item" />
					<li style={{ margin: "auto" }} className="nav-item">
						<NavLink
							className="nav-link"
							to="/Quienes_somos"
							data-toggle={toggle}
							data-target={target}
							aria-expanded={expanded}>
							¿Quiénes somos?
						</NavLink>
					</li>
					<li style={{ margin: "auto" }} className="nav-item">
						<NavLink
							className="nav-link"
							to="/Material_teorico"
							data-toggle={toggle}
							data-target={target}
							aria-expanded={expanded}>
							Material Teórico
						</NavLink>
					</li>
					<li style={{ margin: "auto" }} className="nav-item">
						<NavLink
							className="nav-link"
							to="/Examen"
							data-toggle={toggle}
							data-target={target}
							aria-expanded={expanded}>
							Examen
						</NavLink>
					</li>
					<li style={{ margin: "auto" }} className="nav-item">
						<NavLink
							className="nav-link"
							to="/Contactanos"
							data-toggle={toggle}
							data-target={target}
							aria-expanded={expanded}>
							Contáctanos
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
