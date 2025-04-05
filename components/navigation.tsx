"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useState } from "react";

const navigation = [
  { name: "Возможности", href: "#features" },
  { name: "Как это работает", href: "#how-it-works" },
  { name: "Тренд будущего", href: "#future-trend" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 h-20">
        <div className="relative flex h-full items-center justify-between">
          {/* Логотип */}
          <motion.a
            href="/"
            className="text-xl font-bold text-gradient"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            NeoFlowBot
          </motion.a>

          {/* Десктопное меню */}
          <motion.div
            className="hidden md:flex items-center gap-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex gap-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <Button
              onClick={() => window.open("https://t.me/demomerchbot", "_blank")}
              className="hover-glow"
            >
              Попробовать
            </Button>
          </motion.div>

          {/* Мобильное меню */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-50"
            >
              <Menu className="h-5 w-5" />
            </Button>

            {isOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-background/80 backdrop-blur-sm"
              >
                <div className="fixed inset-0 w-full">
                  <div className="flex min-h-full items-center justify-center p-4">
                    <div className="w-full max-w-sm rounded-lg bg-background p-6 shadow-lg">
                      <div className="flex flex-col gap-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="text-lg text-foreground hover:text-primary transition-colors"
                          >
                            {item.name}
                          </a>
                        ))}
                        <Button
                          onClick={() => window.open("https://t.me/demomerchbot", "_blank")}
                          className="mt-4 w-full hover-glow"
                        >
                          Попробовать
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
} 