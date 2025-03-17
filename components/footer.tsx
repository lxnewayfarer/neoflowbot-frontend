import {  Mail, Send } from "lucide-react"; // Импорт иконок

export function Footer() {
  return (
    <footer className="w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Лого и описание */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gradient">InFlowBot</h3>
            <p className="text-sm text-muted-foreground">
              Умный бот для вашего бизнеса с искусственным интеллектом
            </p>
          </div>

          {/* Пустой блок для смещения вправо */}
          <div className="hidden md:block"></div>

          {/* Блок "Продукт" */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Продукт</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#features" className="hover:text-foreground transition-colors">
                  Возможности
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-foreground transition-colors">
                  Как это работает
                </a>
              </li>
              <li>
                <a href="#future-trend" className="hover:text-foreground transition-colors">
                  Тренд будущего
                </a>
              </li>
            </ul>
          </div>

          {/* Блок "Связаться с нами" */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Связаться с нами</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> {/* Иконка для email */}
                <p>inflowbot@yandex.ru</p>
              </li>
              <li className="flex items-center gap-2">
                <Send className="w-4 h-4" /> {/* Иконка для Telegram */}
                <p>inflowbot_support</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Копирайт */}
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>InFlowBot. 2025</p>
        </div>
      </div>
    </footer>
  );
}