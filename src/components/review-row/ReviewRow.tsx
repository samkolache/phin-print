import BlogCard from "../blog-card/BlogCard";
import ReviewPanel from "../review-panel/ReviewPanel";
import type { ReviewCard } from "../../data/review";
import styles from "./ReviewRow.module.css"

import { useState } from "react";

type Props = {
    reviews: ReviewCard[]
}

export default function ReviewRow({reviews}: Props) {

    const [activeCard, setActiveCard] = useState(0);
    const [panelIndex, setPanelIndex] = useState(0);
    const [isPanelOpen, setIsPanelOpen] = useState(false);

    const openPanel = (index: number) => {
        setPanelIndex(index);
        setIsPanelOpen(true);
    };

    return (
        <>
            <div className={styles.reviewRow} style={{ '--n': reviews.length } as React.CSSProperties}>
                {reviews.map((review, index) => (
                    <BlogCard 
                    key={review.id} 
                    review={review} 
                    isActive={index === activeCard} 
                    onActivate={() => setActiveCard(index)} 
                    onOpen={() => openPanel(index)}
                    index={index}
                    />
                ))}
            </div>

            <ReviewPanel
                reviews={reviews}
                index={panelIndex}
                isOpen={isPanelOpen}
                onNavigate={setPanelIndex}
                onClose={() => setIsPanelOpen(false)}
            />
        </>
    )
}
