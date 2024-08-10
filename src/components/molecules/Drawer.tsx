import { ReactNode, useEffect, useMemo, useRef } from 'react';
import ReactDOM from 'react-dom';
import { X } from '@phosphor-icons/react';

import useOnClickOutside from '@hooks/useOnOutsideClick';
import { Conditional } from '@utils/commonUtils';

type TDrawerProps = {
	anchorElement?: Element;
	title?: string;
	onClose?: () => void;
	children: ReactNode;
	type: 'dropmenu' | 'model';
	width?: string;
};

const Drawer = ({
	anchorElement = null,
	title,
	onClose,
	children,
	type,
	width,
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

	const drawerPosition = useMemo(() => {
		if (!anchorElement) return {};

		const anchorEleDOMRangeRect = anchorElement?.getBoundingClientRect();
		return {
			top: anchorEleDOMRangeRect?.top + anchorEleDOMRangeRect?.height + 2,
			left: anchorEleDOMRangeRect?.left - 2 * anchorEleDOMRangeRect?.width,
			width: width ?? anchorEleDOMRangeRect?.width,
			zIndex: 1000,
		};
	}, [anchorElement]);

	return ReactDOM.createPortal(
		<div
			data-drawer={true}
			style={drawerPosition}
			className={`grid fixed top-0  z-50 justify-center items-start ${
				type === 'model' ? ' left-0 h-dvh w-dvw pt-20 bg-slate-200' : ''
			}`}
		>
			<Conditional if={!isAnchored}>
				<div className="absolute top-0 left-0 w-full h-full z-[1]" />
			</Conditional>
			<div
				ref={drawerWrapperRef}
				className={`z-[1] relative h-auto rounded-lg overflow-hidden bg-white ${
					type === 'model' ? 'min-h-24 min-w-[28rem]' : ''
				}`}
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
				<div
					className={`h-full text-start grow overflow-y-auto ${
						type === 'model' ? 'px-6 py-6 ' : ''
					}`}
				>
					{children}
				</div>
			</div>
		</div>,
		document.body
	);
};

export default Drawer;
