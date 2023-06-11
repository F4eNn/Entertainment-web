import { useEffect, useState } from 'react'
import { MoviesContext } from './MoviesContext'
import { DataProps } from '../Content/Home'
type ProviderProps = {
	children: React.ReactNode
}
export const MoviesProvider = ({ children }: ProviderProps) => {
	const [inputValue, setInputValue] = useState('')
	const [data, setData] = useState<DataProps[]>([])
	const [filteredItems, setFilteredItems] = useState<DataProps[]>([])
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('/data.json')
				if (response.status === 200) {
					const dataResponse = await response.json()
					setData(dataResponse)
				} else {
					throw Error('Something went wrong, try again later...')
				}
			} catch (error) {
				window.alert(error)
			}
		}
		fetchData()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		const filteredArr = data.filter(item => item.title.toLowerCase().includes(inputValue.toLowerCase()))
		setFilteredItems(filteredArr)

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data, inputValue])
	const AddToBookmarkHandle = (index: number) => {
		setFilteredItems(prev => {
			const newData = [...prev]
			newData[index] = {
				...newData[index],
				isBookmarked: !newData[index].isBookmarked,
			}
			return newData
		})
	}
	const getInputValue = (value: string) => {
		setInputValue(value)
	}
	const homeFoundedItems = filteredItems.length
	const tvSeriedFoundedItems = filteredItems.filter(item => item.category === 'TV Series').length
	const movieFoundedItems = filteredItems.filter(item => item.category === 'Movie').length
	const bookmarkedFoundedItems = filteredItems.filter(item => item.isBookmarked).length
	const isBookmarkedMovies = filteredItems.filter(item => item.isBookmarked && item.category === 'Movie').length
	const isBookmarkedTVseries = filteredItems.filter(item => item.isBookmarked && item.category === 'TV Series').length
	
	const values = {
		filteredItems,
		inputValue,
		homeFoundedItems,
		tvSeriedFoundedItems,
		movieFoundedItems,
		bookmarkedFoundedItems,
		isBookmarkedTVseries,
		isBookmarkedMovies,
		AddToBookmarkHandle,
		getInputValue,
	}

	return <MoviesContext.Provider value={values}>{children}</MoviesContext.Provider>
}
