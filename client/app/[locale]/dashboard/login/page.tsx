"use client";

import Link from "next/link";
import { useRipple } from "react-use-ripple";
import { useRef, useState } from "react";
import { ArrowRight, Mail, Smartphone } from "lucide-react";

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<"email" | "telegram">("email");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [magicLinkSent, setMagicLinkSent] = useState(false);
  
  const emailButtonRef = useRef<HTMLButtonElement>(null);
  const telegramButtonRef = useRef<HTMLButtonElement>(null);
  const googleButtonRef = useRef<HTMLButtonElement>(null);
  
  useRipple(emailButtonRef as React.RefObject<HTMLElement>, {
    rippleColor: "rgba(255, 255, 255, 0.2)",
  });
  
  useRipple(telegramButtonRef as React.RefObject<HTMLElement>, {
    rippleColor: "rgba(59, 130, 246, 0.2)",
  });
  
  useRipple(googleButtonRef as React.RefObject<HTMLElement>, {
    rippleColor: "rgba(234, 67, 53, 0.2)",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Здесь будет логика отправки magic link
    setTimeout(() => {
      setMagicLinkSent(true);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="max-w-md mx-auto mt-12 md:mt-24">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-white mb-2">Добро пожаловать в FeedbackRoom</h1>
        <p className="text-blue-100">
          Анализируйте обратную связь по вашим проектам
        </p>
      </div>

      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
        {/* Табы выбора метода входа */}
        <div className="flex mb-6 rounded-xl bg-white/10 p-1">
          <button
            ref={emailButtonRef}
            onClick={() => setActiveTab("email")}
            className={`flex-1 py-2 px-4 rounded-lg transition-all ${activeTab === "email" ? "bg-white text-blue-600" : "text-white"}`}
          >
            Email
          </button>
          <button
            ref={telegramButtonRef}
            onClick={() => setActiveTab("telegram")}
            className={`flex-1 py-2 px-4 rounded-lg transition-all ${activeTab === "telegram" ? "bg-blue-500 text-white" : "text-white"}`}
          >
            Telegram
          </button>
        </div>

        {/* Форма входа по email */}
        {activeTab === "email" && (
          <div>
            {magicLinkSent ? (
              <div className="text-center py-6">
                <Mail size={48} className="mx-auto mb-4 text-blue-300" />
                <h3 className="text-xl font-bold text-white mb-2">Проверьте ваш email</h3>
                <p className="text-blue-100 mb-6">
                  Мы отправили ссылку для входа на <span className="font-medium text-white">{email}</span>
                </p>
                <button
                  onClick={() => setMagicLinkSent(false)}
                  className="text-blue-300 hover:text-blue-200 font-medium"
                >
                  Отправить ссылку снова
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-blue-100 mb-1">
                    Email адрес
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/30"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium transition-all ${isLoading ? "bg-blue-400 cursor-not-allowed" : "bg-white text-blue-600 hover:bg-blue-50"}`}
                >
                  {isLoading ? (
                    "Отправка..."
                  ) : (
                    <>
                      <span>Отправить ссылку для входа</span>
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
            
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/20"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-2 bg-transparent text-sm text-blue-100">или войдите через</span>
              </div>
            </div>
            
            <button
              ref={googleButtonRef}
              className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white py-3 px-4 rounded-xl font-medium transition-all"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              <span>Продолжить с Google</span>
            </button>
          </div>
        )}

        {/* Вход через Telegram */}
        {activeTab === "telegram" && (
          <div className="text-center">
            <div className="mb-6">
              <Smartphone size={48} className="mx-auto mb-4 text-blue-300" />
              <h3 className="text-xl font-bold text-white mb-2">Войти через Telegram</h3>
              <p className="text-blue-100">
                Мы отправим код подтверждения в ваш Telegram аккаунт
              </p>
            </div>
            
            <button
              ref={telegramButtonRef}
              className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-xl font-medium transition-all mb-4"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.03-.08.05-.17-.05-.25s-.34-.04-.48-.03c-.2.03-3.39 2.14-4.78 3.02-.53.34-1.02.51-1.46.5-.47-.01-1.36-.26-2.03-.47-.82-.26-1.48-.4-1.42-.84.03-.27.4-.55 1.1-.85 4.48-1.96 7.37-3.22 9.8-3.85.85-.22 1.63-.14 2.03.2.55.46.4 1.49.35 1.69z"/>
              </svg>
              <span>Продолжить с Telegram</span>
            </button>
            
            <p className="text-blue-100 text-sm">
              У вас нет аккаунта? Мы создадим его автоматически
            </p>
          </div>
        )}
      </div>
      
      <div className="mt-6 text-center text-blue-100 text-sm">
        Продолжая, вы соглашаетесь с нашими{" "}
        <Link href="/terms" className="text-white hover:underline">
          Условиями использования
        </Link>{" "}
        и{" "}
        <Link href="/privacy" className="text-white hover:underline">
          Политикой конфиденциальности
        </Link>
      </div>
    </div>
  );
}