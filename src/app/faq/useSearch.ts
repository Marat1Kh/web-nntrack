import { useMemo } from 'react';
import { FAQItem } from './types';

export function useSearch(items: FAQItem[], searchQuery: string) {
    const filteredItems = useMemo(() => {
        if (!searchQuery.trim()) return items;

        const lowerCaseQuery = searchQuery.toLowerCase();
        return items.filter(item =>
            item.question.toLowerCase().includes(lowerCaseQuery) ||
            item.answer.toLowerCase().includes(lowerCaseQuery)
        );
    }, [items, searchQuery]);

    return filteredItems;
}