import React, { useContext, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Context } from "./store/appContext";
import injectContext from "./store/appContext";

import Navbar from "./component/navbar";

//create your first component
const Layout = () => {
	const { store, actions } = useContext(Context);
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	useEffect(() => {
		if (window.screen.width < 780) {
			actions.mobile(true);
		} else {
			actions.mobile(false);
		}
	}, []);
	console.log(store.mobile);
	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						{/* <Route exact path="/">
							<Home />
						</Route> */}

						{/* <PrivateRoute path="/feed" component={Feed} exact /> */}

						{/* <PrivateRoute path="/perfilVendedor" component={PerfilVendedor} exact /> */}
					</Switch>
					{/* <Footer /> */}
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);

	function PrivateRoute({ component: Component, ...rest }) {
		const token = sessionStorage.getItem("token");
		return (
			<Route {...rest} render={props => (token ? <Component {...props} /> : <Redirect to="/errorPrivado" />)} />
		);
	}
};

export default injectContext(Layout);
