'use client'
import { useContext } from 'react'
import { MoviesContext } from '../store/MoviesContext'
import { GridItem } from '../UI/GridItem'
import { GridCard } from '../UI/GridCard'
import { Browser } from '@/components/Browser/Browser'

export const Bookmarks = () => {
	const { filteredItems, bookmarkedFoundedItems } = useContext(MoviesContext)

	const bookmarkedMovies = filteredItems.map((item, index) => {
		if (item && item.isBookmarked && item.category === 'Movie') {
			return (
				<GridItem
					key={item.title}
					{...item}
					index={index}
				/>
			)
		}
	})
	const bookmarkedTVseries = filteredItems.map((item, index) => {
		if (item && item.isBookmarked && item.category === 'TV Series') {
			return (
				<GridItem
					key={item.title}
					{...item}
					index={index}
				/>
			)
		}
	})

	return (
		<div className=' w-full mx-auto mt-9 lg:w-full'>
			<Browser
				foundedItems={bookmarkedFoundedItems}
				placeholder='Search for bookmarked shows'
			/>
			<div className='mt-7'>
				<h2 className='text-2xl font-light mb-4 xs:text-3xl lg:4-xl'>Bookmarked Movies</h2>
				<GridCard>{bookmarkedMovies}</GridCard>
			</div>
			<div className='mt-9'>
				<h2 className='text-2xl font-light mb-4 xs:text-3xl lg:4-xl'>Bookmarked TV Series</h2>
				<GridCard>{bookmarkedTVseries}</GridCard>
			</div>
		</div>
	)
}
