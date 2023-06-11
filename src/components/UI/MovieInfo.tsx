import { DataProps } from '../Content/Home'
import { CategoryMoveIcon } from '../Icons/CategoryMoveIcon'
import { CategoryTvIcon } from '../Icons/CategoryTvIcon'
type MovieInfoProps = Partial<DataProps>

export const MovieInfo = ({ category, rating, title, year }: MovieInfoProps) => {
	return (
		<div className=' w-full text-inherit text-left'>
			<div className='flex items-center gap-2'>
				<span className='font-extralight'>{year}</span>
				<span className='h-2 w-2 bg-gray rounded-full'></span>
				{category === 'Movie' ? <CategoryMoveIcon /> : <CategoryTvIcon />}
				<span className='font-extralight'>{category}</span>
				<span className='h-2 w-2 bg-gray rounded-full'></span>
				<span className='font-extralight'> {rating}</span>
			</div>
			<p className='font-bold '>{title}</p>
		</div>
	)
}
