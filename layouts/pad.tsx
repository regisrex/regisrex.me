export default function Pad({ children, className }: { children: React.ReactNode, className: string }) {
    return <div className={"sm:px-[2vw] sm:px-[4vw] md:px-[28vw] lg:px-[32vw]" + " " + className}>
        {children}
    </div>
}