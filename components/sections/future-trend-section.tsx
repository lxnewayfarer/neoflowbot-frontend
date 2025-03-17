import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Users, Send } from "lucide-react";
import Link from "next/link";

export function FutureTrendSection() {
  return (
    <section id="future-trend" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Тренд будущего
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Персонализированный подход к каждому клиенту - ключ к успеху в современном бизнесе
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="group relative overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
            <CardContent className="p-6">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-blue-600">64%</h3>
              <p className="text-lg font-semibold mb-4">Выбор большинства</p>
              <p className="text-gray-600 leading-relaxed">
                Клиентов <Link href="https://vc.ru/services/1771021-konfidencialnost-i-personalizaciya-oksyumoron-ili-novaya-norma" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">предпочитают бренды с персонализированным подходом</Link> к взаимодействию. Это не просто статистика – это голос ваших потенциальных клиентов, которые ждут индивидуального подхода.
              </p>
              <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-blue-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </CardContent>
          </Card>
          
          <Card className="group relative overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
            <CardContent className="p-6">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-green-600">28.6%</h3>
              <p className="text-lg font-semibold mb-4">Реальная конверсия</p>
              <p className="text-gray-600 leading-relaxed">
                Успешный <Link href="https://nanosemantics.ai/customers/16" className="text-green-600 hover:underline" target="_blank" rel="noopener noreferrer">кейс Нейросемантики</Link> промо компании Ford Kuga показывает, что почти треть клиентов, взаимодействовавших с умным ботом, оформили предварительный заказ. Это доказанная эффективность!
              </p>
              <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-green-400 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </CardContent>
          </Card>
          
          <Card className="group relative overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
            <CardContent className="p-6">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <Send className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-indigo-600">90.57 млн</h3>
              <p className="text-lg font-semibold mb-4">Огромная аудитория</p>
              <p className="text-gray-600 leading-relaxed">
                Пользователей <Link href="https://inclient.ru/social-network-ru-digest/" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">Telegram в России</Link> – это ваша потенциальная аудитория. Платформа продолжает неуклонно расти, предоставляя безграничные возможности для развития вашего бизнеса.
              </p>
              <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-indigo-400 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </CardContent>
          </Card>
        </div>
        <div className="mt-16 text-center">
          <p className="mx-auto max-w-[800px] text-gray-600 md:text-xl/relaxed lg:text-xl/relaxed xl:text-2xl/relaxed font-medium">
            Сделайте шаг в будущее — автоматизируйте общение с клиентами и создайте уникальный опыт с помощью умных ботов в Telegram!
          </p>
        </div>
      </div>
    </section>
  );
} 