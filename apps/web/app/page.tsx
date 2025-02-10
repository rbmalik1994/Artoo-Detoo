import { Button } from "@r2d2/ui/components/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@r2d2/ui/components/card"

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <Card className="p-4">
        <CardHeader>
          <CardTitle>Artoo-Detoo OS</CardTitle>
          <CardDescription>Experience the AI-powered web-based operating system.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center gap-4">
            {/* Replace old heading */}
            <Button size="lg">Get Started</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
