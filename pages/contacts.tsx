import React from 'react';
import { useAtomValue } from 'jotai';

import PageLayout from '@organisms/PageLayout';
import ContactAddButton from '@organisms/ContactAddButton';
import { contactsLocalStoreAtom } from '@store/contacts';
import ContactCard from '@molecules/ContactCard';

const ContactsPage = () => {
	const contacts = useAtomValue(contactsLocalStoreAtom);

	return (
		<PageLayout title="Contacts" headerButton={<ContactAddButton />}>
			<div className="flex flex-wrap gap-4 my-4 *:md:basis-[40%] *:lg:basis-[30%] *:grow *:shrink items-start h-fit">
				{contacts.map((contact, index) => (
					<ContactCard contact={contact} key={contact.firstName + index} />
				))}
			</div>
		</PageLayout>
	);
};

export default ContactsPage;
