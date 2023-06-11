
export const Wrapper = (props: {children: React.ReactNode}) => {
    return <div className="max-w-[1440px] w-[95%] mx-auto lg:flex  lg: gap-7">{props.children}</div>
}