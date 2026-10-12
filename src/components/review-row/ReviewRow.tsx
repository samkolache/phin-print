import BlogCard from "../blog-card/BlogCard";
import type { ReviewCard } from "../../data/review";
import styles from "./ReviewRow.module.css"

import { useState } from "react";

type Props = {
    reviews: ReviewCard[]
}

export default function ReviewRow({reviews}: Props) {

    const [activeCard, setActiveCard] = useState(0);
    return (
        <div className={styles.reviewRow} style={{ '--n': reviews.length } as React.CSSProperties}>
            {reviews.map((review, index) => (
                <BlogCard 
                key={review.id} 
                review={review} 
                isActive={index === activeCard} 
                onActivate={() => setActiveCard(index)} 
                index={index}
                />
            ))}
        </div>
    )
}