import styles from './FeaturedStory.module.css'
import SidePanel from '../ui/side-panel/SidePanel';
import { useState } from 'react';

import type { Story } from '../../data/story'

type Props = {
    story: Story;
    children: React.ReactNode;
}

export default function FeaturedStory({story, children}: Props) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className={styles.trigger} onClick={() => setIsOpen(true)}>
                {children}
            </div>

            <SidePanel isOpen={isOpen} onClose={() => setIsOpen(false)} label={story.title}>
                <div className={styles.hero}>
                    <img src={story.cover.src} alt={story.coverAlt} />
                </div>

                <span className={styles.meta}>{story.topic} · {story.readTime}</span>
                <h2 className={styles.title}>{story.title}</h2>

                <div className={styles.body}>
                    {story.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                    ))}
                </div>
            </SidePanel>
        </>
    )
}
