

import { useEffect, useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"

interface BetaWarningModalProps {
  isOpen?: boolean
  onOpenChange?: (open: boolean) => void
}

const BetaWarningModal = ({ 
  isOpen = true, 
  onOpenChange, 
}: BetaWarningModalProps) => {
  const [isInternalOpen, setIsInternalOpen] = useState(isOpen)

  const handleOpenChange = (open: boolean) => {
    setIsInternalOpen(open)
    onOpenChange?.(open)
  }

  const handleClose = () => {
    handleOpenChange(false)
  }

  useEffect(() => {
    setIsInternalOpen(isOpen)
  }, [isOpen])

  return (
    <Dialog open={isInternalOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md bg-background border-2 border-yellow-500/50">
        <DialogHeader className="flex flex-col items-center text-center relative">
          
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-900/20 mb-4">
            <AlertTriangle  />
          </div>
          <DialogTitle className="text-xl flex items-center gap-2">
            <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded-md text-sm font-medium">
              Beta Version
            </span>
          </DialogTitle>
          <DialogDescription className="text-base mt-2 space-y-2">
            <p className="font-semibold text-foreground/90">
              This chat is currently in development
            </p>
            <p className="text-foreground/70">
              Responses may be inaccurate or incomplete while we continue to improve the system.
            </p>
            <p className="text-sm text-yellow-600 dark:text-yellow-400 font-medium mt-3">
              Please use with caution and verify important information.
            </p>
          </DialogDescription>
        </DialogHeader>
        
        {/* Close Button at bottom */}
        <div className="mt-6 flex justify-center">
          <Button 
            onClick={handleClose}
            variant="default"
            className="bg-yellow-500 hover:bg-yellow-600 text-white"
          >
            I Understand
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default BetaWarningModal