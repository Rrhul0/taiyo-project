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
			{contacts?.length > 0 ? (
				<div className="flex flex-wrap gap-4 my-4 *:md:basis-[40%] *:lg:basis-[30%] *:grow *:shrink h-fit">
					{contacts.map((contact, index) => (
						<ContactCard contact={contact} key={contact.firstName + index} />
					))}
				</div>
			) : (
				<div className="h-full w-full grid place-items-center">
					<div className="text-center">
						<h2 className="font-bold text-3xl">No contacts found</h2>
						<p className="text-3xl text-neutral-600">
							Please add some contacts
						</p>
					</div>
				</div>
			)}
		</PageLayout>
	);
};

export default ContactsPage;
