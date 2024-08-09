'use client';

import { Provider } from 'jotai';

import { store } from '@store';

const JotaiProvider = ({ children }: { children: React.ReactNode }) => {
	return <Provider store={store}>{children}</Provider>;
};

export default JotaiProvider;
