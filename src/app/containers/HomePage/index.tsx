import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Footer from '../../components/footer';
import { Navbar } from '../../components/navbar';
import AboutUs from './aboutUs';
import { Services } from './services';
import { TopSection } from './topSection';
import CaseStudy from './casesStudy';

const PageContainer = styled.div`
	${tw`
	flex
	flex-col
	w-full
	h-full
	items-center
	overflow-x-hidden
	`}
`;

export const HomePage = () => {
	return (
		<PageContainer>
			<Navbar />
			<TopSection />
			<AboutUs />
			<Services />
			<CaseStudy />
			<Footer />
		</PageContainer>
	);
};
