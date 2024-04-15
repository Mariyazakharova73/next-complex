import { getText, getTitle } from '@/helpers/helpers';
import { Review } from '@/types/types';
import { getReviews } from '../../app/action';
import s from './Reviews.module.css';

const Reviews = async () => {
	const reviewsData = await getReviews();

	return (
		<section className={s.reviews}>
			<ul className={s.reviewsList}>
				{reviewsData.map((r: Review, index: number) => {
					return (
						<li className={s.card} key={index}>
							<h2 className={s.text}>{getTitle(r.text)}</h2>
							<p>{getText(r.text)}</p>
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default Reviews;
