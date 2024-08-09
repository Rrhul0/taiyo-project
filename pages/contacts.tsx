import React from 'react';

import PageLayout from '@organisms/PageLayout';
import ContactAddButton from '@organisms/ContactAddButton';

const index = () => {
	return (
		<PageLayout title="Contacts" headerButton={<ContactAddButton />}>
			Contacts
		</PageLayout>
	);
};

export default index;
