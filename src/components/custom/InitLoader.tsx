"use client"

import { useEffect, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Loader2, Code, Cpu, Database, Rocket, CheckCircle, ServerCog, Sparkles } from 'lucide-react'

const LOADING_STEPS = [
    {
        message: "Initializing systems...",
        icon: <Cpu className="w-8 h-8" />,
        duration: 1500,
        color: "text-blue-500"
    },
    {
        message: "Loading portfolio data...",
        icon: <Database className="w-8 h-8" />,
        duration: 1500,
        color: "text-purple-500"
    },
    {
        message: "Configuring components...",
        icon: <ServerCog className="w-8 h-8" />,
        duration: 1500,
        color: "text-orange-500"
    },
    {
        message: "Optimizing performance...",
        icon: <Code className="w-8 h-8" />,
        duration: 1500,
        color: "text-green-500"
    },
    {
        message: "Finalizing experience...",
        icon: <Rocket className="w-8 h-8" />,
        duration: 1500,
        color: "text-red-500"
    },
    {
        message: "Ready to explore!",
        icon: <CheckCircle className="w-8 h-8" />,
        duration: 1500,
        color: "text-emerald-500"
    }
]

// Floating particles component
const FloatingParticles = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-primary/20 rounded-full"
                    initial={{
                        x: Math.random() * window.innerWidth,
                        y: window.innerHeight + 10,
                        opacity: 0
                    }}
                    animate={{
                        y: -10,
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0]
                    }}
                    transition={{
                        duration: Math.random() * 3 + 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                        ease: "easeOut"
                    }}
                />
            ))}
        </div>
    )
}

interface InitialLoaderProps {
    onComplete: () => void
}

export default function InitialLoader({ onComplete }: InitialLoaderProps) {
    const [currentStep, setCurrentStep] = useState(0)
    const [isComplete, setIsComplete] = useState(false)
    const [progress, setProgress] = useState(0)
    const [stepProgress, setStepProgress] = useState(0)

    const totalDuration = LOADING_STEPS.reduce((sum, step) => sum + step.duration, 0)

    const updateProgress = useCallback(() => {
        const currentStepData = LOADING_STEPS[currentStep]
        if (!currentStepData) return

        let elapsed = 0
        for (let i = 0; i < currentStep; i++) {
            elapsed += LOADING_STEPS[i].duration
        }
        elapsed += (stepProgress / 100) * currentStepData.duration

        const newProgress = Math.min(100, (elapsed / totalDuration) * 100)
        setProgress(newProgress)
    }, [currentStep, stepProgress, totalDuration])

    useEffect(() => {
        updateProgress()
    }, [updateProgress])

    useEffect(() => {
        if (currentStep >= LOADING_STEPS.length) {
            setIsComplete(true)
            setTimeout(onComplete, 800)
            return
        }

        const currentStepData = LOADING_STEPS[currentStep]
        let startTime: number
        let animationFrame: number

        const animateStep = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const elapsed = timestamp - startTime
            const stepProgressValue = Math.min(100, (elapsed / currentStepData.duration) * 100)

            setStepProgress(stepProgressValue)

            if (stepProgressValue < 100) {
                animationFrame = requestAnimationFrame(animateStep)
            } else {
                // Move to next step
                setTimeout(() => {
                    setCurrentStep(prev => prev + 1)
                    setStepProgress(0)
                }, 200)
            }
        }

        animationFrame = requestAnimationFrame(animateStep)

        return () => {
            cancelAnimationFrame(animationFrame)
        }
    }, [currentStep, onComplete])

    const currentStepData = LOADING_STEPS[currentStep]
    const isLastStep = currentStep === LOADING_STEPS.length - 1

    return (
        <AnimatePresence>
            {!isComplete && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        scale: 1.1,
                        filter: "blur(10px)"
                    }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-50 bg-gradient-to-br from-background via-background to-background/95 flex flex-col items-center justify-center gap-8"
                >
                    <FloatingParticles />

                    {/* Main content container */}
                    <div className="relative flex flex-col items-center gap-8">
                        {/* Icon container with enhanced animations */}
                        <div className="relative">
                            <motion.div
                                key={`icon-${currentStep}`}
                                initial={{ scale: 0.5, opacity: 0, rotateY: -180 }}
                                animate={{
                                    scale: 1,
                                    opacity: 1,
                                    rotateY: 0,
                                }}
                                exit={{
                                    scale: 0.5,
                                    opacity: 0,
                                    rotateY: 180
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 20,
                                    duration: 0.6
                                }}
                                className={`${currentStepData?.color || 'text-primary'} relative z-10`}
                            >
                                {currentStepData?.icon}
                            </motion.div>

                            {/* Rotating loader ring (hidden on last step) */}
                            {!isLastStep && (
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                    className="absolute inset-0 -m-4"
                                >
                                    <Loader2 className="w-16 h-16 text-primary/20" />
                                </motion.div>
                            )}

                            {/* Pulsing background effect */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.1, 0.3, 0.1]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute inset-0 -m-6 bg-primary/10 rounded-full blur-xl"
                            />
                        </div>

                        {/* Message with improved typography */}
                        <motion.div
                            key={`message-${currentStep}`}
                            initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, y: -20, filter: "blur(5px)" }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="text-center space-y-2"
                        >
                            <div className="text-2xl font-semibold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                                {currentStepData?.message}
                            </div>
                            {!isLastStep && (
                                <div className="text-sm text-muted-foreground/80 font-medium">
                                    Step {currentStep + 1} of {LOADING_STEPS.length}
                                </div>
                            )}
                        </motion.div>

                        {/* Enhanced progress bar */}
                        <div className="w-80 space-y-3">
                            {/* Main progress bar */}
                            <div className="relative h-3 bg-muted/50 rounded-full overflow-hidden backdrop-blur-sm border border-border/50">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-primary via-primary/90 to-primary rounded-full relative overflow-hidden"
                                    initial={{ width: "0%" }}
                                    animate={{ width: `${progress}%` }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                >
                                    {/* Shimmer effect */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                        animate={{ x: ["-100%", "100%"] }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    />
                                </motion.div>

                                {/* Progress percentage */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <motion.span
                                        className="text-xs font-bold text-background mix-blend-difference"
                                        animate={{ opacity: [0.7, 1, 0.7] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        {Math.round(progress)}%
                                    </motion.span>
                                </div>
                            </div>

                            {/* Step progress indicator */}
                            <div className="flex justify-between items-center text-xs text-muted-foreground">
                                <span>Current step: {Math.round(stepProgress)}%</span>
                                <span>{Math.round(progress * totalDuration / 100 / 1000)}s elapsed</span>
                            </div>
                        </div>

                        {/* Completion celebration */}
                        {isLastStep && (
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="flex items-center gap-2 text-emerald-500"
                            >
                                <Sparkles className="w-5 h-5" />
                                <span className="font-medium">Loading Complete!</span>
                                <Sparkles className="w-5 h-5" />
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
