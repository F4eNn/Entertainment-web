'use client'
import { Nav } from '@/components/Nav/Nav'
import './globals.css'
import { Outfit } from 'next/font/google'
import { Wrapper } from '@/components/UI/Wrapper'
import { MoviesProvider } from '@/components/store/MoviesProvider'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
	title: 'Entertainment web',
	description: 'looking for your favourite movie',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={`${outfit.className} bg-dark-blue  `}>
				<Wrapper>
					<Nav />
					<div className='w-full'>
						<MoviesProvider>
							{children}
						</MoviesProvider>
					</div>
				</Wrapper>
			</body>
		</html>
	)
}
