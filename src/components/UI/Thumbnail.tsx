import Image from 'next/image'
import { useState } from 'react'
import styled from 'styled-components'
import { Overlay } from './Overlay'
const Box = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	border-radius: var(--radius-sm);
	border-radius: 10px;
	overflow: hidden;
	transition: opacity 5s;
	

`
type ThumbnailProps = {
	image: string
	alt: string
}

export const Thumbnail = ({ image, alt }: ThumbnailProps) => {
	const [isHovering, setIsHovering] = useState(false)
	const handleMouseOver = () => {
		setIsHovering(true)
	}
	const handleMouseOut = () => {
		setIsHovering(false)
	}
	return (
		<Box
			onMouseOut={handleMouseOut}
			onMouseOver={handleMouseOver}>
			<Image
				src={`/${image}`}
				alt={alt}
				fill
				quality={100}
			/>
			{isHovering && <Overlay />}
		</Box>
	)
}
