import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import TextInput from '@atoms/TextInput';
import Drawer from '@molecules/Drawer';

type FormInputs = {
	firstname: string;
	lastname: string;
	email: string;
	isActive: boolean;
};

const ContactModel = ({ onClose }: { onClose: () => void }) => {
	const { control, handleSubmit } = useForm<FormInputs>();

	const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data);
	return (
		<Drawer title="Contact" onClose={onClose}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Controller
					control={control}
					name="firstname"
					rules={{ required: 'First name is required' }}
					render={({ field, fieldState }) => (
						<TextInput
							{...field}
							label="First name"
							error={fieldState?.error?.message}
						/>
					)}
				/>
				<Controller
					control={control}
					name="lastname"
					rules={{ required: 'Last name is required' }}
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
							label="Email name"
							error={fieldState?.error?.message}
						/>
					)}
				/>
				<button type="submit">Save contact</button>
			</form>
		</Drawer>
	);
};

export default ContactModel;
