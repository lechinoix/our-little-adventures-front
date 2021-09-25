/**
 * Can be made globally available by placing this
 * inside `global.d.ts` and removing `export` keyword
 */
export interface Locals {
	userid: string;
}

export type Adventure = {
  id: number,
	title: string,
	cotation: string,
	description: string,
	status: AdventureStatus,
	notation: number,
	date: string,
	short_description: string,
	elevation: number,
	number_of_days: number,
	orientation: CardinalPoints,
	published_at: string,
	created_at: string,
	updated_at: string,
  topo: Topo[],
	pictures: Picture[],
	participants: Participant[],
	places: Place[],
	sports: Sport[],
	periods: Period[]
}

export enum AdventureStatus {
  DONE = 'DONE',
  PLANNED = 'PLANNED',
  ABORTED = 'ABORTED'
}

export enum CardinalPoints {
  N = 'N',
  NE = 'NE',
  E = 'E',
  SE = 'SE',
  S = 'S',
  SW = 'SW',
  W = 'W',
  NW = 'NW'
}

export type Topo = {
  id: number,
  url: string,
  source: TopoSource
};

export enum TopoSource {
  C2C = 'C2C',
  Skitour = 'Skitour'
}

export type Picture = {
  id: number,
  name: string,
  alternativeText: string,
  caption: string,
  width: number,
  height: number,
  formats: {
    thumbnail: PictureFormat,
    large: PictureFormat,
    medium: PictureFormat,
    small: PictureFormat
  },
  hash: string,
  ext: string,
  mime: string,
  size: 1942.68,
  url: string,
  previewUrl: string,
  provider: string,
  provider_metadata: string,
  created_at: string,
  updated_at: string
}

export type PictureFormat = {
  name: string,
  hash: string,
  ext: string,
  mime: string,
  width: number,
  height: number,
  size: number,
  path: string,
  url: string
};

export type Participant = {
  id: number,
  name: string,
  surname: string,
  published_at: string,
  created_at: string,
  updated_at: string
}

export type Place = {
  id: number,
  name: string,
  description: string,
  location: string,
  created_at: string,
  updated_at: string,
  pictures: Picture[]
}

export type Sport = {
  id: number,
  name: string,
  created_at: string,
  updated_at: string
}

export type Period = {
  id: number,
  name: string,
  published_at: string,
  created_at: string,
  updated_at: string
}
