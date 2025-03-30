'use client'

import React, { useState } from 'react';
import styles from './styles.module.css';
import SearchBar from './SearchBar';
import FAQList from './FAQList';
import { faqData } from './faq-data';
import { useSearch } from './useSearch';
import { Container } from "@/components/Container";

export default function Faq() {
    const [searchQuery, setSearchQuery] = useState('');
    const filteredFAQs = useSearch(faqData, searchQuery);

return (
    <Container>
     <div className={styles.container}>
            <h1 className={styles.title}>Часто задаваемые вопросы</h1>

            <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
            />

            <FAQList items={filteredFAQs} />
        </div>
    </Container>
 );
}
