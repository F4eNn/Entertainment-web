'use client'
import { SearchIcon } from '../Icons/SearchIcon'
import { useState, useContext } from 'react'
import { MoviesContext } from '../store/MoviesContext'
export const Browser = () => {
	const {getInputValue} = useContext(MoviesContext)
	const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		getInputValue(e.target.value.toLowerCase())
	}

	return (
		<div className='flex gap-2 items-center mx-3 mt-7 w-[95%] text-clamp-1rem lg:mx-0'>
			<SearchIcon />
			<label
				htmlFor='movies'
				aria-label='look for movies'
			/>
			<input
				onChange={onChangeInput}
				id='movies'
				type='text'
				placeholder='Search for movies or TV series'
				className='w-full bg-transparent focus:outline-none focus:border-b focus:border-greyish-blue caret-main-red text-white'
			/>
		</div>
	)
}
