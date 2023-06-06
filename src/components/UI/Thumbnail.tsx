import Image from 'next/image'
import { useState } from 'react'
import styled from 'styled-components'
import { Overlay } from './Overlay'
const Box = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: flex-end;
	width: 100%;
	height: 100%;
	border-radius: var(--radius-sm);
	border-radius: 10px;
	overflow: hidden;
	transition: opacity 5s;
	padding-left: 2.5rem;
`
type ThumbnailProps = {
	image: string
	alt: string
	children?: React.ReactElement
}

export const Thumbnail = ({ image, alt, children }: ThumbnailProps) => {
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
			{children}
		</Box>
	)
}
