'use client'
import { useContext, useEffect, useState } from 'react'
import { MoviesContext } from '@/components/store/moviesContext'
import { Browser } from '@/components/Browser/Browser'
import { Trending } from '@/components/Trending/Trending'
import { HomeContent } from '@/components/Content/HomeContent'
export default function Home() {
	const [isInputEmpty, setIsInputEmpty] = useState(true)
	const moviesCtx = useContext(MoviesContext)

	useEffect(() => {
		const isUserTyping = () => {
			if (moviesCtx.inputValue !== '') {
				setIsInputEmpty(false)
				moviesCtx.checkIfInputIsEmpty(false)
				return
			}
			setIsInputEmpty(true)
			moviesCtx.checkIfInputIsEmpty(true)
		}
		isUserTyping()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [moviesCtx.inputValue])

	return (
		<main style={{ overflow: 'hidden', width: '100%' }}>
			<Browser />
			{isInputEmpty && <Trending />}
			<HomeContent />
		</main>
	)
}
