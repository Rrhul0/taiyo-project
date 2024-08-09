import { useEffect } from 'react';

function useOnClickOutside({ ref, onClickOutside, isActive, whiteList = [] }) {
	useEffect(() => {
		const listener = (event) => {
			const isClickWhiteListed = whiteList.some((el) => {
				let finalEl = el;
				if (typeof el === 'function') {
					finalEl = el();
				}
				return finalEl?.contains(event.target);
			});
			if (
				!isActive ||
				!ref.current ||
				ref.current.contains(event.target) ||
				isClickWhiteListed
			) {
				return;
			}
			onClickOutside(event);
		};
		document.addEventListener('mousedown', listener);
		document.addEventListener('touchstart', listener);
		return () => {
			document.removeEventListener('mousedown', listener);
			document.removeEventListener('touchstart', listener);
		};
	}, [ref, onClickOutside, isActive]);
}

export default useOnClickOutside;
