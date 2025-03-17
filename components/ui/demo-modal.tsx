"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [company, setCompany] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/demo_requests`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, contact, company }),
      });

      if (!response.ok) {
        throw new Error("Ошибка при отправке формы");
      }

      toast.success("Заявка отправлена", {
        description: "Мы свяжемся с вами в течение нескольких дней",
      });
      onClose();
      setName("");
      setContact("");
    } catch (error) {
      toast.error("Ошибка", {
        description: "Не удалось отправить заявку. Пожалуйста, попробуйте позже",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Заказать демо</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
            <Label htmlFor="name">Как вас зовут</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Введите ваше имя"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact">Как с вами связаться</Label>
            <Input
              id="contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
              placeholder="Введите ваш e-mail или telegram"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Ваша компания</Label>
            <Input
              id="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
              placeholder="Компания или сфера деятельности"
            />
          </div>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              В течение нескольких дней мы свяжемся с вами
            </p>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Отправка..." : "Отправить"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
} 