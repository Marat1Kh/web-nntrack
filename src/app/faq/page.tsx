'use client';

import React, { useState } from 'react';
import styles from './styles.module.css';
import SearchBar from './SearchBar';
import FAQList from './FAQList';
import { faqData } from './faq-data';
import { useSearch } from './useSearch';

export default function FAQPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const filteredFAQs = useSearch(faqData, searchQuery);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Часто задаваемые вопросы</h1>

            <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
            />

            <FAQList items={filteredFAQs} />
        </div>
    );
}
