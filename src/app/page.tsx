import { Wrapper } from '@/components/UI/Wrapper'
import { HomeContent } from '@/components/Content/HomeContent'
import { CarouselTrending } from '@/components/Content/CarouselTrending'
import { Browser } from '@/components/Browser/Browser'
export default function Home() {
	return (
		<main className='flex flex-col'>
			<CarouselTrending />

			<HomeContent />
		</main>
	)
}
