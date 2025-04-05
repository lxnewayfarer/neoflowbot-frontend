"use client"

import { ShieldCheck, ClipboardPenLine, Zap, Settings } from "lucide-react"
import { motion } from "framer-motion"

export function HowItWorksSection() {
  const steps = [
    {
      icon: ClipboardPenLine,
      title: "1. Проектирование",
      description: "Проектируем сценарии поведения под ваши нужды",
    },
    {
      icon: Settings,
      title: "2. Интеграция",
      description: "Подключаем NeoFlowBot к вашим системам, настраиваем ИИ-ассистента",
    },
    {
      icon: ShieldCheck,
      title: "3. Тестирование",
      description: "Проводим тщательное тестирование всего функционала",
    },
    {
      icon: Zap,
      title: "4. Запуск",
      description: "Бот готов помогать клиентам и увеличивать ваши продажи 24/7",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  }

  return (
    <section id="how-it-works" className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-slate-200/20 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
      </div>
      <div className="container px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4 text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gradient">
            Простой запуск
            </h2>
            <p className="max-w-[900px] text-muted-foreground text-lg">
              Четыре шага для автоматизации продаж с помощью ИИ
            </p>
          </motion.div>
          </div>
        </motion.div>
        <motion.div 
          className="mx-auto grid max-w-6xl items-center gap-6 py-12 lg:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {steps.map((step) => (
            <motion.div
              key={step.title} 
              variants={item}
              className="relative flex flex-col items-center space-y-4 text-center"
            >
              <div className="relative">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 blur" />
                <div className="relative flex h-16 w-16 items-center justify-center rounded-lg bg-muted">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

