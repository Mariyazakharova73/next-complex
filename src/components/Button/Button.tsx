import cn from 'classnames';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import s from './Button.module.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
}

const Button = (props: PropsWithChildren<ButtonProps>) => {
	const { className, children, ...otherProps } = props;
	return (
		<button className={cn(s.button, className)} {...otherProps}>
			{children}
		</button>
	);
};

export default Button;
