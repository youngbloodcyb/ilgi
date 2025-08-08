'use client';

import { Settings, Key, Database } from 'lucide-react';
import { motion } from 'motion/react';
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip';

export function DashSettings() {
  return (
    <div className="flex flex-col gap-2 p-4 h-full">
      <div className="flex flex-row gap-1">
        <Tooltip>
          <TooltipTrigger asChild>
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
          </TooltipTrigger>
          <TooltipContent>⌘,</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
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
          </TooltipTrigger>
          <TooltipContent>API Keys</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
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
          </TooltipTrigger>
          <TooltipContent>Storage Settings</TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
}
