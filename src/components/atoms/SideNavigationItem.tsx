import React from 'react';
import Link from 'next/link';
import { Icon } from '@phosphor-icons/react';

import { Conditional } from '@utils/commonUtils';

export type TNavigationOption = {
	title: string;
	href: string;
	icon: Icon;
};

const SideNavigationItem = ({
	option,
	isActive,
}: {
	option: TNavigationOption;
	isActive?: boolean;
}) => {
	return (
		<Link
			className={`px-5 py-3 flex items-center gap-4 rounded-xl text-lg font-semibold ${
				isActive ? 'bg-black text-white' : 'hover:bg-neutral-200'
			}`}
			href={option?.href}
		>
			<Conditional if={!!option?.icon}>
				<option.icon size={24} weight="bold" />
			</Conditional>
			{option?.title}
		</Link>
	);
};

export default SideNavigationItem;
