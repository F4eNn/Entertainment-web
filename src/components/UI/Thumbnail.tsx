import Image from 'next/image'
import styled from 'styled-components'

const Box = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	background-color: #fff;
	border-radius: var(--radius-sm);
	overflow: hidden;
`
type ThumbnailProps = {
	image: string
	alt: string
}

export const Thumbnail = ({ image, alt }: ThumbnailProps) => {
	return (
		<Box>
			<Image
				src={`/${image}`}
				alt={alt}
				fill
				quality={100}
			/>
		</Box>
	)
}
