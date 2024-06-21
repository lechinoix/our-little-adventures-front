/**
 * Can be made globally available by placing this
 * inside `global.d.ts` and removing `export` keyword
 */
export interface Locals {
	userid: string;
}

export type Adventure = AdventureContent & AdventureData;

export enum AdventureStatus {
	ACTIVE = 'ACTIVE',
	ARCHIVED = 'ARCHIVED',
	DRAFT = 'DRAFT'
}

export type AdventureContent = {
	id: string;
	content: string;
	pictures: Picture[];
	topos: string[];
};

export type AdventureData = {
	id: string;
	title: string;
	cotation: string | null;
	cover: CoverPicture | null;
	date: string;
	elevation: number | null;
	orientation: string | null;
	participants: string[];
	places: string[];
	sports: string[];
	periods: string[];
	status: AdventureStatus;
};

export type Picture = {
	formats: {
		thumbnail: PictureFormat;
		xlarge: PictureFormat;
		large: PictureFormat;
		medium: PictureFormat;
		small: PictureFormat;
	};
	id: number | string;
	albumId?: string;
} & PictureFormat;

export type Album = {
	id: string;
	shareLink: string;
	title: string;
};

export type PictureFormat = {
	url: string;
	width: number;
	height: number;
};

export type CoverPicture = Picture & {
	position: string | null;
};

export type Place = {
	name: string;
	description: string | null;
	location: string | null;
};

export type Sport = {
	name: string;
	slug: string;
	cover: CoverPicture | null;
};

export type Secrets = {
	githubToken: string;
	isLoggedIn: boolean;
	apiKey: string;
	supabaseServiceKey: string
};

export type GooglePhoto = {
	id: string;
	baseLink: string;
	width: number;
	height: number;
	date: number;
};

export type TopoSource = {
	webDomain: string;
	name: string;
	id: string;
	apiBaseUrl?: string;
};

export type TopoDetails = {
	elevation: number;
	cotation: string;
	orientation: string;
};
