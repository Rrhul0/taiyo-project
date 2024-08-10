import React, { ComponentProps, forwardRef, Ref } from 'react';
import { WarningOctagon } from '@phosphor-icons/react';

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
		<div className="relative h-fit w-full">
			<label className="input-label w-full">
				<input {...props} ref={ref} placeholder=" " />
				<span className={`label-text`}>
					{label}
					<span className="text-red-500 font-bold">
						{props?.required && '*'}
					</span>
				</span>
			</label>
			<Conditional if={error}>
				<div className="text-red-600 font-semibold flex gap-1 items-center pt-2">
					<WarningOctagon weight="bold" />
					<span>{error}</span>
				</div>
			</Conditional>
		</div>
	);
});
