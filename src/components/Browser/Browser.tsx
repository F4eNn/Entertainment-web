'use client'
import { SearchIcon } from '../Icons/SearchIcon'
import styled from 'styled-components'
import { MoviesContext } from '../store/moviesContext'
import { useContext } from 'react'
export const Input = styled.input`
	width: 100%;
	border: none;
	background-color: transparent;
	padding: 0.5rem 0 0.5rem;
	margin-left: 1.5rem;
	outline: none;
	caret-color: var(--red);
	color: var(--white);
	font-size: 1em;
	&:focus {
		border-bottom: 1px solid var(--greyish-blue);
	}
`
export const Container = styled.div`
	margin-top: 1rem;
	display: flex;
	align-items: center;
	margin-inline: auto;
	width: 95%;
	font-size: clamp(1.5em, 2.1vw, 2em);
	@media (min-width: 768px) {
		margin-top: 2rem;
	}
`

export const Browser = () => {
	const moviesCtx = useContext(MoviesContext)

	const getInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		moviesCtx.getInputValue(e.target.value.toLowerCase())
	}

	return (
		<Container>
			<SearchIcon />
			<Input
				onChange={getInputValue}
				placeholder='Search for movies or TV series'
				type='text'
			/>
		</Container>
	)
}
