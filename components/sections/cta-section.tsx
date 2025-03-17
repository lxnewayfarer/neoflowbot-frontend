"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function CTASection() {
  return (
    <section className="w-full py-8 md:py-16 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-foreground">
              Готовы автоматизировать продажи?
            </h2>
            <p className="mx-auto max-w-[600px] text-base sm:text-lg text-foreground/80">
              Подключите InFlowBot прямо сейчас и увеличьте эффективность вашего бизнеса
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button 
              size="lg" 
              className="w-full sm:w-auto px-8"
            >
              Начать бесплатно
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

