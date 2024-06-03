import type { Adventure } from '$lib/types';
import { generateId } from '$lib/utils/idGenerator';
import { newAdventure } from '$lib/data/generators/adventure';
import startsWith from 'lodash/startsWith';
import { saveNewAdventure } from './adventureCreationService';

const DRAFT_PREFIX = 'draft-';

export const getAllDrafts = (): Adventure[] => {
	const items = { ...localStorage };

	return Object.keys(items)
		.filter((key) => startsWith(key, DRAFT_PREFIX))
		.map((key) => JSON.parse(items[key]));
};

export const createNewDraft = (): string => {
	const newAdventureId = generateId();
	localStorage.setItem(
		draftKeyFromId(newAdventureId),
		JSON.stringify(newAdventure(newAdventureId))
	);

	return newAdventureId;
};

export const saveDraft = (adventure: Adventure) => {
	localStorage.setItem(draftKeyFromId(adventure.id), JSON.stringify(adventure));
};

export const getDraft = (contentId: string): Adventure | null => {
	const draftData = localStorage.getItem(draftKeyFromId(contentId));
	if (!draftData) return null;

	return JSON.parse(draftData);
};

export const clearDraft = (contentId: string): void => {
	localStorage.removeItem(draftKeyFromId(contentId));
	window.dispatchEvent(new Event('storage'));
};

const draftKeyFromId = (contentId: string) => `${DRAFT_PREFIX}${contentId}`;

export const publishContent = async (adventure: Adventure) => {
	return saveNewAdventure(adventure);
};
