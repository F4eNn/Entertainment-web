'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BookmarkNavSvg } from '../Icons/BookmarkNavSvg'
import { HomeNavIcon } from '../Icons/HomeNavSvg'
import { MovieNavSvg } from '../Icons/MovieNavSvg'
import { TvSeriesIconSvg } from '../Icons/TvSeriesNavSvg'
export const Nav = () => {
	const currentPath = usePathname()

	const isCurrentPage = (path: string) => currentPath === path

	return (
		<nav className='bg-semi-dark-blue p-4 flex items-center justify-between xs:rounded-radius-md xs:m-5 lg:p-5 lg:flex-col lg:h-[calc(100vh-25px)]'>
			<Link href='/'>
				<Image
					src='./assets/logo.svg'
					alt='logo'
					width={30}
					height={25}
					className='lg:w-[40px] lg:h-[25px] lg:ml-[3px] '
				/>
			</Link>
			<ul className='flex justify-center items-center gap-4 xs:gap-8 lg:flex-col lg: mb-auto lg:mt-16'>
				<li>
					<Link href='/'>
						<HomeNavIcon fill={`${isCurrentPage('/') ? '#fff' : '#5A698F'} `} />
					</Link>
				</li>
				<li>
					<Link href='/movies'>
						<MovieNavSvg fill={`${isCurrentPage('/movies') ? '#fff' : '#5A698F'}`} />
					</Link>
				</li>
				<li>
					<Link
						href='/tv-series'
						className='hover:svg-icon '>
						<TvSeriesIconSvg fill={`${isCurrentPage('/tv-series') ? '#fff' : '#5A698F'}`} />
					</Link>
				</li>
				<li>
					<Link href='/bookmarked'>
						<BookmarkNavSvg fill={`${isCurrentPage('/bookmarked') ? '#fff' : '#5A698F'}`} />
					</Link>
				</li>
			</ul>
			<Image
				src={'/assets/image-avatar.png'}
				alt='avatar'
				width={25}
				height={25}
				className='ring-1 ring-white rounded-full'
			/>
		</nav>
	)
}
