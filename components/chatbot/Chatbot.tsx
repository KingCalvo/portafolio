"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

type Message = {
  role: "user" | "bot";
  text: string;
  showCTA?: boolean;
};

export default function Chatbot() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const locale = useLocale();
  const endRef = useRef<HTMLDivElement>(null);

  const initialMessage =
    locale === "es"
      ? "¡Hola! 👋 Gracias por visitar mi portafolio. Puedes preguntarme sobre mis habilidades, proyectos o experiencia."
      : "Hi there! 👋 Thanks for visiting my portfolio. Feel free to ask me anything about my skills, projects, services or experience!";

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleOpen = () => {
    setOpen(true);
    if (messages.length === 0) {
      setMessages([{ role: "bot", text: initialMessage, showCTA: true }]);
    }
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user" as const, text: input };
    setMessages((prev) => [...prev, userMessage]);

    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        body: JSON.stringify({ message: input, locale }),
      });

      const data = await res.json();

      setMessages((prev) => [...prev, { role: "bot", text: data.reply }]);

      audioRef.current?.play();
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text:
            locale === "es" ? "Error al conectar 😢" : "Connection error 😢",
        },
      ]);
    }

    setLoading(false);
  };

  useEffect(() => {
    audioRef.current = new Audio("/sounds/messageChatbot.mp3");
  }, []);

  return (
    <>
      {/* Btn Flotante */}
      {!open && (
        <div
          onClick={handleOpen}
          className="fixed bottom-5 right-5 w-14 h-14 rounded-full shadow-lg cursor-pointer z-50 flex items-center justify-center"
        >
          <Image
            src="/images/contenido/avatar_SaludandoM.png"
            alt="chat"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
      )}

      {/* Chat */}
      {open && (
        <div className="fixed bottom-4 right-4 w-[360px] h-[520px] bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 bg-gray-100 border-b border-gray-200/60">
            <div className="flex items-center gap-2">
              <Image
                src="/images/contenido/avatar_SaludandoM.png"
                alt="chat"
                width={32}
                height={32}
                className="rounded-full"
              />
              <div>
                <p className="text-sm font-semibold">Enrique Calvo Garcia</p>
                <p className="text-xs text-gray-500 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Online
                </p>
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="text-gray-500 hover:text-black text-2xl w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200 transition cursor-pointer"
            >
              ×
            </button>
          </div>

          {/* Mensajes */}
          <div className="flex-1 overflow-y-auto px-3 py-2 space-y-2 bg-white">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex items-end gap-2 ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {/* Avatar BOT */}
                {msg.role === "bot" && (
                  <Image
                    src="/images/contenido/avatar_SaludandoM.png"
                    alt="chat"
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                )}

                <div
                  className={`px-3 py-2 text-sm max-w-[70%] ${
                    msg.role === "user"
                      ? "bg-blue-500 text-white rounded-2xl rounded-br-md"
                      : "bg-gray-100 text-black rounded-2xl rounded-bl-md"
                  }`}
                >
                  {msg.text}

                  {msg.role === "bot" && msg.showCTA && (
                    <Link
                      href="/services#contacto"
                      className="block mt-2 w-fit bg-blue-500 text-white text-xs px-3 py-1.5 rounded-full hover:bg-blue-600 transition"
                    >
                      {locale === "es" ? "Contrátame 🚀" : "Hire me 🚀"}
                    </Link>
                  )}
                </div>
              </div>
            ))}

            {/* Typing */}
            {loading && (
              <div className="flex items-center gap-2">
                <Image
                  src="/images/contenido/avatar_SaludandoM.png"
                  alt="chat"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <div className="bg-gray-100 px-3 py-2 rounded-2xl text-sm flex gap-1">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-200"></span>
                </div>
              </div>
            )}

            <div ref={endRef} />
          </div>

          <div className="p-2 border-t border-gray-200/60 flex items-center gap-2 bg-white">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm outline-none"
              placeholder={
                locale === "es"
                  ? "Escribe un mensaje..."
                  : "Type your message..."
              }
            />

            <button
              onClick={sendMessage}
              className="w-9 h-9 bg-blue-500 rounded-full flex items-center justify-center text-white text-lg hover:bg-blue-600 cursor-pointer"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
}
