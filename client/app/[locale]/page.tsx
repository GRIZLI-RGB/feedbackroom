// 'use client'

// import { ArrowRight, Users, Bot, CheckCircle, LayoutDashboard, Settings, BarChart2, Zap, Shield, Code, Star, MessageCircle, Rocket } from "lucide-react";
// import { motion } from "motion/react";
// import Link from "next/link";

// // Анимационные компоненты
// const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.6, delay }}
//   >
//     {children}
//   </motion.div>
// );

// const ScaleIn = ({ children }: { children: React.ReactNode }) => (
//   <motion.div
//     initial={{ scale: 0.95, opacity: 0 }}
//     whileInView={{ scale: 1, opacity: 1 }}
//     viewport={{ once: true, margin: "-100px" }}
//     transition={{ duration: 0.6 }}
//   >
//     {children}
//   </motion.div>
// );

// export default function HomePage() {
//   return (
//     <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
//       {/* Шапка с навигацией */}
//       <header className="sticky top-0 z-50 bg-blue-700/80 backdrop-blur-md border-b border-blue-500/30">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             <div className="flex items-center">
//               <Link href="/" className="flex items-center">
//                 <MessageCircle className="h-8 w-8 text-blue-200" />
//                 <span className="ml-2 text-xl font-bold text-white">FeedbackRoom</span>
//               </Link>
//             </div>
//             <nav className="hidden md:flex items-center space-x-8">
//               <Link href="#features" className="text-blue-100 hover:text-white transition-colors">Возможности</Link>
//               <Link href="#how-it-works" className="text-blue-100 hover:text-white transition-colors">Как это работает</Link>
//               <Link href="#pricing" className="text-blue-100 hover:text-white transition-colors">Цены</Link>
//               <Link href="#testimonials" className="text-blue-100 hover:text-white transition-colors">Отзывы</Link>
//             </nav>
//             <div className="flex items-center">
//               <Link
//                 href="/login"
//                 className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-4 py-2 rounded-lg font-medium transition-all mr-3"
//               >
//                 Войти
//               </Link>
//               <Link
//                 href="/signup"
//                 className="bg-white text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg font-medium transition-all"
//               >
//                 Начать бесплатно
//               </Link>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="min-h-screen flex items-center pt-16 pb-12 px-4 relative overflow-hidden">
//         <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
//         <div className="max-w-6xl mx-auto text-center relative z-10">
//           <FadeIn delay={0.2}>
//             <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 border border-white/20 mb-6">
//               <Rocket className="w-4 h-4 mr-2 text-blue-300" />
//               <span className="text-blue-300 text-sm font-medium">Сбор отзывов стал проще</span>
//             </div>
//           </FadeIn>

//           <FadeIn delay={0.4}>
//             <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
//               Собирайте <span className="text-blue-200">ценные отзывы</span>
//               <br />
//               для ваших проектов
//             </h1>
//           </FadeIn>

//           <FadeIn delay={0.6}>
//             <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">
//               FeedbackRoom помогает получать качественную обратную связь от реальных пользователей,
//               независимо от размера вашей текущей аудитории
//             </p>
//           </FadeIn>

//           <FadeIn delay={0.8}>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Link
//                 href="/signup"
//                 className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-medium text-lg transition-all flex items-center justify-center gap-2"
//               >
//                 Начать бесплатно <ArrowRight size={20} />
//               </Link>
//               <Link
//                 href="#demo"
//                 className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-medium text-lg transition-all"
//               >
//                 Посмотреть демо
//               </Link>
//             </div>
//           </FadeIn>

//           <ScaleIn>
//             <div className="mt-16 border border-white/20 rounded-2xl overflow-hidden backdrop-blur-sm bg-white/5 p-1 max-w-4xl mx-auto">
//               <div className="bg-blue-700/50 rounded-xl aspect-video flex items-center justify-center">
//                 {/* [Заменить на скриншот дашборда] */}
//                 <div className="text-center p-8">
//                   <div className="inline-flex bg-blue-500/20 rounded-lg p-4 mb-4">
//                     <LayoutDashboard className="text-blue-200" size={40} />
//                   </div>
//                   <h3 className="text-xl font-medium text-white mb-2">Интерфейс FeedbackRoom</h3>
//                   <p className="text-blue-100">Создание проекта и настройка кампании</p>
//                 </div>
//               </div>
//             </div>
//           </ScaleIn>
//         </div>

//         {/* Анимированные элементы фона */}
//         <motion.div
//           animate={{
//             x: [0, 100, 0],
//             y: [0, -50, 0],
//             rotate: [0, 10, 0],
//           }}
//           transition={{
//             duration: 15,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-blue-400/20 blur-3xl -z-10"
//         />
//         <motion.div
//           animate={{
//             x: [0, -80, 0],
//             y: [0, 60, 0],
//             rotate: [0, -15, 0],
//           }}
//           transition={{
//             duration: 20,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: 2,
//           }}
//           className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-blue-300/20 blur-3xl -z-10"
//         />
//       </section>

//       {/* Как это работает */}
//       <section id="how-it-works" className="py-20 px-4 bg-blue-700/20">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <FadeIn>
//               <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Работает для любого сценария</h2>
//             </FadeIn>
//             <FadeIn delay={0.2}>
//               <p className="text-xl text-blue-100 max-w-3xl mx-auto">
//                 Независимо от того, есть у вас аудитория или нет — вы получите ценные отзывы
//               </p>
//             </FadeIn>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {/* Колонка 1 - Есть аудитория */}
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true, margin: "-100px" }}
//               transition={{ duration: 0.6 }}
//             >
//               <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 h-full">
//                 <div className="bg-blue-500/20 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
//                   <Users className="text-blue-300" size={24} />
//                 </div>
//                 <h3 className="text-2xl font-bold text-white mb-4">У вас есть аудитория</h3>
//                 <ul className="space-y-4">
//                   <li className="flex items-start gap-3">
//                     <CheckCircle className="text-blue-300 mt-1 flex-shrink-0" size={20} />
//                     <span className="text-blue-100">Встраиваемый виджет для вашего сайта/приложения</span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <CheckCircle className="text-blue-300 mt-1 flex-shrink-0" size={20} />
//                     <span className="text-blue-100">API для кастомной интеграции</span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <CheckCircle className="text-blue-300 mt-1 flex-shrink-0" size={20} />
//                     <span className="text-blue-100">Страницы отзывов на FeedbackRoom</span>
//                   </li>
//                 </ul>
//               </div>
//             </motion.div>

//             {/* Колонка 2 - Нет аудитории */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true, margin: "-100px" }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//             >
//               <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 h-full">
//                 <div className="bg-blue-400/20 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
//                   <Bot className="text-blue-200" size={24} />
//                 </div>
//                 <h3 className="text-2xl font-bold text-white mb-4">Нет аудитории? Не проблема</h3>
//                 <ul className="space-y-4">
//                   <li className="flex items-start gap-3">
//                     <CheckCircle className="text-blue-200 mt-1 flex-shrink-0" size={20} />
//                     <span className="text-blue-100">Закажите сбор отзывов у целевой аудитории</span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <CheckCircle className="text-blue-200 mt-1 flex-shrink-0" size={20} />
//                     <span className="text-blue-100">Настройте параметры (соотношение ботов/реальных пользователей)</span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <CheckCircle className="text-blue-200 mt-1 flex-shrink-0" size={20} />
//                     <span className="text-blue-100">Получите аналитику и выводы</span>
//                   </li>
//                 </ul>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Демонстрация продукта */}
//       <section id="demo" className="py-20 px-4 bg-blue-800/20">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <FadeIn>
//               <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Мощный инструмент в вашем дашборде</h2>
//             </FadeIn>
//             <FadeIn delay={0.2}>
//               <p className="text-xl text-blue-100 max-w-3xl mx-auto">
//                 Создавайте проекты, запускайте кампании и анализируйте отзывы в одном месте
//               </p>
//             </FadeIn>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <div className="space-y-8">
//                 {[
//                   {
//                     icon: <LayoutDashboard className="text-blue-300" size={24} />,
//                     title: "Интуитивный дашборд",
//                     text: "Все ваши проекты и кампании по сбору отзывов в одном месте с понятной аналитикой",
//                   },
//                   {
//                     icon: <Settings className="text-blue-200" size={24} />,
//                     title: "Гибкие настройки",
//                     text: "Настраивайте формы отзывов, критерии оценки и параметры кампаний",
//                   },
//                   {
//                     icon: <BarChart2 className="text-blue-300" size={24} />,
//                     title: "Детальная аналитика",
//                     text: "Визуализация данных, фильтры и экспорт результатов для глубокого анализа",
//                   },
//                 ].map((feature, i) => (
//                   <motion.div
//                     key={i}
//                     initial={{ opacity: 0, x: -20 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true, margin: "-50px" }}
//                     transition={{ duration: 0.5, delay: i * 0.1 }}
//                     className="flex gap-6"
//                   >
//                     <div className="bg-white/10 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 border border-white/20">
//                       {feature.icon}
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
//                       <p className="text-blue-100">{feature.text}</p>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>

//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               whileInView={{ scale: 1, opacity: 1 }}
//               viewport={{ once: true, margin: "-100px" }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="relative"
//             >
//               <div className="relative border border-white/20 rounded-2xl overflow-hidden backdrop-blur-sm bg-white/5 p-1">
//                 <div className="bg-blue-700/50 rounded-xl aspect-video flex items-center justify-center">
//                   {/* [Заменить на скриншот интерфейса] */}
//                   <div className="text-center p-8">
//                     <div className="inline-flex bg-blue-500/20 rounded-lg p-4 mb-4">
//                       <LayoutDashboard className="text-blue-200" size={40} />
//                     </div>
//                     <h3 className="text-xl font-medium text-white mb-2">Интерфейс FeedbackRoom</h3>
//                     <p className="text-blue-100">Создание проекта и настройка кампании</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Декоративные элементы */}
//               <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-blue-400/10 blur-3xl -z-10"></div>
//               <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-blue-300/10 blur-3xl -z-10"></div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Калькулятор стоимости */}
//       <section id="pricing" className="py-20 px-4 bg-blue-700/20">
//         <ScaleIn>
//           <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
//             <div className="text-center mb-10">
//               <h2 className="text-3xl font-bold text-white mb-3">Сколько стоит сбор отзывов?</h2>
//               <p className="text-blue-100">Рассчитайте стоимость кампании по вашим параметрам</p>
//             </div>

//             <div className="space-y-8">
//               <div>
//                 <label className="block text-sm font-medium text-blue-100 mb-2">Количество отзывов</label>
//                 <input type="range" min="10" max="500" step="10" className="w-full accent-blue-400" />
//                 <div className="flex justify-between mt-2 text-sm text-blue-100">
//                   <span>10</span>
//                   <span>100</span>
//                   <span>200</span>
//                   <span>300</span>
//                   <span>500</span>
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-blue-100 mb-2">
//                   Соотношение ботов/реальных пользователей
//                 </label>
//                 <select className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/30">
//                   <option>Только реальные пользователи (дороже)</option>
//                   <option>70% реальных / 30% ботов</option>
//                   <option>50% / 50%</option>
//                   <option>30% реальных / 70% ботов (эконом)</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-blue-100 mb-2">Дополнительные критерии оценки</label>
//                 <div className="flex flex-wrap gap-3">
//                   {["UX оценка", "UI оценка", "Функциональность", "Производительность", "Безопасность"].map(
//                     (item, i) => (
//                       <motion.button
//                         key={i}
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         className="bg-white/5 hover:bg-white/10 border border-white/20 text-white px-4 py-2 rounded-lg text-sm transition-all"
//                       >
//                         {item}
//                       </motion.button>
//                     )
//                   )}
//                 </div>
//               </div>

//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6 }}
//                 className="pt-6 border-t border-white/20"
//               >
//                 <div className="flex justify-between items-center">
//                   <div>
//                     <p className="text-blue-100">Примерная стоимость</p>
//                     <p className="text-3xl font-bold text-white">$120 - $180</p>
//                   </div>
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-xl font-medium transition-all"
//                   >
//                     Начать кампанию
//                   </motion.button>
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </ScaleIn>
//       </section>

//       {/* Преимущества */}
//       <section id="features" className="py-20 px-4 bg-blue-800/20">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <FadeIn>
//               <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Почему выбирают FeedbackRoom</h2>
//             </FadeIn>
//             <FadeIn delay={0.2}>
//               <p className="text-xl text-blue-100 max-w-3xl mx-auto">
//                 Все, что нужно для сбора и анализа обратной связи в одном сервисе
//               </p>
//             </FadeIn>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: <Zap className="text-blue-300" size={24} />,
//                 title: "Быстрый старт",
//                 text: "Начните собирать отзывы уже через 5 минут после регистрации",
//               },
//               {
//                 icon: <Shield className="text-blue-200" size={24} />,
//                 title: "Контроль качества",
//                 text: "Система проверки отзывов и фильтрации спама",
//               },
//               {
//                 icon: <Code className="text-blue-300" size={24} />,
//                 title: "Гибкие интеграции",
//                 text: "API, Webhooks и готовые виджеты для любой платформы",
//               },
//             ].map((benefit, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-50px" }}
//                 transition={{ duration: 0.5, delay: i * 0.1 }}
//                 className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center"
//               >
//                 <div className="bg-white/10 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-6 border border-white/20">
//                   {benefit.icon}
//                 </div>
//                 <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
//                 <p className="text-blue-100">{benefit.text}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Отзывы клиентов */}
//       <section id="testimonials" className="py-20 px-4 bg-blue-700/20">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-16">
//             <FadeIn>
//               <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Что говорят наши клиенты</h2>
//             </FadeIn>
//             <FadeIn delay={0.2}>
//               <p className="text-xl text-blue-100 max-w-3xl mx-auto">Реальные отзывы от реальных пользователей</p>
//             </FadeIn>
//           </div>

//           <div className="space-y-6">
//             {[
//               {
//                 name: "Алексей К., продуктовый дизайнер",
//                 text: "С помощью FeedbackRoom мы за неделю собрали больше отзывов, чем за предыдущие 2 месяца через рассылки. Качество фидбека потрясающее!",
//                 rating: 5,
//               },
//               {
//                 name: "Марина С., стартап-основатель",
//                 text: "Когда у нас не было аудитории, заказали сбор отзывов через сервис. Полученные данные помогли сделать pivoting до запуска — сэкономили кучу времени и денег!",
//                 rating: 5,
//               },
//             ].map((review, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-50px" }}
//                 transition={{ duration: 0.5, delay: i * 0.1 }}
//                 className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
//               >
//                 <div className="flex gap-2 mb-4">
//                   {[...Array(5)].map((_, j) => (
//                     <Star
//                       key={j}
//                       fill={j < review.rating ? "#93c5fd" : "none"}
//                       className="text-blue-300"
//                       size={20}
//                     />
//                   ))}
//                 </div>
//                 <p className="text-white mb-6 text-lg">"{review.text}"</p>
//                 <p className="text-blue-100 font-medium">{review.name}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-28 px-4 bg-gradient-to-br from-blue-600 to-blue-700 relative overflow-hidden">
//         <div className="absolute inset-0 bg-[url('/grid-dark.svg')] bg-center opacity-10"></div>
//         <div className="max-w-4xl mx-auto text-center relative z-10">
//           <FadeIn>
//             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Готовы улучшить свой продукт?</h2>
//           </FadeIn>
//           <FadeIn delay={0.2}>
//             <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
//               Начните собирать ценные отзывы уже сегодня — без кредитной карты и сложных настроек
//             </p>
//           </FadeIn>
//           <FadeIn delay={0.4}>
//             <Link
//               href="/signup"
//               className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-medium text-lg transition-all"
//             >
//               Создать аккаунт <ArrowRight size={20} />
//             </Link>
//           </FadeIn>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-blue-900/80 backdrop-blur-sm border-t border-blue-700 py-12 px-4">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid md:grid-cols-4 gap-8">
//             <div>
//               <div className="flex items-center mb-4">
//                 <MessageCircle className="h-6 w-6 text-blue-200 mr-2" />
//                 <span className="text-xl font-bold text-white">FeedbackRoom</span>
//               </div>
//               <p className="text-blue-100">
//                 Сервис для сбора и анализа обратной связи о ваших продуктах
//               </p>
//             </div>

//             <div>
//               <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Продукт</h4>
//               <ul className="space-y-2">
//                 <li>
//                   <Link href="#features" className="text-blue-100 hover:text-white transition-colors">
//                     Возможности
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#pricing" className="text-blue-100 hover:text-white transition-colors">
//                     Тарифы
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#how-it-works" className="text-blue-100 hover:text-white transition-colors">
//                     Как это работает
//                   </Link>
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Ресурсы</h4>
//               <ul className="space-y-2">
//                 <li>
//                   <Link href="/blog" className="text-blue-100 hover:text-white transition-colors">
//                     Блог
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/docs" className="text-blue-100 hover:text-white transition-colors">
//                     Документация
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/api" className="text-blue-100 hover:text-white transition-colors">
//                     API
//                   </Link>
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Контакты</h4>
//               <ul className="space-y-2">
//                 <li>
//                   <Link
//                     href="mailto:support@feedbackroom.com"
//                     className="text-blue-100 hover:text-white transition-colors"
//                   >
//                     support@feedbackroom.com
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="https://t.me/feedbackroom"
//                     className="text-blue-100 hover:text-white transition-colors"
//                   >
//                     Telegram
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/contact" className="text-blue-100 hover:text-white transition-colors">
//                     Форма обратной связи
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <div className="border-t border-blue-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
//             <p className="text-blue-100 text-sm">© {new Date().getFullYear()} FeedbackRoom. Все права защищены.</p>
//             <div className="flex gap-6 mt-4 md:mt-0">
//               <Link href="/privacy" className="text-blue-100 hover:text-white text-sm transition-colors">
//                 Конфиденциальность
//               </Link>
//               <Link href="/terms" className="text-blue-100 hover:text-white text-sm transition-colors">
//                 Условия
//               </Link>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

"use client";

import {
	ArrowRight,
	Users,
	Bot,
	CheckCircle,
	LayoutDashboard,
	Settings,
	BarChart2,
	Star,
	MessageCircle,
	Rocket,
	ChevronDown,
	Quote,
} from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

// Анимационные компоненты
const FadeIn = ({
	children,
	delay = 0,
}: {
	children: React.ReactNode;
	delay?: number;
}) => (
	<motion.div
		initial={{ opacity: 0, y: 20 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.6, delay }}
	>
		{children}
	</motion.div>
);

const ScaleIn = ({ children }: { children: React.ReactNode }) => (
	<motion.div
		initial={{ scale: 0.95, opacity: 0 }}
		whileInView={{ scale: 1, opacity: 1 }}
		viewport={{ once: true, margin: "-100px" }}
		transition={{ duration: 0.6 }}
	>
		{children}
	</motion.div>
);

// Кастомный Range Slider
const CustomRange = () => {
	return (
		<div className="relative w-full h-2 bg-blue-100 rounded-full mb-8">
			<div
				className="absolute h-2 bg-blue-600 rounded-full"
				style={{ width: "70%" }}
			></div>
			<div
				className="absolute -top-2 w-5 h-5 bg-white rounded-full shadow-md cursor-pointer border border-blue-200"
				style={{ left: "calc(70% - 10px)" }}
			>
				<div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 text-xs font-medium text-blue-800 bg-white px-2 py-1 rounded-lg whitespace-nowrap shadow-sm">
					140 отзывов
				</div>
			</div>
			<div className="flex justify-between mt-3 text-sm text-blue-600">
				<span>10</span>
				<span>100</span>
				<span>200</span>
				<span>300</span>
				<span>500</span>
			</div>
		</div>
	);
};

// Кастомный Select
const CustomSelect = () => {
	return (
		<div className="relative mb-6">
			<button className="w-full flex justify-between items-center bg-white hover:bg-blue-50 border border-blue-200 text-blue-800 px-4 py-3 rounded-xl text-left transition-all">
				<span>Только реальные пользователи</span>
				<ChevronDown className="text-blue-400" size={20} />
			</button>
		</div>
	);
};

export default function HomePage() {
	return (
		<div className="bg-white text-blue-900">
			{/* Шапка */}
			<header className="sticky top-0 z-50 bg-white shadow-sm">
				<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
					<Link href="/" className="flex items-center gap-2">
						<MessageCircle className="h-7 w-7 text-blue-600" />
						<span className="text-xl font-bold text-blue-800">
							FeedbackRoom
						</span>
					</Link>

					<nav className="hidden md:flex items-center gap-8">
						<Link
							href="#features"
							className="text-blue-600 hover:text-blue-800 font-medium"
						>
							Возможности
						</Link>
						<Link
							href="#how-it-works"
							className="text-blue-600 hover:text-blue-800 font-medium"
						>
							Как это работает
						</Link>
						<Link
							href="#pricing"
							className="text-blue-600 hover:text-blue-800 font-medium"
						>
							Цены
						</Link>
						<Link
							href="#testimonials"
							className="text-blue-600 hover:text-blue-800 font-medium"
						>
							Отзывы
						</Link>
					</nav>

					<div className="flex items-center gap-4">
						<Link
							href="/login"
							className="px-4 py-2 text-blue-600 hover:text-blue-800"
						>
							Войти
						</Link>
						<Link
							href="/signup"
							className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium"
						>
							Начать бесплатно
						</Link>
					</div>
				</div>
			</header>

			{/* Hero Section - Синий */}
			<section className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white overflow-hidden">
				<div className="max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center gap-12">
					<div className="md:w-1/2">
						<FadeIn delay={0.2}>
							<div className="inline-flex items-center bg-white/20 rounded-full px-4 py-1.5 mb-6">
								<Rocket className="w-4 h-4 mr-2 text-blue-200" />
								<span className="text-blue-100 text-sm font-medium">
									Сбор отзывов стал проще
								</span>
							</div>
						</FadeIn>

						<FadeIn delay={0.4}>
							<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
								Собирайте{" "}
								<span className="text-blue-200">
									ценные отзывы
								</span>{" "}
								для ваших проектов
							</h1>
						</FadeIn>

						<FadeIn delay={0.6}>
							<p className="text-lg text-blue-100 mb-10 max-w-xl">
								Получайте качественную обратную связь от
								реальных пользователей с минимальными усилиями
							</p>
						</FadeIn>

						<FadeIn delay={0.8}>
							<div className="flex flex-col sm:flex-row gap-4">
								<Link
									href="/signup"
									className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-medium text-lg flex items-center justify-center gap-2 shadow-lg"
								>
									Начать бесплатно <ArrowRight size={20} />
								</Link>
								<Link
									href="#demo"
									className="bg-white/10 hover:bg-white/20 border border-white text-white px-8 py-4 rounded-xl font-medium text-lg flex items-center justify-center gap-2"
								>
									Посмотреть демо
								</Link>
							</div>
						</FadeIn>
					</div>

					<div className="md:w-1/2">
						<ScaleIn>
							<div className="bg-white/10 border border-white/20 rounded-2xl overflow-hidden backdrop-blur-sm">
								<div className="aspect-video flex items-center justify-center p-8">
									<div className="text-center">
										<div className="inline-flex bg-white/20 rounded-lg p-4 mb-4">
											<LayoutDashboard
												className="text-white"
												size={40}
											/>
										</div>
										<h3 className="text-xl font-medium mb-2">
											Интерфейс FeedbackRoom
										</h3>
										<p className="text-blue-100">
											Создание проекта и настройка
											кампании
										</p>
									</div>
								</div>
							</div>
						</ScaleIn>
					</div>
				</div>
			</section>

			{/* Как это работает - Белый */}
			<section id="how-it-works" className="py-20 bg-white">
				<div className="max-w-7xl mx-auto px-6">
					<div className="text-center mb-16">
						<FadeIn>
							<h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
								Как работает FeedbackRoom
							</h2>
						</FadeIn>
						<FadeIn delay={0.2}>
							<p className="text-lg text-blue-600 max-w-3xl mx-auto">
								Простое решение для сбора обратной связи в любом
								формате
							</p>
						</FadeIn>
					</div>

					<div className="grid md:grid-cols-2 gap-8">
						{/* Колонка 1 */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true, margin: "-100px" }}
							className="bg-blue-50 rounded-2xl p-8 border border-blue-100"
						>
							<div className="bg-white w-14 h-14 rounded-lg flex items-center justify-center mb-6 shadow-sm">
								<Users className="text-blue-600" size={24} />
							</div>
							<h3 className="text-2xl font-bold text-blue-800 mb-4">
								У вас есть аудитория
							</h3>
							<ul className="space-y-4">
								<li className="flex items-start gap-3">
									<CheckCircle
										className="text-blue-500 mt-1 flex-shrink-0"
										size={20}
									/>
									<span className="text-blue-700">
										Встраиваемый виджет для сайта/приложения
									</span>
								</li>
								<li className="flex items-start gap-3">
									<CheckCircle
										className="text-blue-500 mt-1 flex-shrink-0"
										size={20}
									/>
									<span className="text-blue-700">
										Простая интеграция за 5 минут
									</span>
								</li>
								<li className="flex items-start gap-3">
									<CheckCircle
										className="text-blue-500 mt-1 flex-shrink-0"
										size={20}
									/>
									<span className="text-blue-700">
										Гибкие настройки форм сбора
									</span>
								</li>
							</ul>
						</motion.div>

						{/* Колонка 2 */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.1 }}
							viewport={{ once: true, margin: "-100px" }}
							className="bg-blue-50 rounded-2xl p-8 border border-blue-100"
						>
							<div className="bg-white w-14 h-14 rounded-lg flex items-center justify-center mb-6 shadow-sm">
								<Bot className="text-blue-600" size={24} />
							</div>
							<h3 className="text-2xl font-bold text-blue-800 mb-4">
								Нет аудитории?
							</h3>
							<ul className="space-y-4">
								<li className="flex items-start gap-3">
									<CheckCircle
										className="text-blue-500 mt-1 flex-shrink-0"
										size={20}
									/>
									<span className="text-blue-700">
										Закажите отзывы у целевой аудитории
									</span>
								</li>
								<li className="flex items-start gap-3">
									<CheckCircle
										className="text-blue-500 mt-1 flex-shrink-0"
										size={20}
									/>
									<span className="text-blue-700">
										Настройте параметры кампании
									</span>
								</li>
								<li className="flex items-start gap-3">
									<CheckCircle
										className="text-blue-500 mt-1 flex-shrink-0"
										size={20}
									/>
									<span className="text-blue-700">
										Получайте аналитику в реальном времени
									</span>
								</li>
							</ul>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Демонстрация продукта - Синий */}
			<section
				id="demo"
				className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white"
			>
				<div className="max-w-7xl mx-auto px-6">
					<div className="text-center mb-16">
						<FadeIn>
							<h2 className="text-3xl md:text-4xl font-bold mb-4">
								Мощный инструмент аналитики
							</h2>
						</FadeIn>
						<FadeIn delay={0.2}>
							<p className="text-lg text-blue-100 max-w-3xl mx-auto">
								Все необходимые данные в одном дашборде
							</p>
						</FadeIn>
					</div>

					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div>
							<div className="space-y-8">
								{[
									{
										icon: (
											<LayoutDashboard
												className="text-blue-200"
												size={24}
											/>
										),
										title: "Интуитивный интерфейс",
										text: "Понятная аналитика без сложных настроек",
									},
									{
										icon: (
											<Settings
												className="text-blue-200"
												size={24}
											/>
										),
										title: "Гибкие фильтры",
										text: "Сортировка по дате, рейтингу и ключевым словам",
									},
									{
										icon: (
											<BarChart2
												className="text-blue-200"
												size={24}
											/>
										),
										title: "Наглядные графики",
										text: "Визуализация данных для быстрого анализа",
									},
								].map((feature, i) => (
									<motion.div
										key={i}
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										transition={{
											duration: 0.5,
											delay: i * 0.1,
										}}
										viewport={{
											once: true,
											margin: "-50px",
										}}
										className="flex gap-6"
									>
										<div className="bg-white/10 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 border border-white/20">
											{feature.icon}
										</div>
										<div>
											<h3 className="text-xl font-bold mb-2">
												{feature.title}
											</h3>
											<p className="text-blue-100">
												{feature.text}
											</p>
										</div>
									</motion.div>
								))}
							</div>
						</div>

						<ScaleIn>
							<div className="bg-white/10 border border-white/20 rounded-2xl overflow-hidden backdrop-blur-sm">
								<div className="aspect-video flex items-center justify-center p-8">
									<div className="text-center">
										<div className="inline-flex bg-white/20 rounded-lg p-4 mb-4">
											<BarChart2
												className="text-white"
												size={40}
											/>
										</div>
										<h3 className="text-xl font-medium mb-2">
											Аналитика FeedbackRoom
										</h3>
										<p className="text-blue-100">
											Графики и статистика
										</p>
									</div>
								</div>
							</div>
						</ScaleIn>
					</div>
				</div>
			</section>

			{/* Калькулятор стоимости - Белый */}
			<section id="pricing" className="py-20 bg-white">
				<div className="max-w-4xl mx-auto px-6">
					<ScaleIn>
						<div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 shadow-sm">
							<div className="text-center mb-10">
								<h2 className="text-3xl font-bold text-blue-800 mb-3">
									Сколько стоит сбор отзывов?
								</h2>
								<p className="text-blue-600">
									Рассчитайте стоимость за несколько кликов
								</p>
							</div>

							<div className="space-y-6">
								<div>
									<label className="block text-sm font-medium text-blue-700 mb-3">
										Количество отзывов
									</label>
									<CustomRange />
								</div>

								<div>
									<label className="block text-sm font-medium text-blue-700 mb-3">
										Тип аудитории
									</label>
									<CustomSelect />
								</div>

								<div>
									<label className="block text-sm font-medium text-blue-700 mb-3">
										Дополнительные опции
									</label>
									<div className="flex flex-wrap gap-3">
										{[
											"UX оценка",
											"UI оценка",
											"Детальный отзыв",
											"Видео-отзыв",
										].map((item, i) => (
											<motion.button
												key={i}
												whileHover={{ scale: 1.05 }}
												whileTap={{ scale: 0.95 }}
												className="bg-white hover:bg-blue-100 border border-blue-200 text-blue-700 px-4 py-2 rounded-lg text-sm transition-all shadow-sm"
											>
												{item}
											</motion.button>
										))}
									</div>
								</div>

								<motion.div
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6 }}
									viewport={{ once: true }}
									className="pt-6 border-t border-blue-200"
								>
									<div className="flex flex-col md:flex-row justify-between items-center gap-4">
										<div>
											<p className="text-blue-600">
												Примерная стоимость
											</p>
											<p className="text-3xl font-bold text-blue-800">
												$120 - $180
											</p>
										</div>
										<motion.button
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.95 }}
											className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all w-full md:w-auto shadow-lg"
										>
											Начать кампанию
										</motion.button>
									</div>
								</motion.div>
							</div>
						</div>
					</ScaleIn>
				</div>
			</section>

			{/* Отзывы клиентов - Синий */}
			<section
				id="testimonials"
				className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white"
			>
				<div className="max-w-6xl mx-auto px-6">
					<div className="text-center mb-16">
						<FadeIn>
							<h2 className="text-3xl md:text-4xl font-bold mb-4">
								Отзывы наших клиентов
							</h2>
						</FadeIn>
						<FadeIn delay={0.2}>
							<p className="text-lg text-blue-100 max-w-3xl mx-auto">
								Реальные результаты от реальных пользователей
							</p>
						</FadeIn>
					</div>

					<div className="grid md:grid-cols-2 gap-6">
						{[
							{
								text: "FeedbackRoom помог нам увеличить количество отзывов в 3 раза. Качество аналитики на уровне enterprise-решений, но с человеческим лицом.",
								author: "Алексей Ковалев",
								role: "Продуктовый дизайнер",
								rating: 5,
							},
							{
								text: "Когда у нас не было аудитории, сервис помог собрать первые 200 отзывов. Это сэкономило нам 2 месяца работы и $15,000 бюджета.",
								author: "Марина Смирнова",
								role: "Основатель стартапа",
								rating: 5,
							},
						].map((review, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: i * 0.1 }}
								viewport={{ once: true, margin: "-50px" }}
								className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
							>
								<div className="flex gap-2 mb-4">
									{[...Array(5)].map((_, j) => (
										<Star
											key={j}
											fill={
												j < review.rating
													? "#93c5fd"
													: "none"
											}
											className="text-blue-300"
											size={20}
										/>
									))}
								</div>
								<Quote className="text-white/20 w-8 h-8 mb-4" />
								<p className="mb-6 text-lg">
									{'"'}
									{review.text}
									{'"'}
								</p>
								<div>
									<p className="font-medium">
										{review.author}
									</p>
									<p className="text-blue-200 text-sm">
										{review.role}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section - Белый */}
			<section className="py-28 bg-white">
				<div className="max-w-4xl mx-auto px-6 text-center">
					<div className="bg-blue-50 rounded-2xl p-12 border-2 border-blue-100">
						<FadeIn>
							<h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">
								Готовы улучшить свой продукт?
							</h2>
						</FadeIn>
						<FadeIn delay={0.2}>
							<p className="text-lg text-blue-600 mb-10 max-w-2xl mx-auto">
								Начните собирать ценные отзывы уже сегодня — без
								кредитной карты и сложных настроек
							</p>
						</FadeIn>
						<FadeIn delay={0.4}>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<Link
									href="/signup"
									className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium text-lg transition-all flex items-center justify-center gap-2 shadow-lg"
								>
									Начать бесплатно <ArrowRight size={20} />
								</Link>
								<Link
									href="/demo"
									className="bg-white hover:bg-blue-50 border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-medium text-lg transition-all flex items-center justify-center gap-2"
								>
									Запросить демо
								</Link>
							</div>
						</FadeIn>
					</div>
				</div>
			</section>

			{/* Footer - Темный */}
			<footer className="bg-blue-900 text-white py-12">
				<div className="max-w-7xl mx-auto px-6">
					<div className="grid md:grid-cols-4 gap-8">
						<div>
							<div className="flex items-center mb-4">
								<MessageCircle className="h-6 w-6 text-blue-300 mr-2" />
								<span className="text-xl font-bold">
									FeedbackRoom
								</span>
							</div>
							<p className="text-blue-300">
								Профессиональный инструмент для сбора обратной
								связи
							</p>
						</div>

						<div>
							<h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-blue-200">
								Продукт
							</h4>
							<ul className="space-y-2">
								<li>
									<Link
										href="#features"
										className="text-blue-300 hover:text-white"
									>
										Возможности
									</Link>
								</li>
								<li>
									<Link
										href="#pricing"
										className="text-blue-300 hover:text-white"
									>
										Цены
									</Link>
								</li>
								<li>
									<Link
										href="#how-it-works"
										className="text-blue-300 hover:text-white"
									>
										Как это работает
									</Link>
								</li>
							</ul>
						</div>

						<div>
							<h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-blue-200">
								Ресурсы
							</h4>
							<ul className="space-y-2">
								<li>
									<Link
										href="/blog"
										className="text-blue-300 hover:text-white"
									>
										Блог
									</Link>
								</li>
								<li>
									<Link
										href="/docs"
										className="text-blue-300 hover:text-white"
									>
										Документация
									</Link>
								</li>
								<li>
									<Link
										href="/api"
										className="text-blue-300 hover:text-white"
									>
										API
									</Link>
								</li>
							</ul>
						</div>

						<div>
							<h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-blue-200">
								Контакты
							</h4>
							<ul className="space-y-2">
								<li>
									<Link
										href="mailto:support@feedbackroom.com"
										className="text-blue-300 hover:text-white"
									>
										support@feedbackroom.com
									</Link>
								</li>
								<li>
									<Link
										href="https://t.me/feedbackroom"
										className="text-blue-300 hover:text-white"
									>
										Telegram
									</Link>
								</li>
							</ul>
						</div>
					</div>

					<div className="border-t border-blue-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
						<p className="text-blue-300 text-sm">
							© {new Date().getFullYear()} FeedbackRoom. Все права
							защищены.
						</p>
						<div className="flex gap-6 mt-4 md:mt-0">
							<Link
								href="/privacy"
								className="text-blue-300 hover:text-white text-sm"
							>
								Конфиденциальность
							</Link>
							<Link
								href="/terms"
								className="text-blue-300 hover:text-white text-sm"
							>
								Условия
							</Link>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
