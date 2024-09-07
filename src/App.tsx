import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { useTheme } from 'next-themes'
import { useEffect } from 'react'

function App() {
  return (
    <>
      <Home />
    </>
  )
}

export default App

function Home() {
  const { resolvedTheme, theme } = useTheme()

  useEffect(() => {
    console.log(resolvedTheme, theme)
  }, [resolvedTheme, theme])
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">
        Welcome to My Multi-Themed Site
      </h1>
      <Card className="w-[350px] mb-8">
        <CardHeader>
          <CardTitle>Theme Showcase</CardTitle>
          <CardDescription>
            This card demonstrates the current theme
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            The background, text, and component colors change based on the
            selected theme.
          </p>
        </CardContent>
        <CardFooter>
          <Button>Themed Button</Button>
        </CardFooter>
      </Card>
      <p className="text-lg mb-4">
        Click the button below to change the theme:
      </p>
      <ThemeToggle />
    </main>
  )
}
