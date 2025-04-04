export const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: delay,
            duration: 0.5,
        }
    })
}