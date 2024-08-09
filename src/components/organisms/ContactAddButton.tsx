import React, { useState } from 'react';

import { Conditional } from '@utils/commonUtils';

import ContactModel from './ContactModel';

const ContactAddButton = () => {
	const [isModelOpened, setModelOpen] = useState(false);
	return (
		<>
			<button type="button" onClick={() => setModelOpen(true)}>
				Add contact
			</button>
			<Conditional if={isModelOpened}>
				<ContactModel onClose={() => setModelOpen(false)} />
			</Conditional>
		</>
	);
};

export default ContactAddButton;
