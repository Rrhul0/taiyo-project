import { AddressBook, PresentationChart } from '@phosphor-icons/react';

import { TNavigationOption } from '@atoms/SideNavigationItem';

export const SIDEBAR_OPTIONS: TNavigationOption[] = [
	{
		title: 'Dashboard',
		href: '/dashboard',
		icon: PresentationChart,
	},
	{
		title: 'Contacts',
		href: '/contacts',
		icon: AddressBook,
	},
];
