import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import CaseStudyCard from '../../components/caseStudiesCard';
import HopPreview from '../../../assets/images/HOP-web.png';
import HopApp from '../../../assets/images/HOP-tracks.png';
import HopAppMaps from '../../../assets/images/HOP-tracks-map.png';
import GiantTalentWeb from '../../../assets/images/Giant-Talent-web.png';

import { ICase } from '../../../typings/service';

const Container = styled.div`
	${tw`
    bg-pink-900
    w-full
    flex
    flex-wrap
    flex-col
    items-center
    justify-center
    pr-7
    pl-7
    md:pl-0
    `}
`;

const InnerContainer = styled.div`
	${tw`flex
	flex-wrap
	justify-center
	pt-8
	pb-8
	md:pl-8
	md:pr-8
`}
`;

const Title = styled.h3`
	${tw`
    text-white
    font-extrabold
    text-2xl
    xl:text-3xl
    mt-10
    `}
`;

const CaseStudy = () => {
	const caseStudy1: ICase = {
		type: 'website',
		image: HopPreview,

		title: 'HOP Store',
		content:
			'A start up E-vehicle company in Guatemala needed a fresh bright webpage to represent their brand. Features include an e-commerce store, interactive chat and marketing collection.',
	};

	const caseStudy2: ICase = {
		type: 'mobile',
		image: HopApp,

		detailedImg: HopAppMaps,
		title: 'HOP Mobile App',
		content:
			'Additional to their website HOP wanted an app for their customers to show them safe riding routes in Guatemala. Features include google sign-in, GPS recording, sharing routes with friends.',
	};

	const caseStudy3: ICase = {
		type: 'website',
		image: GiantTalentWeb,
		title: 'Giant Talent',
		content:
			'A talent consultancy companys website to identify their brand, attract new clients and provide information to potential clients and candidates.',
	};

	return (
		<Container>
			<Title>Some of our projects...</Title>
			<InnerContainer>
				<CaseStudyCard {...caseStudy1} />
				<CaseStudyCard {...caseStudy2} />
				<CaseStudyCard {...caseStudy3} />
			</InnerContainer>
		</Container>
	);
};

export default CaseStudy;
