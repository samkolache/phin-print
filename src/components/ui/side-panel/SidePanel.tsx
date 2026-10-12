import styles from './SidePanel.module.css'
import Button from '../button/Button';
import { X } from 'lucide-react';
import { useEffect, useRef } from 'react';

type Props = {
    isOpen: boolean;
    onClose: () => void;
    label: string;
    // Sits in the top bar, left of the close button
    controls?: React.ReactNode;
    // Scroll resets to the top whenever this changes
    scrollKey?: string | number;
    children: React.ReactNode;
}

export default function SidePanel({isOpen, onClose, label, controls, scrollKey, children}: Props) {
    const panelRef = useRef<HTMLElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Lock page scroll and move focus into the panel, then hand both back on close
    useEffect(() => {
        if (!isOpen) return;

        const opener = document.activeElement as HTMLElement | null;
        const bodyOverflow = document.body.style.overflow;

        document.body.style.overflow = 'hidden';
        panelRef.current?.focus();

        return () => {
            document.body.style.overflow = bodyOverflow;
            opener?.focus();
        };
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [isOpen, onClose]);

    useEffect(() => {
        if (scrollRef.current) scrollRef.current.scrollTop = 0;
    }, [scrollKey, isOpen]);

    return (
        <>
            <div
                className={`${styles.overlay} ${isOpen ? styles.open : ''}`}
                onClick={onClose}
                aria-hidden="true"
            />

            <aside
                ref={panelRef}
                className={`${styles.panel} ${isOpen ? styles.open : ''}`}
                role="dialog"
                aria-modal="true"
                aria-label={label}
                tabIndex={-1}
                inert={!isOpen}
            >
                <div className={styles.topBar}>
                    {controls}

                    <span className={styles.close}>
                        <Button variant='icon' aria-label='Close' onClick={onClose}>
                            <X />
                        </Button>
                    </span>
                </div>

                <div className={styles.scroll} ref={scrollRef}>
                    {children}
                </div>
            </aside>
        </>
    )
}
