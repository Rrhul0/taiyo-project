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
			<header>
				<h1>{title}</h1>
				<Conditional if={headerButton}>{headerButton}</Conditional>
			</header>
			<div>{children}</div>
		</section>
	);
};

export default PageLayout;
