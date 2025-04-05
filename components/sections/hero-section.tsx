"use client"; // Указываем, что компонент является клиентским

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { BrainCircuit, TrendingUp, Sparkles } from "lucide-react";
import { useState } from "react";
import { DemoModal } from "../ui/demo-modal";
import Image from "next/image";

const features = [
  {
    icon: <BrainCircuit className="w-4 h-4" />,
    text: "ИИ-ассистент",
  },
  {
    icon: <TrendingUp className="w-4 h-4" />,
    text: "Увеличение продаж",
  },
  {
    icon: <Sparkles className="w-4 h-4" />,
    text: "Персонализация",
  },
];

export function HeroSection() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <section className="relative py-16 md:py-24 min-h-[90vh] flex items-center">
      {/* Фоновые элементы */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-slate-200/20 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
      </div>

      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Левая колонка с контентом */}
          <div className="flex flex-col space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <span>Новое поколение чат-ботов</span>
                <span className="px-2 py-0.5 rounded-full bg-primary text-white text-xs">Beta</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gradient">
                Умный бот для вашего бизнеса
              </h1>

              <p className="text-lg text-muted-foreground max-w-xl">
              NeoFlowBot использует искусственный интеллект для автоматизации общения с клиентами и увеличения продаж через персонализированные рекомендации
              </p>
            </motion.div>

            {/* Кнопки */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 w-full justify-start"
            >
              <Button
                className="w-full max-w-[280px] sm:max-w-[240px] mx-auto sm:mx-0 hover-glow group transition-transform transform hover:scale-105"
                size="lg"
                onClick={() => setIsDemoModalOpen(true)}
              >
                Заказать демо
              </Button>
            </motion.div>

            {/* Преимущества */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-muted-foreground"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary"
                >
                  {feature.icon}
                  <span>{feature.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Правая колонка с мокапом телефона */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative mx-auto w-full max-w-[366px] lg:ml-auto"
          >
            <div className="relative w-full max-w-[300px] lg:max-w-[400px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 blur-3xl rounded-full" />
              <div className="relative">
                <Image
                  src="/images/mockup.png"
                  alt="Bot Demo"
                  width={400}
                  height={800}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </section>
  );
}