import { useEffect, useState } from 'react'
import { MoviesContext } from './MoviesContext'
import { DataProps } from '../Content/HomeContent'
type ProviderProps = {
	children: React.ReactNode
}

export const MoviesProvider = ({ children }: ProviderProps) => {
	const [data, setData] = useState<DataProps[]>([])
	const [inputValue, setInputValue] = useState('')
	const [filteredItems, setFilteredItems] = useState<DataProps[]>([])

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('/data.json')
			const dataResponse = await response.json()
			setData(dataResponse)
		}
		fetchData()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		const filteredArr = data.filter(item => item.title.toLowerCase().includes(inputValue))
		setFilteredItems(filteredArr)
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

	const values = {
		filteredItems,
		inputValue,
		AddToBookmarkHandle,
		getInputValue,
	}

	return <MoviesContext.Provider value={values}>{children}</MoviesContext.Provider>
}
