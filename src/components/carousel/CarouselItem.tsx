import { Overlay } from '../UI/Overlay'
import { MovieInfo } from '../UI/MovieInfo'
import { AddToBookmark } from '../Content/AddToBookmark'
import Image from 'next/image'
import { useState } from 'react'
import { DataProps } from '../Content/Home'

type CarouselProps = DataProps & {
	index: number
}
export const CarouselItem = (props: CarouselProps) => {
	const { thumbnail, title, isBookmarked, index } = props
	const [isHover, setIsHover] = useState(false)

	const handleOverItem = () => {
		setIsHover(true)
	}
	const handleLeaveItem = () => {
		setIsHover(false)
	}
	return (
		<>
			<AddToBookmark
				index={index}
				isBookmarked={isBookmarked}
			/>
			<div
				onMouseOver={handleOverItem}
				onMouseLeave={handleLeaveItem}
				className='relative w-full h-[150px] xs:h-[200px] xl:h-[250px]'>
				<picture>
					<source
						media='(max-width: 475px)'
						srcSet={thumbnail.trending.small}
					/>
					<Image
						src={`/${thumbnail.trending.large}`}
						alt={title}
						fill
						sizes='auto'
						className='pointer-events-none rounded-radius-md'
					/>
				</picture>
				{isHover && <Overlay />}
			</div>
			<div className='absolute bottom-2 left-2 text-sm xs:bottom-4 xs:left-4 xs:text-base md:text-lg xl:text-xl'>
				<MovieInfo {...props} />
			</div>
		</>
	)
}
