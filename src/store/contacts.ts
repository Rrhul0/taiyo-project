import { atomWithStorage } from 'jotai/utils';

export const contactsLocalStoreAtom = atomWithStorage<ContactType[]>(
	'contacts',
	[]
);
