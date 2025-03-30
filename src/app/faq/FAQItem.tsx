import React, { useState } from 'react';
import styles from './styles.module.css';
import { FAQItem as FAQItemType } from './types';

interface FAQItemProps {
    item: FAQItemType;
}

export default function FAQItem({ item }: FAQItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.faqItem}>
            <div
                className={styles.faqQuestion}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={styles.bulletPoint}>•</span>
                <h3>{item.question}</h3>
                <span className={styles.arrow}>
          {isOpen ? '▲' : '▼'}
        </span>
            </div>

            {isOpen && (
                <div className={styles.faqAnswer}>
                    {item.answer}
                </div>
            )}

            {/* Divider sau mỗi câu hỏi */}
            <div className={styles.divider}></div>
        </div>
    );
}