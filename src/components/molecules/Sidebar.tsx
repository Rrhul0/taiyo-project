import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';

import { SIDEBAR_OPTIONS } from '@const/common';
import { Conditional } from '@utils/commonUtils';

const Sidebar = () => {
	const { asPath } = useRouter();

	return (
		<nav className="flex flex-col px-2 py-6 gap-1">
			{SIDEBAR_OPTIONS.map((option, index) => (
				<Link
					className={`px-5 py-3 flex items-center gap-4 rounded-xl text-lg font-semibold ${
						asPath.includes(option?.href)
							? 'bg-black text-white'
							: 'hover:bg-neutral-200'
					}`}
					href={option?.href}
					key={option?.title + index}
				>
					<Conditional if={!!option?.icon}>
						<option.icon size={24} weight="bold" />
					</Conditional>
					{option?.title}
				</Link>
			))}
		</nav>
	);
};

export default Sidebar;
