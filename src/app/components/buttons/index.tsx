import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';

interface IButtonProps {
	theme: 'filled' | 'outlined';
	text: string;
}

const BaseButton = styled.div`
	${tw`
    pl-5
    pr-5
    pt-3
    pb-3
    outline-none
    rounded-md
    text-white
    text-xs
    font-semibold
    border-transparent
    border-2
    border-solid
    focus:outline-none
    transition-all
    duration-300
    ease-in-out
    m-1
    text-center
    `}
`;

const OutlinedButton = styled(BaseButton)`
	${tw`
    bg-pink-400
    hover:bg-transparent
    hover:text-pink-400
    hover:border-pink-400

    `}
`;

const FilledButton = styled(BaseButton)`
	${tw`
    bg-transparent
    border-pink-400
    text-pink-400
    hover:bg-pink-400
    hover:text-white
    hover:border-transparent

    `}
`;

const Button = (props: IButtonProps) => {
	const { theme, text } = props;

	if (theme === 'filled') {
		return <FilledButton>{text}</FilledButton>;
	} else {
		return <OutlinedButton>{text}</OutlinedButton>;
	}
};

export default Button;
