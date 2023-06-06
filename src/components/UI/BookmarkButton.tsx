import styled from 'styled-components'
import { useState } from 'react'
import { BookmarkEmptyIcon } from '../Icons/BookmarkEmptyIcon'
import { BookmarkFullIcon } from '../Icons/BookmarkFullIcon'

const Button = styled.button`
	position: absolute;
	right: 1rem;
	top: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
	border: none;
	background-color: #000000ae;
	border-radius: 50%;
	padding: 1rem;
	z-index: 1000;
	cursor: pointer;
	transition: background-color 0.3s;
	& svg {
		stroke: #fff;
		fill: #fff;
		transition: stroke 0.3s, fill 0.3s;
	}
	&:hover {
		background-color: var(--white);
	}
	&:hover svg {
		stroke: #000;
	}
`

export const BookmarkButton = () => {
	const [isBookmarked, setIsBookmarked] = useState(false)

	return <Button>{isBookmarked ? <BookmarkFullIcon /> : <BookmarkEmptyIcon />}</Button>
}
