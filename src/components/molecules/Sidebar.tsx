import React from 'react';
import { useRouter } from 'next/router';

import { SIDEBAR_OPTIONS } from '@const/common';
import SideNavigationItem from '@atoms/SideNavigationItem';

const Sidebar = () => {
	const { asPath } = useRouter();

	return (
		<nav className="flex flex-col px-2 py-6 gap-1 w-60">
			{SIDEBAR_OPTIONS.map((option, index) => (
				<SideNavigationItem
					option={option}
					isActive={asPath.includes(option?.href)}
					key={option?.title + index}
				/>
			))}
		</nav>
	);
};

export default Sidebar;
