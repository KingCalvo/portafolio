"use client";

import { useState } from "react";
import {
  ChevronDown,
  Clock,
  LifeBuoy,
  MessageCircle,
  Wallet,
  Palette,
  Settings,
  MessagesSquare,
  CreditCard,
} from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function FAQ() {
  const t = useTranslations("faq");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    { icon: <Clock size={18} />, question: t("q1"), answer: t("a1") },
    { icon: <LifeBuoy size={18} />, question: t("q2"), answer: t("a2") },
    { icon: <MessageCircle size={18} />, question: t("q3"), answer: t("a3") },
    { icon: <Wallet size={18} />, question: t("q4"), answer: t("a4") },
    { icon: <Palette size={18} />, question: t("q5"), answer: t("a5") },
    { icon: <Settings size={18} />, question: t("q6"), answer: t("a6") },
    { icon: <MessagesSquare size={18} />, question: t("q7"), answer: t("a7") },
    { icon: <CreditCard size={18} />, question: t("q8"), answer: t("a8") },
  ];

  return (
    <section className="min-h-screen bg-background text-foreground py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center animate-fadeInUp">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            {t("title1")}
          </h1>

          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* FAQ */}
        <div className="mt-16 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-2xl border border-border p-5 cursor-pointer transition hover:shadow-md animate-fadeInUp"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => toggle(index)}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3 font-medium text-lg">
                    {/* Icono */}
                    <span className="flex items-center justify-center rounded-full border border-border bg-card p-2">
                      {faq.icon}
                    </span>

                    {faq.question}
                  </div>
                  <span
                    className={`flex items-center justify-center rounded-full border border-border bg-card p-1 shadow-sm transition-all duration-300 ${
                      isOpen ? "rotate-180 bg-muted" : ""
                    }`}
                  >
                    <ChevronDown size={18} className="text-muted-foreground" />
                  </span>
                </div>

                {/* Contenido */}
                <div
                  className={`grid transition-all duration-300 text-justify ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 mt-4"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 animate-fadeInUp">
          <div className="rounded-[2rem] border border-border p-8 sm:p-12 text-center bg-card shadow-sm">
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              {t("ctaTitle")}
            </h3>

            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t("ctaText")}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/services#contacto"
                className="inline-flex items-center justify-center rounded-full bg-primary-800 px-6 py-3 text-white font-medium transition hover:bg-primary-900 hover:-translate-y-0.5"
              >
                {t("ctaButton")}
              </Link>
            </div>
          </div>
        </div>

        {/* Animaciones */}
        <style jsx>{`
          .animate-fadeInUp {
            animation: fadeInUp 0.6s ease both;
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </section>
  );
}
