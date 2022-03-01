import React from 'react';
import styled from 'styled-components';
import './App.css';
import { HomePage } from './app/containers/HomePage';
import tw from 'twin.macro';
import hsp from 'heroku-self-ping';

const AppContainer = styled.div`
	${tw`
w-full
h-full
flex
flex-col
`}
`;

function App() {
	hsp('https://rocketpig-website.herokuapp.com/');
	return (
		<AppContainer>
			<HomePage />
		</AppContainer>
	);
}

export default App;
