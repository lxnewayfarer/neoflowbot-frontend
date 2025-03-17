import { Bot } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t py-6">
      <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 text-center">
        <div className="flex items-center gap-2">
          <Bot className="h-6 w-6" />
          <span className="font-bold">MerchBot</span>
        </div>
        <p className="text-sm text-muted-foreground">© 2024 MerchBot. Все права защищены.</p>
      </div>
    </footer>
  )
}

