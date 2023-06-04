import { Browser } from '@/components/Browser/Browser'
import { Trending } from '@/components/Trending/Trending'
export default function Home() {
	return (
		<main style={{overflow: 'hidden'}}>
			<Browser />
			<Trending />
		</main>
	)
}
