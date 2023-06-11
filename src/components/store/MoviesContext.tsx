import React from 'react'
import { DataProps } from '../Content/Home'

const initValues = {
	AddToBookmarkHandle: (index: number) => {},
	getInputValue: (value: string) => {},
	filteredItems: [] as Partial<DataProps[]>,
	inputValue: '',
	homeFoundedItems: 0,
	tvSeriedFoundedItems: 0,
	movieFoundedItems: 0,
	bookmarkedFoundedItems:0
}

export const MoviesContext = React.createContext(initValues)
