'use client';

import { useHydrateAtoms } from 'jotai/utils';
import { Provider } from 'jotai';

import { store } from '@store';
import { appAtom } from '@store/atoms/app';

const JotaiProvider = ({
	children,
	serverAtomProps,
}: {
	serverAtomProps: AppContext;
	children: React.ReactNode;
}) => {
	const serverAppAtomState = { isMobile: serverAtomProps.isMobile };

	useHydrateAtoms([[appAtom, serverAppAtomState]], { store });

	return <Provider store={store}>{children}</Provider>;
};

export default JotaiProvider;
