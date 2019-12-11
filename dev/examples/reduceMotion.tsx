import * as React from "react"
import { motion, useAnimation, useReducedMotion } from "@framer"

const style = {
    width: 100,
    height: 100,
    background: "red",
    opacity: 1,
}

export const App = () => {
    const [isVisible, setIsVisible] = React.useState(false)
    const isReducedMotion = useReducedMotion()
    const transition = isReducedMotion ? { type: false } : { duration: 1 }
    const variants = {
        visible: { opacity: 1, transition },
        hidden: { opacity: 0, transition },
    }

    React.useEffect(() => {
        setTimeout(() => setIsVisible(!isVisible), 1500)
    })

    return (
        <motion.div animate={isVisible ? "visible" : "hidden"} initial={false}>
            <motion.div variants={variants} style={style} />
        </motion.div>
    )
}
