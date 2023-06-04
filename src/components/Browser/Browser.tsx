'use client'
import { Input, Container } from './BrowserStyles/BrowserStyles'
import { SearchIcon } from './BrowserStyles/SearchIcon'

export const Browser = () => {
	return (
		<Container>
			<SearchIcon />
			<Input placeholder='Search for movies or TV series' type='text'/>
		</Container>
	)
}
