import { BookmarkEmptyIcon } from '../Icons/BookmarkEmptyIcon'
import { BookmarkFullIcon } from '../Icons/BookmarkFullIcon'
import { MoviesContext } from '../store/MoviesContext'
import { useContext } from 'react'

type AddToBookmark = {
	index: number
	isBookmarked: boolean
}

export const AddToBookmark = ({ index, isBookmarked }: AddToBookmark) => {
	const { AddToBookmarkHandle } = useContext(MoviesContext)
	return (
		<button
			aria-label='add to bookmark'
			onClick={() => AddToBookmarkHandle(index)}
			className=' absolute right-3 top-3 p-3 bg-black bg-opacity-60 rounded-full hover:bg-white duration-300 group z-10'>
			{isBookmarked ? <BookmarkFullIcon /> : <BookmarkEmptyIcon />}
		</button>
	)
}
