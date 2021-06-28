const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			mobile: false
		},
		actions: {
			mobile: bool => {
				setStore({ mobile: bool });
			}
		}
	};
};

export default getState;
