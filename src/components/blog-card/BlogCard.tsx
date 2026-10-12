import styles from './BlogCard.module.css'
import Button from '../ui/button/Button';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

import type { ReviewCard } from '../../data/review'

type Props = {
    review: ReviewCard;
    isActive: boolean;
    onActivate: () => void;
    onOpen: () => void;
    index: number;
}

export default function BlogCard({review, isActive, onActivate, onOpen, index}: Props) {
    const [isHovered, setIsHovered] = useState(false);

    const dateFromReview = new Date(review.date);

    const fixedDate = dateFromReview.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC'
});


    return (
        <div 
        onMouseEnter={() => { onActivate(); setIsHovered(true); }}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onOpen}
        className={`${styles.card} ${isActive ? styles.open : ''}`}
        style={{ backgroundColor: `var(--card-${(index % 3) + 1})`, '--i': index } as React.CSSProperties}
        >
            <div className={styles.inner}>

                 <div className={styles.cardContent}>
                <span className={styles.rating}>{review.rating}</span>

                <div className={styles.restInfo}>
                    <span className={styles.title}>{review.restName}</span>
                    <span className={styles.location}>{review.drink}</span>
                </div>

                <p className={styles.caption}>{review.desc}</p>
                </div>

                <div className={styles.blogInfo}>
                    <div className={styles.blogInfoDeets}>
                        <span className={styles.date}>{fixedDate}</span>
                        <span className={styles.restName}>{review.location}</span>
                    </div>

                    <Button variant='outline' pour={isHovered}>
                        See review
                        <ArrowRight />
                    </Button>
                </div>
                
            </div>
           


        </div>
    )
}
