import { useAppSelector } from '@/lib/hooks';
import Image from 'next/image';
import fail from '../../assets/fail.png';
import spinner from '../../assets/spinner.svg';
import success from '../../assets/success.png';
import {
	getIsErrorOrder,
	getIsLoadingOrder,
	getOrderStatus,
} from '../../lib/features/selectors';
import Modal from '../Modal/Modal';
import s from './CartModal.module.css';

export interface CartModalProps {
	isOpenModal: boolean;
	closeModal: () => void;
}

const CartModal = ({ isOpenModal, closeModal }: CartModalProps) => {
	const isLoadingOrder = useAppSelector(getIsLoadingOrder);
	const errorOrder = useAppSelector(getIsErrorOrder);
	const status = useAppSelector(getOrderStatus);

	let content;
	if (isLoadingOrder) {
		content = <Image src={spinner} alt='Spinner.' width={100} height={100} />;
	}

	if (errorOrder || status === 0) {
		content = (
			<>
				<Image
					className={s.img}
					src={fail}
					alt='Ошибка заказа.'
					width={100}
					height={100}
				/>
				<p className={s.text}>Ошибка!</p>
			</>
		);
	}

	if (status === 1) {
		content = (
			<>
				<Image
					className={s.img}
					src={success}
					alt='Заказ выполнен.'
					width={100}
					height={100}
				/>
				<p className={s.text}>Заказ выполнен успешно!</p>
			</>
		);
	}

	return (
		<Modal isOpen={isOpenModal} onClose={closeModal}>
			<div className={s.modal}>{content}</div>
		</Modal>
	);
};

export default CartModal;
