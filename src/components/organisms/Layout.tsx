import React, { ReactNode } from 'react';

import Sidebar from '@molecules/Sidebar';

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<main className="flex h-dvh items-stretch font-sans">
			<aside className="w-60 border-r">
				<Sidebar />
			</aside>
			<div className="grow">{children}</div>
		</main>
	);
};

export default Layout;
