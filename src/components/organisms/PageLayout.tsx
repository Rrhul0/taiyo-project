import React, { ReactNode } from 'react';

import { Conditional } from '@utils/commonUtils';

const PageLayout = ({
	children,
	title,
	headerButton,
}: {
	children: ReactNode;
	title: string;
	headerButton?: ReactNode;
}) => {
	return (
		<section>
			<header className="flex items-center justify-between px-6 py-4 border-b">
				<h1 className="font-semibold text-3xl">{title}</h1>
				<Conditional if={headerButton}>{headerButton}</Conditional>
			</header>
			<div>{children}</div>
		</section>
	);
};

export default PageLayout;
