'use client';

import { Settings, Key, Database, AudioLines } from 'lucide-react';
import { motion } from 'motion/react';
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip';
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from '@/components/ui/drawer';

export function DashSettings() {
  return (
    <div className="flex flex-col gap-2 h-full">
      <div className="flex flex-row gap-1">
        <Drawer direction="right">
          <Tooltip delayDuration={1000}>
            <TooltipTrigger asChild>
              <DrawerTrigger asChild>
                <motion.button
                  type="button"
                  aria-label="Audio Settings"
                  className="flex h-9 w-9 items-center justify-center text-muted-foreground rounded-md transition-colors"
                  whileHover={{ y: -3, scale: 1.1 }}
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 15,
                    bounce: 0.35,
                  }}
                >
                  <AudioLines size={18} />
                </motion.button>
              </DrawerTrigger>
            </TooltipTrigger>
            <TooltipContent side="bottom">⌘⌥a</TooltipContent>
          </Tooltip>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Audio Settings</DrawerTitle>
              <DrawerDescription>
                Configure audio preferences and recording settings.
              </DrawerDescription>
            </DrawerHeader>
            <div className="grid gap-4 p-4">
              <p className="text-sm text-muted-foreground">
                Audio settings content will go here...
              </p>
            </div>
          </DrawerContent>
        </Drawer>
        <Drawer direction="right">
          <Tooltip delayDuration={1000}>
            <TooltipTrigger asChild>
              <DrawerTrigger asChild>
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
              </DrawerTrigger>
            </TooltipTrigger>
            <TooltipContent side="bottom">⌘⌥k</TooltipContent>
          </Tooltip>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>API Keys</DrawerTitle>
              <DrawerDescription>
                Manage your API keys for various services and integrations.
              </DrawerDescription>
            </DrawerHeader>
            <div className="grid gap-4 py-4">
              <p className="text-sm text-muted-foreground">
                API key management content will go here...
              </p>
            </div>
          </DrawerContent>
        </Drawer>
        <Drawer direction="right">
          <Tooltip delayDuration={1000}>
            <TooltipTrigger asChild>
              <DrawerTrigger asChild>
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
              </DrawerTrigger>
            </TooltipTrigger>
            <TooltipContent side="bottom">Storage Settings</TooltipContent>
          </Tooltip>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Storage Settings</DrawerTitle>
              <DrawerDescription>
                Configure storage options and data management preferences.
              </DrawerDescription>
            </DrawerHeader>
            <div className="grid gap-4 p-4">
              <p className="text-sm text-muted-foreground">
                Storage settings content will go here...
              </p>
            </div>
          </DrawerContent>
        </Drawer>
        <Drawer direction="right">
          <Tooltip delayDuration={1000}>
            <TooltipTrigger asChild>
              <DrawerTrigger asChild>
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
              </DrawerTrigger>
            </TooltipTrigger>
            <TooltipContent side="bottom">⌘⌥,</TooltipContent>
          </Tooltip>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>General Settings</DrawerTitle>
              <DrawerDescription>
                Configure general application settings and preferences.
              </DrawerDescription>
            </DrawerHeader>
            <div className="grid gap-4 py-4">
              <p className="text-sm text-muted-foreground">
                General settings content will go here...
              </p>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}
