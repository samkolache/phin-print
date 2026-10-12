import { useEffect, useRef, useState } from "react";
import styles from "./Button.module.css"

type Props = {
    variant?: "primary" | "outline" | "text" | "icon";
    children: React.ReactNode;
}

// Must match the fill's height duration in Button.module.css
const POUR_MS = 1100;

const wavePath = "M0 6 Q25 0 50 6 T100 6 T150 6 T200 6 V12 H0 Z";
const steamWisps = [
    { x: "28%", delay: "0s" },
    { x: "48%", delay: "0.55s" },
    { x: "68%", delay: "1.1s" },
];

export default function Button({ variant = "outline", children }: Props) {
    const isOutline = variant === "outline";

    const [isFull, setIsFull] = useState(false);
    const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

    const start = () => {
        clearTimeout(timer.current);
        timer.current = setTimeout(() => setIsFull(true), POUR_MS);
    };
    const stop = () => {
        clearTimeout(timer.current);
        setIsFull(false);
    };

    useEffect(() => () => clearTimeout(timer.current), []);

    return (
        <button
            className={`${styles.button} ${styles[variant]}`}
            data-full={isFull ? "" : undefined}
            onMouseEnter={isOutline ? start : undefined}
            onMouseLeave={isOutline ? stop : undefined}
            onFocus={isOutline ? start : undefined}
            onBlur={isOutline ? stop : undefined}
        >
            {isOutline && (
                <span className={styles.clip} aria-hidden="true">
                    <span className={styles.fill}>
                        <svg className={`${styles.wave} ${styles.waveBack}`} viewBox="0 0 200 12" preserveAspectRatio="none">
                            <path d={wavePath} />
                        </svg>
                        <svg className={`${styles.wave} ${styles.waveFront}`} viewBox="0 0 200 12" preserveAspectRatio="none">
                            <path d={wavePath} />
                        </svg>
                    </span>
                </span>
            )}
            {isOutline && steamWisps.map((wisp) => (
                <span
                    key={wisp.x}
                    className={styles.steam}
                    style={{ "--x": wisp.x, "--d": wisp.delay } as React.CSSProperties}
                    aria-hidden="true"
                />
            ))}
            <span className={styles.label}>{children}</span>
        </button>
    )
}
