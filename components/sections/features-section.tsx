"use client"

import { motion } from "framer-motion"
import { BrainCircuit, Handshake, MessageSquare, Sparkles, Target, Zap } from "lucide-react"

const features = [
  {
    icon: <BrainCircuit className="w-6 h-6" />,
    title: "Искусственный интеллект",
    description: "Мощная языковая модель для естественного общения с клиентами",
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Ответы 24/7",
    description: "Автоматические ответы на вопросы клиентов",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Персонализация",
    description: "Индивидуальный подход к каждому клиенту на основе его предпочтений",
  },
  {
    icon: <Handshake className="w-6 h-6" />,
    title: "Гибкость",
    description: "Индивидуальный подход к каждому бизнесу",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Рекомендации",
    description: "Умные рекомендации товаров на основе интересов клиента",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Быстрая интеграция",
    description: "Подключение к Telegram за 5 минут без сложных настроек",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4 text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gradient">
              Возможности платформы
            </h2>
            <p className="max-w-[900px] text-muted-foreground text-lg">
              InFlowBot предоставляет полный набор инструментов для автоматизации общения с клиентами и увеличения продаж
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg bg-background p-6 hover-glow"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    {feature.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-xl">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-primary/5 to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

