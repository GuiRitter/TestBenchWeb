import React from 'react';

function PrintQueryString(props) {

	return (new URLSearchParams(window.location.search)).toString();
}

export default PrintQueryString;
