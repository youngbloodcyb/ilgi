'use client';

import { Settings, Key, Database } from 'lucide-react';
import { motion } from 'motion/react';
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

export function DashSettings() {
  return (
    <div className="flex flex-col gap-2 p-4 h-full">
      <div className="flex flex-row gap-1">
        <Dialog>
          <Tooltip>
            <TooltipTrigger asChild>
              <DialogTrigger asChild>
                <motion.button
                  type="button"
                  aria-label="General"
                  className="flex h-9 w-9 items-center justify-center text-muted-foreground rounded-md transition-colors"
                  whileHover={{ y: -3, scale: 1.1 }}
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 15,
                    bounce: 0.35,
                  }}
                >
                  <Settings size={18} />
                </motion.button>
              </DialogTrigger>
            </TooltipTrigger>
            <TooltipContent>⌘,</TooltipContent>
          </Tooltip>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>General Settings</DialogTitle>
              <DialogDescription>
                Configure general application settings and preferences.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <p className="text-sm text-muted-foreground">
                General settings content will go here...
              </p>
            </div>
          </DialogContent>
        </Dialog>
        <Dialog>
          <Tooltip>
            <TooltipTrigger asChild>
              <DialogTrigger asChild>
                <motion.button
                  type="button"
                  aria-label="API Keys"
                  className="flex h-9 w-9 items-center justify-center text-muted-foreground rounded-md transition-colors"
                  whileHover={{ y: -3, scale: 1.1 }}
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 15,
                    bounce: 0.35,
                  }}
                >
                  <Key size={18} />
                </motion.button>
              </DialogTrigger>
            </TooltipTrigger>
            <TooltipContent>API Keys</TooltipContent>
          </Tooltip>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>API Keys</DialogTitle>
              <DialogDescription>
                Manage your API keys for various services and integrations.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <p className="text-sm text-muted-foreground">
                API key management content will go here...
              </p>
            </div>
          </DialogContent>
        </Dialog>
        <Dialog>
          <Tooltip>
            <TooltipTrigger asChild>
              <DialogTrigger asChild>
                <motion.button
                  type="button"
                  aria-label="Storage"
                  className="flex h-9 w-9 items-center justify-center text-muted-foreground rounded-md transition-colors"
                  whileHover={{ y: -3, scale: 1.1 }}
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 15,
                    bounce: 0.35,
                  }}
                >
                  <Database size={18} />
                </motion.button>
              </DialogTrigger>
            </TooltipTrigger>
            <TooltipContent>Storage Settings</TooltipContent>
          </Tooltip>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Storage Settings</DialogTitle>
              <DialogDescription>
                Configure storage options and data management preferences.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <p className="text-sm text-muted-foreground">
                Storage settings content will go here...
              </p>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
