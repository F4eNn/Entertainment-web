import { Nav } from '@/components/Nav/Nav'
import './globals.css'
import { Outfit } from 'next/font/google'
import { Browser } from '@/components/Browser/Browser'
import { Wrapper } from '@/components/UI/Wrapper'
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
					<div className='lg:flex  '>
						<header className=' '>
							<Nav />
						</header>
						<div className='w-full '>
							<Browser />
							{children}
						</div>
					</div>
				</Wrapper>
			</body>
		</html>
	)
}
