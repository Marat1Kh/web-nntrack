import React from 'react';
import styles from './styles.module.css';
import FAQItem from './FAQItem';
import { FAQItem as FAQItemType } from './types';

interface FAQListProps {
    items: FAQItemType[];
}

export default function FAQList({ items }: FAQListProps) {
    return (
        <div className={styles.faqContainer}>
            {/* Divider trên cùng */}
            <div className={styles.divider}></div>

            <div className={styles.faqList}>
                {items.map((item, index) => (
                    <FAQItem key={item.id} item={item} />
                ))}
            </div>

            {/* Divider dưới cùng */}
            {/*<div className={styles.divider}></div>*/}
        </div>
    );
}