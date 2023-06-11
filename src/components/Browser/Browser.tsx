'use client'
import { SearchIcon } from '../Icons/SearchIcon'
import { useContext, useEffect } from 'react'
import { MoviesContext } from '../store/MoviesContext'
import { usePathname } from 'next/navigation'
import path from 'path'
type BrowserProps = {
	placeholder: string
	foundedItems: number
}

export const Browser = ({ placeholder, foundedItems }: BrowserProps) => {
	const { getInputValue, inputValue } = useContext(MoviesContext)
	const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		getInputValue(e.target.value)
	}
	const isEmptyInput =
		inputValue === '' ? null : (
			<p>
				Founded <span>{foundedItems}</span> result for <span>{`"${inputValue}"`}</span>
			</p>
		)

	const pathName = usePathname()
	useEffect(() => {
		getInputValue('')
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathName])

	return (
		<>
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
					defaultValue=''
					placeholder={placeholder}
					className='w-full font-extralight bg-transparent focus:outline-none focus:border-b focus:border-greyish-blue caret-main-red text-white '
				/>
			</div>
			<div className='mt-4 text-2xl font-extralight'>{isEmptyInput}</div>
		</>
	)
}
