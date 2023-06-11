'use client'
import { useContext } from 'react'
import { MoviesContext } from '../store/MoviesContext'
import { GridItem } from '../UI/GridItem'
import { GridCard } from '../UI/GridCard'
import { Browser } from '@/components/Browser/Browser'

export const Bookmarks = () => {
	const { filteredItems, bookmarkedFoundedItems, isBookmarkedMovies, isBookmarkedTVseries } = useContext(MoviesContext)
	const isMovies = isBookmarkedMovies > 0
	const isTvSeries = isBookmarkedTVseries > 0

	const bookmarkedMoviesMap = filteredItems.map((item, index) => {
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
	const bookmarkedTVseriesMap = filteredItems.map((item, index) => {
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

	const isEmptyFieldMovie = isMovies ? (
		<GridCard>{bookmarkedMoviesMap}</GridCard>
	) : (
		<p className='italic text-greyish-blue font-extralight text-xl'>{"You don't have any favourite Movies yet"}</p>
	)
	const isEmptyFieldTvSeries = isTvSeries ? (
		<GridCard>{bookmarkedTVseriesMap}</GridCard>
	) : (
		<p className='italic text-greyish-blue font-extralight text-xl'>{"You dont't have any favourite TV Series yet"}</p>
	)

	return (
		<div className=' w-full mx-auto mt-9 lg:w-full'>
			<Browser
				foundedItems={bookmarkedFoundedItems}
				placeholder='Search for bookmarked shows'
			/>
			<div className='mt-7'>
				<h1 className='text-2xl font-light mb-4 xs:text-3xl lg:4-xl'>Bookmarked Movies</h1>
				{isEmptyFieldMovie}
			</div>
			<div className='mt-9 mb-10'>
				<h2 className='text-2xl font-light mb-4 xs:text-3xl lg:4-xl'>Bookmarked TV Series</h2>
				{isEmptyFieldTvSeries}
			</div>
		</div>
	)
}
