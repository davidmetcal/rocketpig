import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const AboutUsContainer = styled.div`
	${tw`
    bg-gray-900
    w-full
    flex
    flex-wrap
    items-center
    2xl:justify-center
    pt-8
    pb-8
    pr-7
    pl-7
    md:pl-0
    flex-col
    lg:mt-20
    xl:mt-40
    
    `};
`;

const Header = styled.p`
	${tw`
    font-bold
    text-xl
    xl:text-3xl

    md:text-xl
    lg:font-black
    md:font-extrabold
    text-white
    mb-4
    sm:leading-snug
    lg:leading-normal
    xl:leading-relaxed
    `}
`;

const Note = styled.p`
	${tw`
    font-extralight
    text-gray-400
    mt-2
    `}
`;

const AboutUs = () => {
	return (
		<AboutUsContainer>
			<Header>We are rocket pig.</Header>
			<Header>
				A software development company for smart businesses with a strong voice.
			</Header>
			<Note>
				Let us take your company's digital presence and rocket it into another
				galaxy!!
			</Note>
		</AboutUsContainer>
	);
};

export default AboutUs;
