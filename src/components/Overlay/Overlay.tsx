import cn from 'classnames';
import { memo } from 'react';
import s from './Overlay.module.css';

export interface OverlayProps {
	className?: string;
	onClick?: () => void;
}

const Overlay = (props: OverlayProps) => {
	const { className, onClick } = props;

	return <div className={cn(s.Overlay, className)} onClick={onClick}></div>;
};

export default memo(Overlay);
