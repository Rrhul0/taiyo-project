import React from 'react';
import { useAtomValue } from 'jotai';

import PageLayout from '@organisms/PageLayout';
import ContactAddButton from '@organisms/ContactAddButton';
import { contactsLocalStoreAtom } from '@store/contacts';

const ContactsPage = () => {
	const contacts = useAtomValue(contactsLocalStoreAtom);
	return (
		<PageLayout title="Contacts" headerButton={<ContactAddButton />}>
			{contacts.map((contact) => (
				<div key={contact.firstName}>{contact.firstName}</div>
			))}
		</PageLayout>
	);
};

export default ContactsPage;
