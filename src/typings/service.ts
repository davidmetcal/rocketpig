import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface IService {
	icon: IconProp;
	title: string;
	content: string;
}

export interface ICase {
	type: 'website' | 'mobile';
	image: any;

	detailedImg?: any;
	title: string;
	content: string;
}
