import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { ICase } from '../../../typings/service';
import { SCREENS } from '../responsive';
import { useMediaQuery } from 'react-responsive';

interface Props {
	isOpen?: boolean;
	isMobile?: boolean;
}

const Container = styled.div`
	${tw`
    rounded-md
    overflow-hidden
    m-3
    flex
    flex-row
    relative
    `}
	@media (min-width: ${SCREENS.xs}) {
		flex-direction: column;
	}
	@media (min-width: ${SCREENS.sm}) {
		flex-direction: row;
	}
` as any;

const ImageContainer = styled.div`
	width: auto;
	z-index: 1;
	transition: all 0.8s;

	${tw`
	bg-pink-900
	rounded-md

	`}
	img {
		width: auto;
		height: 100%;
	}

	@media (min-width: ${SCREENS.xs}) {
		height: 22em;
	}
	@media (min-width: ${SCREENS.sm}) {
		height: 30em;
	}

	${(props: Props) => (!props.isOpen ? tw`opacity-70` : tw`opacity-100`)}
` as any;

const InfoContainer = styled.div`
	width: 15em;
	${tw`
    p-3
    flex
    flex-col
    justify-center
    h-full
	opacity-0
	transition-all
	duration-1000
    `}
	@media (min-width: ${SCREENS.xs}) {
		width: 18em;
	}

	@media (min-width: ${SCREENS.md}) {
		width: 15em;
	}

	${(props: Props) => props.isOpen && tw`opacity-100`}
` as any;

const Title = styled.h3`
	${tw`
    text-white
    text-xl
    font-bold
	`}
`;

const Content = styled.p`
	${tw`
    text-white`}
`;

const CollapsibleContainer = styled.div`
	transition: all 0.8s;
	${tw`
	bg-black
	rounded-md`}
`;

const ImagesHolder = styled.div`
	${tw`
		flex
		flex-row
		relative
		justify-center
		items-center
	`}
` as any;

const CaseStudyCard = (props: ICase) => {
	const [width, setWidth] = useState<any>(0);
	const [height, setHeight] = useState<any>(0);
	const [isOpen, setIsOpen] = useState(false);
	const { type, image, title, content, detailedImg } = props;
	const ref = useRef<HTMLDivElement>(null);
	const imgRef = useRef<HTMLDivElement>(null);
	const imageContainerRef = useRef<HTMLDivElement>(null);
	const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

	useEffect(() => {
		if (isOpen && !isMobile) {
			setHeight(imgRef.current?.getBoundingClientRect().height);
			setWidth(ref.current?.getBoundingClientRect().width);
		}

		if (isOpen && isMobile) {
			setHeight(200);
			setWidth(ref.current?.getBoundingClientRect().width);
		}
		if (!isOpen) {
			setHeight(0);
			setWidth(0);
		}
	}, [isOpen, isMobile]);

	return (
		<Container
			onMouseEnter={() => setIsOpen(true)}
			onMouseLeave={() => setIsOpen(false)}
			onClick={() => setIsOpen(!isOpen)}
			type={type}
		>
			<ImagesHolder isOpen={isOpen} ref={imageContainerRef}>
				<ImageContainer ref={imgRef} isOpen={isOpen}>
					<img src={image} alt='' />
				</ImageContainer>
				{type === 'mobile' && (
					<ImageContainer ref={imgRef} isOpen={isOpen}>
						<img src={detailedImg} alt='' />
					</ImageContainer>
				)}
			</ImagesHolder>
			<CollapsibleContainer style={!isMobile ? { width } : { height }}>
				<InfoContainer
					type={type}
					isOpen={isOpen}
					widthControl={
						imageContainerRef.current?.getBoundingClientRect().width
					}
					ref={ref}
				>
					<Title>{title}</Title>
					<Content>{content}</Content>
				</InfoContainer>
			</CollapsibleContainer>
		</Container>
	);
};

export default CaseStudyCard;
