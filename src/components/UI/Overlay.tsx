import { PlayIcon } from '../Icons/PlayIcon'

export const Overlay = () => {
	return (
		<div className='absolute w-full h-full flex justify-center items-center bg-black bg-opacity-50'>
			<button
				aria-label='play'
				className='pl-2 pr-6 py-2 text-white bg-gray bg-opacity-50 flex gap-3 justify-between items-center rounded-3xl hover:scale-105 hover:bg-opacity-75 duration-200'>
				<PlayIcon />
				Play
			</button>
		</div>
	)
}
