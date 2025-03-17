import { CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface PriceCardProps {
  title: string
  description: string
  price: string
  features: string[]
  popular?: boolean
}

export function PriceCard({ title, description, price, features, popular }: PriceCardProps) {
  return (
    <Card className={popular ? "border-primary" : ""}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <div className="text-3xl font-bold">{price} ₽/мес</div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

