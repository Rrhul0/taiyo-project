'use client';

import { QueryClientProvider as TanStackQueryClientProvider } from '@tanstack/react-query';

import queryClient from '@const/queryClient';

const QueryClientProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<TanStackQueryClientProvider client={queryClient}>
			{children}
		</TanStackQueryClientProvider>
	);
};

export default QueryClientProvider;
