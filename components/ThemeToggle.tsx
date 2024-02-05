'use client'
import React from 'react'
import { Moon, Sun } from '@phosphor-icons/react'
import { useTheme } from 'next-themes'
import { Switch } from './ui/switch'

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()
  console.log(theme)
  return (
    <div className="flex scale-125 flex-col items-center justify-center gap-2 md:flex-row">
      <Sun className="h-4 w-4 rotate-0 transition-all duration-500 ease-in-out dark:-rotate-90 dark:opacity-0" />
      <Switch
        checked={theme === 'dark'}
        onCheckedChange={(checked) => {
          setTheme(checked ? 'dark' : 'light')
        }}
      />
      <Moon className="h-4 w-4 rotate-90 opacity-0 transition-all duration-300 ease-in-out dark:rotate-0 dark:opacity-100" />
    </div>
  )
}

export default ThemeToggle
