import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { restoreFromLocalStorage } from '../flux/action/index';

import Loading from './Loading';
import PrintQueryString from './PrintQueryString';
import SignIn from './SignIn';

import './App.css';

function componentDidMount(props, dispatch) {
	dispatch(restoreFromLocalStorage());
}

function App(props) {

	const didMountRef = useRef(false);

	const dispatch = useDispatch();

	const isAuthenticated = useSelector(state => !!(((state || {}).reducer || {}).token));
	const isLoading = useSelector(state => ((state || {}).reducer || {}).isLoading);

	useEffect(() => {
		if (didMountRef.current) {
			// componentDidUpdate(props, prevProps);
		} else {
			didMountRef.current = true;
			componentDidMount(props, dispatch);
		}
	});

	if (isLoading) {
		return <Loading />;
	}

	// if (!isAuthenticated) {
	// 	return <SignIn />
	// }

	return <PrintQueryString />;
}

export default App;
