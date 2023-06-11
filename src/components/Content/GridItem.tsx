import { DataProps } from './HomeContent'
import Image from 'next/image'
import { AddToBookmark } from './AddToBookmark'
import { MovieInfo } from '../UI/MovieInfo'
export const GridItem = (props: DataProps & { index: number }) => {
	return (
		<div>
			<div className=' relative h-[200px] lg:h-[250px] text-xs xs:text-sm lg:text-base'>
				<div className='relative h-3/4 my-4'>
					<picture>
						<source
							media='(min-width:375px)'
							srcSet={props.thumbnail?.regular.small}
						/>
						<source
							media='(min-width:576px)'
							srcSet={props.thumbnail?.regular.medium}
						/>
						<source
							media='(min-width:992px)'
							srcSet={props.thumbnail?.regular.large}
						/>
						<Image
							src={`/${props.thumbnail?.regular.large}`}
							alt={props.title || ''}
							fill
							quality={100}
							className='rounded-radius-md '
						/>
					</picture>
				</div>
				<AddToBookmark
					index={props.index}
					isBookmarked={props.isBookmarked}
				/>
				<MovieInfo {...props} />
			</div>
		</div>
	)
}
