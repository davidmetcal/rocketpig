import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';

import CloudFront from '../../../assets/images/Cloud-Front.png';
import CloudBack from '../../../assets/images/cloud-back.png';

import Blob from '../../../assets/images/blob.svg';
import Rocket from '../../../assets/images/Rocket-pink.png';
import { SCREENS } from '../../components/responsive';
import Button from '../../components/buttons';

const TopSectionContainer = styled.div`
	min-height: 340px;
	margin-top: 4em;

	@media (min-width: ${SCREENS.sm}) {
		min-height: 400px;
		margin-top: 8em;
	}
	@media (min-width: ${SCREENS.lg}) {
		min-height: 400px;
		margin-top: 6em;
	}
	@media (min-width: ${SCREENS.xl}) {
		min-height: 400px;
		margin-top: 6em;
	}

	${tw`
    w-full
    max-w-screen-2xl
    flex
    justify-between
    pl-3
    pr-3
    lg:pl-12
    lg:pr-12

`};
`;

const LeftContainer = styled.div`
	${tw`
w-1/2
flex
flex-col
`}
`;

const RightContainer = styled.div`
	${tw`
w-1/2
flex
flex-col
relative
mt-32
md:mt-20

`}
`;

const Slogan = styled.h1`
	${tw`
    font-bold
    text-2xl
    xl:text-6xl
    sm:text-3xl
    md:text-5xl
    lg:font-black
    md:font-extrabold
    text-black
    mb-4
    sm:leading-snug
    lg:leading-normal
    xl:leading-relaxed
  `};
`;

const Description = styled.p`
	${tw`
    text-xs
    lg:text-sm
    xl:text-lg
    sm:max-h-full
    overflow-hidden
    max-h-12
    text-gray-800
  `};
`;

const BlobContainer = styled.div`
	width: 20em;
	height: 10em;
	position: absolute;
	right: -5em;
	top: -9em;
	z-index: -2;
	transform: rotate(-30deg);
	img {
		width: 100%;
		height: auto;
	}
	@media (min-width: ${SCREENS.sm}) {
		width: 40em;
		max-height: 10em;
		right: -9em;
		top: -16em;
		transform: rotate(-25deg);
	}
	@media (min-width: ${SCREENS.lg}) {
		width: 50em;
		max-height: 30em;
		right: -7em;
		top: -15em;
		transform: rotate(-30deg);
	}
	@media (min-width: ${SCREENS.xl}) {
		width: 70em;
		max-height: 30em;
		right: -15em;
		top: -25em;
		transform: rotate(-20deg);
	}
`;

const StandAloneCloudFront = styled.div`
	width: auto;
	height: 8em;
	right: -4em;
	top: 2em;
	position: absolute;
	z-index: -1;
	opacity: 0.4;
	img {
		width: auto;
		height: 100%;
		max-width: fit-content;
	}

	@media (min-width: ${SCREENS.sm}) {
		height: 16em;
		right: -7em;
		top: 3em;
	}

	@media (min-width: ${SCREENS.lg}) {
		height: 20em;
		right: -9em;
		top: 6em;
	}
	@media (min-width: ${SCREENS.xl}) {
		height: 20em;
		right: -4em;
		top: 10em;
	}
`;

const StandAloneCloudBack = styled.div`
	width: auto;
	height: 8em;
	right: -8em;
	top: -9em;
	position: absolute;
	z-index: -2;
	opacity: 0.5;
	img {
		width: auto;
		height: 100%;
		max-width: fit-content;
	}

	@media (min-width: ${SCREENS.sm}) {
		height: 7em;
		right: 6em;
		top: -10em;
	}

	@media (min-width: ${SCREENS.lg}) {
		height: 9em;
		right: 6em;
		top: -10em;
	}
	@media (min-width: ${SCREENS.xl}) {
		height: 10em;
		right: 8em;
		top: -10em;
	}
`;

const StandAloneRocket = styled.div`
	width: auto;
	height: 18em;
	right: -4.5em;
	top: -10em;
	position: absolute;
	z-index: -2;
	transform: rotate(-16deg);
	img {
		width: auto;
		height: 100%;
	}

	@media (min-width: ${SCREENS.sm}) {
		height: 33em;
		right: -8em;
		top: -16em;
		transform: rotate(0deg);
	}

	@media (min-width: ${SCREENS.lg}) {
		height: 40em;
		right: -8em;
		top: -16em;
		transform: rotate(0deg);
	}
	@media (min-width: ${SCREENS.xl}) {
		height: 48em;
		right: -10em;
		top: -19em;
		transform: rotate(0deg);
	}
`;

const ButtonsContainer = styled.div`
	${tw`
	flex
	flex-row
	mt-4
	flex-wrap
	`}
`;

export const TopSection = () => {
	return (
		<TopSectionContainer>
			<LeftContainer>
				<Slogan>REACT / NATIVE Development on rocket fuel</Slogan>
				<Description>
					Rise above the noise with clean and response code
				</Description>
				<ButtonsContainer>
					<Button text='Mobile App Development' theme='outlined' />
					<Button text='Website Development' theme='filled' />
				</ButtonsContainer>
			</LeftContainer>
			<RightContainer>
				<BlobContainer>
					<img src={Blob} alt='' />
				</BlobContainer>
				<StandAloneCloudFront>
					<img src={CloudFront} alt='' />
				</StandAloneCloudFront>
				<StandAloneCloudBack>
					<img src={CloudBack} alt='' />
				</StandAloneCloudBack>
				<StandAloneRocket>
					<img src={Rocket} alt='' />
				</StandAloneRocket>
			</RightContainer>
		</TopSectionContainer>
	);
};
