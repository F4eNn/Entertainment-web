import { Outfit } from 'next/font/google'
import { GlobalStyles } from './globals'
import { Nav } from '@/components/Nav/Nav'
import { MoviesProvider } from '@/store/moviesProvider'
const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
	title: 'Entertainment web',
	description: 'looking for your favourite movie',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={outfit.className}>
				<GlobalStyles />
				<Nav />
				<MoviesProvider>{children}</MoviesProvider>
			</body>
		</html>
	)
}
