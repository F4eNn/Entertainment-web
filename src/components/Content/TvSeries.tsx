'use client'
import { useContext } from 'react'
import { MoviesContext } from '../store/MoviesContext'
import { GridItem } from '../UI/GridItem'
import { GridCard } from '../UI/GridCard'
import { Browser } from '@/components/Browser/Browser'

export const TvSeries = () => {
	const { filteredItems, tvSeriedFoundedItems} = useContext(MoviesContext)
	const tvSeries = filteredItems.map((item, index) => {
		if (item && item.category === 'TV Series') {
			return (
				<GridItem
					key={item.title}
					index={index}
					{...item}
				/>
			)
		}
	})

	return (
		<div className=' w-full mx-auto mt-9 lg:w-full'>
            <Browser foundedItems={tvSeriedFoundedItems} placeholder='Search for TV series'/>
			<h1 className='text-2xl xs:text-3xl lg:4-xl'>Tv Series</h1>
			<GridCard>{tvSeries}</GridCard>
		</div>
	)
}