import getWikiResults from '@/lib/getWikiResults'
import { title } from 'process'
import React from 'react'
import Item from './components/item'

type Props = {
    params: {
        searchTerm: string
    }
}

export async function generateMetadata({ params: { searchTerm } }: Props) {
    const wikiData = getWikiResults(searchTerm)
    const data = await wikiData
    const displayTerm = searchTerm.replaceAll("%20", '')

    if (!data?.query?.page) {
        return {
            title: `${displayTerm} not found`
        }
    }

    return {
        title: displayTerm,
        description: `Search results for ${displayTerm}`
    }
}

export default async function SearchResults({ params: { searchTerm } }: Props) {
    const wikiData = getWikiResults(searchTerm)
    const data = await wikiData
    const results: Result[] | undefined = data?.query?.pages

    const content = (
        <main>
            {results ? Object.values(results).map(result => {
                return <Item key={result.pageid} result={result} />
            }) : <h2>{`${searchTerm} not found`}</h2>}
        </main>
    )
    return content;
}