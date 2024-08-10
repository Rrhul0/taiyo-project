import React, { ReactNode } from 'react';

import Sidebar from '@molecules/Sidebar';

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<main className="flex h-dvh items-stretch font-sans gap-4 p-4 overflow-hidden">
			<aside className="shadow-xl rounded-lg bg-neutral-50">
				<Sidebar />
			</aside>
			<div className="grow">{children}</div>
		</main>
	);
};

export default Layout;
