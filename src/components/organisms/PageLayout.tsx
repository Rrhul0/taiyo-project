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
		<section className="flex flex-col">
			<header className="flex items-center justify-between h-20 px-6 shadow-xl rounded-lg bg-neutral-50 relative z-10">
				<h1 className="font-semibold text-3xl">{title}</h1>
				<Conditional if={headerButton}>{headerButton}</Conditional>
			</header>
			<div className="overflow-auto h-[calc(100dvh-110px)]">{children}</div>
		</section>
	);
};

export default PageLayout;
