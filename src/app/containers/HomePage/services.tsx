import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { IService } from '../../../typings/service';
import Service from '../../components/services';
import {
	faPen,
	faChartLine,
	faLaptopCode,
	faHouseUser,
	faMobile,
} from '@fortawesome/free-solid-svg-icons';
import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { useMediaQuery } from 'react-responsive';
import { SCREENS } from '../../components/responsive';

const ServicesContainer = styled.div`
	${tw`
    w-full
    max-w-screen-2xl
    flex
    flex-col
    items-center
    pl-3
    pr-3
    lg:pl-12
    lg:pr-12
    `}
`;

const Title = styled.h3`
	${tw`
    text-black
    font-extrabold
    text-2xl
    xl:text-3xl
    mt-10
    `}
`;

const ServiceCardContainer = styled.div`
	${tw`
    w-full
    flex
    flex-wrap
    justify-center
    mt-7
    md:mt-10
    `}
`;

const service1: IService = {
	icon: faPen,
	title: 'Design',
	content:
		'Identify your brands look and feel and showcase it to the world on a customly designed website and app',
};

const service2: IService = {
	icon: faChartLine,
	title: 'Strategy',
	content:
		'Build a searchable web presence so customers can find you and your products with ease',
};

const service3: IService = {
	icon: faLaptopCode,
	title: 'Digital',
	content:
		'Use interactive tool to provide information and integrate e-commerce for your products',
};

const service4: IService = {
	icon: faHouseUser,
	title: 'Marketing',
	content:
		'Use your website/app to collate information on potential clients and build marketing strategies.',
};

const service5: IService = {
	icon: faMobile,
	title: 'Mobile',
	content:
		'We develop for both Android and iOS using REACT Native - building you a customer app with your own unique features and design',
};

export const Services = () => {
	const [current, setCurrent] = useState(0);

	const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

	const serviceItems = [
		<Service {...service1} />,
		<Service {...service2} />,
		<Service {...service3} />,
		<Service {...service5} />,
		<Service {...service4} />,
	];

	return (
		<ServicesContainer>
			<Title>Our services.</Title>
			<ServiceCardContainer>
				<Carousel
					value={current}
					onChange={setCurrent}
					slides={serviceItems}
					plugins={[
						'clickToChange',
						{
							resolve: slidesToShowPlugin,
							options: {
								numberOfSlides: 4,
							},
						},
					]}
					breakpoints={{
						640: {
							plugins: [
								{
									resolve: slidesToShowPlugin,
									options: {
										numberOfSlides: 1,
									},
								},
							],
						},
						900: {
							plugins: [
								{
									resolve: slidesToShowPlugin,
									options: {
										numberOfSlides: 2,
									},
								},
							],
						},
						1300: {
							plugins: [
								{
									resolve: slidesToShowPlugin,
									options: {
										numberOfSlides: 3,
									},
								},
							],
						},
					}}
				/>
				<Dots
					value={current}
					onChange={setCurrent}
					number={
						isMobile ? serviceItems.length : Math.ceil(serviceItems.length / 3)
					}
				/>
			</ServiceCardContainer>
		</ServicesContainer>
	);
};
