import React, { ComponentProps, forwardRef, Ref } from 'react';

import { Conditional } from '@utils/commonUtils';

export default forwardRef(function TextInput(
	{
		label,
		error,
		...props
	}: ComponentProps<'input'> & { label: string; error?: string },
	ref: Ref<HTMLInputElement>
) {
	return (
		<div>
			<label>
				<span>{label}</span>
				<input {...props} ref={ref} />
			</label>
			<Conditional if={error}>
				<span>{error}</span>
			</Conditional>
		</div>
	);
});
