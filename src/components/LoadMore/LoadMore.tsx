'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import spinner from '../../assets/spinner.svg';
import { getData } from '../../app/action';
import { Product } from '../../types/types';
import List from '../List/List';
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
					<Image src={spinner} alt='Spinner.' width={100} height={100} />
				</div>
			</section>
		</>
	);
}

export default LoadMore;
