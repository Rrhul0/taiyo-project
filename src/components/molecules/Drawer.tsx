import { ReactNode, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

import useOnClickOutside from '@hooks/useOnOutsideClick';
import { Conditional } from '@utils/commonUtils';
import { X } from '@phosphor-icons/react';

type TDrawerProps = {
	anchorElement?: Element;
	title: string;
	onClose?: () => void;
	children: ReactNode;
};

const Drawer = ({
	anchorElement = null,
	title,
	onClose,
	children,
}: TDrawerProps) => {
	const drawerWrapperRef = useRef<HTMLDivElement>(null);
	const isAnchored = !!anchorElement;

	const handleClose = () => {
		onClose?.();
	};

	useOnClickOutside({
		ref: drawerWrapperRef,
		onClickOutside: handleClose,
		isActive: true,
	});

	useEffect(() => {
		if (isAnchored) return;
		document.body.classList.add('overflow-hidden');

		return () => {
			document.body.classList.remove('overflow-hidden');
		};
	}, [isAnchored]);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				onClose?.();
			}
		};
		document.addEventListener('keydown', handleKeyDown);
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [onClose]);

	return ReactDOM.createPortal(
		<div
			data-drawer={true}
			className="grid bg-slate-200 fixed top-0 left-0 h-dvh w-dvw z-50 pt-20 justify-center items-start"
		>
			<Conditional if={!isAnchored}>
				<div className="absolute top-0 left-0 w-full h-full z-[1]" />
			</Conditional>
			<div
				ref={drawerWrapperRef}
				className="z-[1] relative h-auto rounded-lg min-w-[28rem] min-h-24 overflow-hidden bg-white"
			>
				<Conditional if={!isAnchored}>
					<h3 className="pt-6 pb-2 px-6 font-semibold text-2xl">{title}</h3>
					<button
						title="Close"
						onClick={onClose}
						type="button"
						className="absolute top-3 right-3 p-2 text-neutral-700 hover:bg-neutral-100 rounded-full"
					>
						<X size={16} weight="bold" />
					</button>
				</Conditional>
				<div className="h-full text-start grow overflow-y-auto px-6 py-6">
					{children}
				</div>
			</div>
		</div>,
		document.body
	);
};

export default Drawer;
