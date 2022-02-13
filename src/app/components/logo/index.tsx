import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import RocketPigPink from '../../../assets/images/Rocket-Pig-color.png';
import RocketPigWhite from '../../../assets/images/Rocket-Pig-Logo2.png';
import { ILogoProps } from '../../../typings/logo';

const LogoContainer = styled.div`
	${tw`
flex
items-center
`}
`;

const LogoText = styled.h2`
	font-family: 'Kiona-Regular';
	${tw`
text-xl
md: text-2xl
font-bold
text-black
m-2
`}
	${({ color }: any) => (color === 'white' ? tw`text-white` : tw`text-black`)}
`;
const BoldText = styled.h2`
	font-family: 'HurmeGeometric';
	${tw`
text-xl
md: text-2xl
font-bold
text-black
mt-2
-ml-2
`}
	${({ color }: any) => (color === 'white' ? tw`text-white` : tw`text-black`)}
`;

const Image = styled.div`
	width: auto;
	${tw`
h-8
md: h-10
`}
	img {
		width: auto;
		height: 100%;
	}
`;

const Logo = (props: ILogoProps) => {
	const { color } = props;
	return (
		<LogoContainer>
			<Image>
				<img src={color === 'white' ? RocketPigWhite : RocketPigPink} />
			</Image>
			<LogoText color={color || 'dark'}>Rocket</LogoText>
			<BoldText color={color || 'dark'}>PIG</BoldText>
		</LogoContainer>
	);
};

export default Logo;
