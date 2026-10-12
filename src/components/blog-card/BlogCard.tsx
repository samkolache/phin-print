import styles from './BlogCard.module.css'
import Button from '../ui/button/Button';
import { ArrowRight } from 'lucide-react';

import type { ReviewCard } from '../../data/review'

type Props = {
    review: ReviewCard;
    isActive: boolean;
    onActivate: () => void;
    index: number;
}

export default function BlogCard({review, isActive, onActivate,index}: Props) {
    const dateFromReview = new Date(review.date);

    const fixedDate = dateFromReview.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC'
});


    return (
        <div 
        onMouseEnter={onActivate} 
        className={`${styles.card} ${isActive ? styles.open : ''}`}
        style={{ backgroundColor: `var(--card-${(index % 3) + 1})` }}
        >
            <div className={styles.inner}>

                 <div className={styles.cardContent}>
                <span className={styles.rating}>{review.rating}</span>

                <div className={styles.restInfo}>
                    <span className={styles.title}>{review.drink}</span>
                    <span className={styles.location}>{review.location}</span>
                </div>

                <p className={styles.caption}>{review.desc}</p>
                </div>

                <div className={styles.blogInfo}>
                    <div className={styles.blogInfoDeets}>
                        <span className={styles.date}>{fixedDate}</span>
                        <span className={styles.restName}>{review.restName}</span>
                    </div>

                    <Button variant='outline'>
                        See review
                        <ArrowRight />
                    </Button>
                </div>
                
            </div>
           


        </div>
    )
}
