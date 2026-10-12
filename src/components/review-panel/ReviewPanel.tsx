import styles from './ReviewPanel.module.css'
import Button from '../ui/button/Button';
import SidePanel from '../ui/side-panel/SidePanel';
import { ArrowLeft, ArrowRight, Image as ImageIcon } from 'lucide-react';
import { useEffect } from 'react';

import type { ReviewCard } from '../../data/review'

type Props = {
    reviews: ReviewCard[];
    index: number;
    isOpen: boolean;
    onNavigate: (index: number) => void;
    onClose: () => void;
}

const scoreRows = [
    { key: 'aroma', label: 'Aroma' },
    { key: 'body', label: 'Body' },
    { key: 'sweetness', label: 'Sweetness' },
    { key: 'balance', label: 'Balance' },
] as const;

const pad = (n: number) => String(n).padStart(2, '0');

export default function ReviewPanel({reviews, index, isOpen, onNavigate, onClose}: Props) {
    const total = reviews.length;
    const prevIndex = (index - 1 + total) % total;
    const nextIndex = (index + 1) % total;

    useEffect(() => {
        if (!isOpen) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') onNavigate(prevIndex);
            if (e.key === 'ArrowRight') onNavigate(nextIndex);
        };

        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [isOpen, prevIndex, nextIndex, onNavigate]);

    const review = reviews[index];
    if (!review) return null;

    const next = reviews[nextIndex];

    const fixedDate = new Date(review.date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        timeZone: 'UTC'
    });

    return (
        <SidePanel
            isOpen={isOpen}
            onClose={onClose}
            label={`${review.drink} review`}
            scrollKey={index}
            controls={
                <>
                    <Button variant='icon' aria-label='Previous' onClick={() => onNavigate(prevIndex)}>
                        <ArrowLeft />
                    </Button>
                    <Button variant='icon' aria-label='Next' onClick={() => onNavigate(nextIndex)}>
                        <ArrowRight />
                    </Button>

                    <span className={styles.counter}>{pad(index + 1)} / {pad(total)}</span>
                </>
            }
        >
            <div className={styles.hero}>
                {review.cover ? (
                    <img src={review.cover.src} alt={review.coverAlt ?? ''} />
                ) : (
                    <div className={styles.heroPlaceholder}>
                        <ImageIcon />
                        <span>Photo — the cup</span>
                    </div>
                )}
            </div>

            <div className={styles.header}>
                <div>
                    <span className={styles.date}>{fixedDate}</span>
                    <h2 className={styles.title}>{review.restName}</h2>
                    <span className={styles.location}>{review.drink}, {review.location}</span>
                </div>

                <div className={styles.score}>
                    <span className={styles.scoreValue}>{review.rating.toFixed(1)}</span>
                    <span className={styles.scoreLabel}>out of 10</span>
                </div>
            </div>

            <dl className={styles.specs}>
                <div className={styles.spec}>
                    <dt>Ordered</dt>
                    <dd>{review.ordered}</dd>
                </div>
                <div className={styles.spec}>
                    <dt>Price</dt>
                    <dd>{review.price}</dd>
                </div>
            </dl>

            <div className={styles.details}>
                <div className={styles.breakdown}>
                    <span className={styles.sectionLabel}>Score breakdown</span>
                    {scoreRows.map(({ key, label }) => (
                        <div className={styles.scoreRow} key={key}>
                            <span>{label}</span>
                            <span className={styles.track}>
                                <span className={styles.fill} style={{ width: `${review.scores[key] * 10}%` }} />
                            </span>
                            <span className={styles.scoreRowValue}>{review.scores[key].toFixed(1)}</span>
                        </div>
                    ))}
                </div>

                <div className={styles.notes}>
                    <span className={styles.sectionLabel}>Tasting notes</span>
                    <ul className={styles.tags}>
                        {review.notes.map((note) => (
                            <li className={styles.tag} key={note}>{note}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className={styles.body}>
                {review.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                ))}
            </div>

            <div className={styles.verdict}>
                <div className={styles.verdictTop}>
                    <span>Verdict</span>
                    <span>Would go back: {review.wouldReturn ? 'Yes' : 'No'}</span>
                </div>
                <p className={styles.verdictText}>{review.verdict}</p>
            </div>

            <button type="button" className={styles.next} onClick={() => onNavigate(nextIndex)}>
                <span>
                    <span className={styles.nextLabel}>Next review</span>
                    <span className={styles.nextTitle}>{next.drink} — {next.restName}</span>
                </span>
                <ArrowRight />
            </button>
        </SidePanel>
    )
}
