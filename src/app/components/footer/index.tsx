import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Logo from '../logo';

const FooterContainer = styled.div`
	min-height: 20em;
	${tw`
    flex
    flex-row
    min-w-full
    bg-gray-900
    pt-4
    md:pt-12
    pb-1
    items-center
    justify-center
    `}
`;

const InnerContainer = styled.div`
	${tw`
    flex
    flex-wrap
    flex-row
    max-w-screen-2xl
    w-full
    h-full
    pl-1
    lg:pl-12
    lg:pr-12
    `}
`;

const AboutContainer = styled.div`
	${tw`
    flex
    flex-col
    `}
`;

const AboutText = styled.p`
	${tw`
    text-white
    text-sm
    font-normal
    max-w-xs
    leading-5
    mt-2
    `}
`;

const SectionConainter = styled.div`
	${tw`
    flex
    flex-col
    mr-3
    `}
`;

const LinksList = styled.ul`
	${tw`
    outline-none
    list-none
    flex-col
    `}
`;

const ListItem = styled.li`
	${tw`
    text-sm
    text-white
    mb-3
    `}
	& > a {
		${tw`
        text-sm
        text-white
        `}
	}
`;

const HeaderTitle = styled.h3`
	${tw`
    text-base
    font-bold
    text-2xl
    text-white
    mt-2
    mb-2
    `}
`;

const Footer = () => {
	return (
		<FooterContainer>
			<InnerContainer>
				<AboutContainer>
					<Logo color='white' />
					<AboutText>
						RocketPIG is a software development company offering services
						globally.
					</AboutText>
				</AboutContainer>
				<SectionConainter>
					<HeaderTitle>Our Links</HeaderTitle>
					<LinksList>
						<ListItem>
							<a href='#'>Home</a>
						</ListItem>
						<ListItem>
							<a href='#'>About Us</a>
						</ListItem>
						<ListItem>
							<a href='#'>Services</a>
						</ListItem>
						<ListItem>
							<a href='#'>Contact Us</a>
						</ListItem>
					</LinksList>
				</SectionConainter>
			</InnerContainer>
		</FooterContainer>
	);
};

export default Footer;
