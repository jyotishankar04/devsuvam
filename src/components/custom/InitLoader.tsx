"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const InitialLoader = () => {
    const [showImage, setShowImage] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowImage(false)
        }, 5000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="w-full h-screen bg-background relative">
            <AnimatePresence>
                {showImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="fixed inset-0 bg-background z-50 flex items-center justify-center"
                    >
                        <motion.div
                            layoutId="profile-hero-image"
                            initial={{ scale: 3, opacity: 0 }}
                            animate={{
                                scale: 1,
                                opacity: 1,
                                transition: {
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 10,
                                    duration: 0.8
                                }
                            }}
                            className="w-32 h-32 rounded-2xl border-2 border-primary overflow-hidden"
                        >
                            <img
                                src="/dp.png"
                                alt="Profile"
                                className="w-full h-full object-cover object-start"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default InitialLoader