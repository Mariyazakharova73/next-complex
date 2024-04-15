'use client';

import { getData } from '@/app/action';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import spinner from '../../../assets/spinner.svg';
import List from '../../../components/List/List';
import { Product } from '../../../types/types';
import s from './LoadMore.module.css';

let page = 2;

function LoadMore() {
	const { ref, inView } = useInView();
	const [data, setData] = useState<Product[]>([]);

	useEffect(() => {
		if (inView) {
			getData(page).then(res => {
				setData([...data, ...res.products]);
				page++;
			});
		}
	}, [data, inView]);

	return (
		<>
			<List data={data} />
			<section className={s.wrapper}>
				<div ref={ref}>
					<Image
						src={spinner}
						alt='Spinner.'
						width={100}
						height={100}
						className={s.image}
					/>
				</div>
			</section>
		</>
	);
}

export default LoadMore;
