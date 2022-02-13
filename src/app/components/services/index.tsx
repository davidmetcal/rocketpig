import React from 'react';
import tw from 'twin.macro';
import { IService } from '../../../typings/service';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IServiceProps extends IService {}

const ServiceContainer = styled.div`
	width: 16.5em;
	min-height: 24em;
	max-height: 24em;
	box-shadow: 0 1.3px 17px -2px rgba(0, 0, 0, 0.4);
	${tw`
    flex
    flex-col
    items-center
    p-3
    pb-4
    rounded-md
    m-1
    sm:m-3
    md:m-6`};
`;

const CarIcon = styled.span`
	${tw`
    text-pink-400
    text-6xl
    m-8
    `}
`;

const ServiceTitle = styled.h3`
	${tw`
    text-gray-400
    text-4xl
    m-3
  `};
`;

const ServiceContent = styled.p`
	${tw`
    text-black
    text-base
    `}
`;

const Service = (props: IServiceProps) => {
	const { icon, title, content } = props;
	return (
		<ServiceContainer>
			<ServiceTitle>{title}</ServiceTitle>
			<CarIcon>
				<FontAwesomeIcon icon={icon} />
			</CarIcon>

			<ServiceContent>{content}</ServiceContent>
		</ServiceContainer>
	);
};

export default Service;
