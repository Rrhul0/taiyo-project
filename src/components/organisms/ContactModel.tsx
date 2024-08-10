import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useSetAtom } from 'jotai';

import TextInput from '@atoms/TextInput';
import Drawer from '@molecules/Drawer';
import { contactsLocalStoreAtom } from '@store/contacts';

const ContactModel = ({
	onClose,
	contact,
}: {
	onClose: () => void;
	contact?: ContactType;
}) => {
	const { control, handleSubmit } = useForm<ContactType>({
		defaultValues: contact,
	});
	const setContacts = useSetAtom(contactsLocalStoreAtom);

	const onSubmit: SubmitHandler<ContactType> = (data) => {
		if (!contact) setContacts((prev) => [...prev, data]);
		else
			setContacts((prev) => {
				return prev.map((prevContact) => {
					if (JSON.stringify(prevContact) !== JSON.stringify(contact))
						return prevContact;
					else return data;
				});
			});
		onClose();
	};

	return (
		<Drawer title="Contact" onClose={onClose} type="model">
			<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
				<div className="flex gap-6">
					<Controller
						control={control}
						name="firstName"
						rules={{ required: 'First name is required' }}
						render={({ field, fieldState }) => (
							<TextInput
								{...field}
								required
								label="First name"
								error={fieldState?.error?.message}
							/>
						)}
					/>
					<Controller
						control={control}
						name="lastName"
						render={({ field, fieldState }) => (
							<TextInput
								{...field}
								label="Last name"
								error={fieldState?.error?.message}
							/>
						)}
					/>
				</div>
				<Controller
					control={control}
					name="email"
					rules={{ required: 'Email is required' }}
					render={({ field, fieldState }) => (
						<TextInput
							{...field}
							required
							label="Email"
							error={fieldState?.error?.message}
						/>
					)}
				/>
				<Controller
					control={control}
					name="phone"
					render={({ field, fieldState }) => (
						<TextInput
							{...field}
							label="Phone number"
							error={fieldState?.error?.message}
						/>
					)}
				/>
				<button
					type="submit"
					className="bg-green-700 text-white py-3 px-6 rounded-2xl text-lg"
				>
					Save contact
				</button>
			</form>
		</Drawer>
	);
};

export default ContactModel;
