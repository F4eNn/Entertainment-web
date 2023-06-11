import React from 'react'
export const GridCard = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='grid  grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-4 min-[540px]:grid-cols-[repeat(auto-fill,minmax(175px,1fr))] min-[540px]:gap-6 min-[840px]:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(275px,1fr))]'>
			{children}
		</div>
	)
}
