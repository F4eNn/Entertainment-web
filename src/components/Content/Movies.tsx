'use client'
import { useContext } from 'react'
import { MoviesContext } from '../store/MoviesContext'
import { GridItem } from '../UI/GridItem'
import { GridCard } from '../UI/GridCard'
import { Browser } from '@/components/Browser/Browser'

export const Movies = () => {
	const { filteredItems, movieFoundedItems } = useContext(MoviesContext)
	const movies = filteredItems.map((item, index) => {
		if (item && item.category === 'Movie') {
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
			<Browser
				foundedItems={movieFoundedItems}
				placeholder='Search for movies'
			/>

			<h1 className='text-2xl xs:text-3xl lg:4-xl'>Movies</h1>
			<GridCard>{movies}</GridCard>
		</div>
	)
}
