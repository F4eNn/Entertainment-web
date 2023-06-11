'use client'
import './globals.css'
import { Nav } from '@/components/Nav/Nav'
import { Outfit } from 'next/font/google'
import { Wrapper } from '@/components/UI/Wrapper'
import { MoviesProvider } from '@/components/store/MoviesProvider'

const outfit = Outfit({ subsets: ['latin'] })

// <!DOCTYPE html>
// <html lang="pl">
// <head>
// 	<meta charset="UTF-8" />
// 	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
// 	<title>Document</title>
// </head>
// <body>

// </body>
// </html>

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<head>
				<meta charSet='UTF-8' />
				<meta
					name='description'
					content='all movies in one place'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0'
				/>
				<title>Entertainment Web</title>
			</head>
			<body className={`${outfit.className} bg-dark-blue  `}>
				<div className='lg:flex'>
					<Nav />
					<Wrapper>
						<div className='w-full'>
							<MoviesProvider>{children}</MoviesProvider>
						</div>
					</Wrapper>
				</div>
			</body>
		</html>
	)
}
