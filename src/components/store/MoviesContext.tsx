import React from 'react'
import { DataProps } from '../Content/HomeContent'

const initValues = {
	AddToBookmarkHandle: (index: number) => {},
	getInputValue: (value: string) => {},
	filteredItems: [] as Partial<DataProps[]>,
	inputValue: '',
}

export const MoviesContext = React.createContext(initValues)
