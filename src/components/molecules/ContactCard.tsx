import { DotsThree, EnvelopeSimple, Phone } from '@phosphor-icons/react';
import Avatar from 'boring-avatars';
import React, { useRef, useState } from 'react';

import { Conditional } from '@utils/commonUtils';
import ContactModel from '@organisms/ContactModel';

import Drawer from './Drawer';

const ContactCard = ({ contact }: { contact: ContactType }) => {
	const capitalize = (str: string) =>
		str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
	const fullName = `${capitalize(contact.firstName)}${
		contact?.lastName ? ' ' + capitalize(contact?.lastName) : ''
	}`;
	const [isMenuOpened, setMenuOpened] = useState(false);
	const buttonRef = useRef<HTMLButtonElement>(null);

	const [isEditOpened, setEditOpened] = useState(false);

	return (
		<div className="w-72 border rounded-xl overflow-hidden shadow-md">
			<div className="flex items-center justify-between border-b p-2 bg-neutral-50">
				<div className="flex items-center gap-2">
					<div className="shadow-lg rounded-full">
						<Avatar size="40px" name={contact.firstName} variant="bauhaus" />
					</div>
					<span className="text-ellipsis">{fullName}</span>
				</div>
				<button
					type="button"
					title="manage contact"
					className="border p-1.5 rounded-lg shadow-sm"
					onClick={() => setMenuOpened(true)}
					ref={buttonRef}
				>
					<DotsThree />
				</button>
				<Conditional if={isMenuOpened}>
					<Drawer
						anchorElement={buttonRef?.current}
						onClose={() => setMenuOpened(false)}
						type="dropmenu"
						width="fit-content"
					>
						<div className="flex flex-col gap-2 rounded-lg p-2 w-28 border overflow-hidden">
							<button
								type="button"
								title="manage contact"
								className="border p-1.5 rounded-lg shadow-sm"
								onClick={() => {
									setMenuOpened(false);
									setEditOpened(true);
								}}
							>
								Edit
							</button>
							<button
								type="button"
								title="manage contact"
								className="border p-1.5 rounded-lg shadow-sm text-red-500 border-red-500"
								onClick={() => setMenuOpened(true)}
							>
								Delete
							</button>
						</div>
					</Drawer>
				</Conditional>
				<Conditional if={isEditOpened}>
					<ContactModel
						onClose={() => setEditOpened(false)}
						contact={contact}
					/>
				</Conditional>
			</div>
			<div className="p-2 flex flex-col gap-1">
				<Conditional if={contact?.email}>
					<div className="flex gap-2 items-center text-neutral-600 text-sm">
						<EnvelopeSimple weight="light" size={20} />
						<a href={`mailto:${contact?.email}`}>{contact?.email}</a>
					</div>
				</Conditional>
				<Conditional if={contact?.phone}>
					<div className="flex gap-2 items-center text-neutral-600 text-sm">
						<Phone weight="light" size={20} />
						<span>{contact?.phone}</span>
					</div>
				</Conditional>
			</div>
		</div>
	);
};

export default ContactCard;
