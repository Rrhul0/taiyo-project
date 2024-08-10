import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useSetAtom } from 'jotai';

import TextInput from '@atoms/TextInput';
import Drawer from '@molecules/Drawer';
import { contactsLocalStoreAtom } from '@store/contacts';

const ContactModel = ({ onClose }: { onClose: () => void }) => {
	const { control, handleSubmit } = useForm<ContactType>();
	const setContacts = useSetAtom(contactsLocalStoreAtom);

	const onSubmit: SubmitHandler<ContactType> = (data) => {
		setContacts((prev) => [...prev, data]);
		onClose();
	};

	return (
		<Drawer title="Contact" onClose={onClose}>
			<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
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
