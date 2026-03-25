import React, { useState, useEffect, useRef } from 'react';
import { Bot, X, Send, User, MessageCircle } from 'lucide-react';
import auraLogo from '@/assets/aura-logo2.png';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

type Message = {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  perguntas?: string[];
  isTypingEffect?: boolean;
};

const TypewriterText = ({ text, onComplete }: { text: string, onComplete?: () => void }) => {
  const [displayedText, setDisplayedText] = useState('');
  const onCompleteRef = useRef(onComplete);

  // Keep ref updated without triggering re-renders
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    setDisplayedText(''); // Reset on new text
    if (!text) return;
    
    // Check if the text is already fully rendered to prevent restarting unnecessarily
    let currentLength = 0;
    
    const interval = setInterval(() => {
      setDisplayedText((prev) => {
        currentLength = prev.length + 1;
        const nextContent = text.slice(0, currentLength);
        
        if (nextContent === text) {
          clearInterval(interval);
          if (onCompleteRef.current) setTimeout(onCompleteRef.current, 0);
        }
        return nextContent;
      });
    }, 15); // Speed of typing

    return () => clearInterval(interval);
  }, [text]); // Removed onComplete to prevent restarting when parent re-renders

  return <span>{displayedText}</span>;
};

const generateSessionId = () => {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return Math.random().toString(36).substring(2, 15) + Date.now().toString(36);
};

export default function ChatBot() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId, setSessionId] = useState<string>('');
  const [showRobotOptions, setShowRobotOptions] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const webhookUrl = 'https://n8n-comercial.aurabs.com.br/webhook/website-chat';

  // 30 seconds timer for the robot to appear
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 15000); // 30 seconds

    return () => clearTimeout(timer);
  }, []);

  // Toggle body class when chat is open to hide other overlapping elements (like WhatsApp button)
  useEffect(() => {
    if (isChatOpen) {
      document.body.classList.add('chat-open');
    } else {
      document.body.classList.remove('chat-open');
    }
    
    return () => {
      document.body.classList.remove('chat-open');
    };
  }, [isChatOpen]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const handleOpenChat = () => {
    setIsVisible(false);
    setIsChatOpen(true);
    if (!sessionId) {
      setSessionId(generateSessionId());
    }
  };

  const handleDismissRobot = () => {
    setIsVisible(false);
    setIsDismissed(true);
  };

  const handleCloseChat = () => {
    // Set UI states immediately so it doesn't wait for the network request
    setIsChatOpen(false);
    setIsDismissed(true); // Show the small reopen button
    
    // Send "fim da conversa" to webhook in the background
    if (messages.length > 0) {
      // Create a copy of the session ID since we are about to reset it
      const currentSessionId = sessionId;
      
      fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: 'fim da conversa', sessionId: currentSessionId }),
      }).catch(error => console.error('Error closing chat:', error));
    }
    
    setMessages([]); // Clear memory
    setSessionId(''); // Reset context for next chat
  };

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    const newUserMessage: Message = { id: Date.now().toString(), sender: 'user', text };
    setMessages(prev => [...prev, newUserMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, sessionId }),
      });

      if (!response.ok) throw new Error('Network response was not ok');

      const data = await response.json();
      
      setIsTyping(false);
      
      // Handle the case where the webhook sends back multiple responses in an array, 
      // or a single string. Assume it returns { messages: [...] } or { reply: "..." }
      
      // For now, let's assume it replies with a JSON that might have a 'reply' or 'output' field,
      // or it might return an array of strings. We'll adapt based on typical n8n structures.
      let botMessages: Message[] = [];
      
      // Check for the specific new structure: { data: [{ resposta: "...", perguntas: [...] }] }
      // Or if it comes wrapped in an array: [{ data: [{ resposta: "...", perguntas: [...] }] }]
      const parsedData = Array.isArray(data) ? data[0] : data;
      
      if (parsedData?.data && Array.isArray(parsedData.data)) {
        botMessages = parsedData.data.map((item: { resposta?: string; perguntas?: string[] }, i: number) => ({
          id: (Date.now() + i + 1).toString(),
          sender: 'bot',
          text: item.resposta || '',
          perguntas: item.perguntas || [],
          isTypingEffect: true,
        }));
      } else {
        // Fallback parsing
        let botReplies: string[] = [];
        if (Array.isArray(data)) {
          botReplies = data.map(item => typeof item === 'string' ? item : item.text || item.message || JSON.stringify(item));
        } else if (data.reply) {
           botReplies = [data.reply];
        } else if (data.response) {
           botReplies = [data.response];
        } else if (data.output) {
           botReplies = [data.output];
        } else {
           botReplies = [JSON.stringify(data)]; // Fallback
        }

        botMessages = botReplies.map((reply, i) => ({
          id: (Date.now() + i + 1).toString(),
          sender: 'bot',
          text: reply,
          isTypingEffect: true,
        }));
      }

      setMessages(prev => [...prev, ...botMessages]);

    } catch (error) {
      console.error('Error sending message:', error);
      setIsTyping(false);
      setMessages(prev => [...prev, { id: Date.now().toString(), sender: 'bot', text: 'Desculpe, ocorreu um erro ao conectar com o servidor.', isTypingEffect: true }]);
    }
  };

  const handleSendSuggestion = (text: string, msgId: string) => {
    // Remove the suggestions from the UI immediately
    setMessages(prev => prev.map(m => m.id === msgId ? { ...m, perguntas: [] } : m));
    handleSendMessage(text);
  };

  const suggestedQuestions = [
    "O que diabos essa tal de Aura faz?",
    "Essa I.A de vocês funciona mesmo?",
    "Quero colocar na minha empresa isso daí."
  ];

  return (
    <>
      {/* Floating Robot Popup */}
      {!isChatOpen && isVisible && !isDismissed && (
        <div className="fixed bottom-24 right-0 z-50 flex items-end translate-x-0 transition-transform duration-700 ease-out animate-slide-in-right">
          <div className="flex flex-col items-end mr-4 mb-4 gap-2">
            {/* Speech Bubble */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl rounded-br-none shadow-2xl max-w-[280px] origin-bottom-right animate-fade-in-up">
              <p className="text-white text-sm mb-3 min-h-[60px]">
                <TypewriterText 
                  text="Opa, deve ser chato ficar só lendo as coisas né. O que acha de conversar comigo no lugar?" 
                  onComplete={() => setShowRobotOptions(true)}
                />
              </p>
              
              <div className={`flex flex-col gap-2 transition-all duration-500 overflow-hidden ${showRobotOptions ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <Button 
                  onClick={handleOpenChat}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-lg text-xs w-full justify-start h-auto py-2 whitespace-normal text-left"
                >
                  Uau! Vou poupar meu tempo e perguntar logo o que quero saber.
                </Button>
                <Button 
                  onClick={handleDismissRobot}
                  variant="outline" 
                  className="border-white/20 hover:bg-white/10 text-white/70 hover:text-white text-xs w-full justify-start h-auto py-2"
                >
                  Xô, dá o fora da minha tela.
                </Button>
              </div>
            </div>
            
            {/* Robot character */}
            <div className="relative group cursor-pointer" onClick={handleOpenChat}>
              {/* Arm holding the side */}
              <div className="absolute -right-4 top-1/2 w-8 h-4 bg-purple-500 rounded-full blur-sm opacity-50 z-0 animate-pulse"></div>
              
              <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 border border-purple-500/30 p-4 rounded-3xl shadow-[0_0_30px_rgba(168,85,247,0.3)] relative z-10 animate-wave origin-bottom">
                <Bot className="w-12 h-12 text-purple-400" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Reopen Button (above whatsapp usually, which is bottom-4 right-4, let's put it bottom-24 right-4) */}
      {!isChatOpen && isDismissed && (
        <button 
          onClick={() => { 
            setIsDismissed(false); 
            setIsChatOpen(true); 
            if (!sessionId) setSessionId(generateSessionId());
          }}
          className="fixed bottom-24 right-6 z-40 bg-gradient-to-br from-purple-600 to-pink-600 p-3 rounded-full shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 transition-all outline-none border-none group"
          aria-label="Reabrir chat"
        >
          <MessageCircle className="w-6 h-6 text-white" />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-neutral-900 border border-white/10 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Falar com a Aura
          </span>
        </button>
      )}

      {/* Full Screen Chat Window */}
      {isChatOpen && (
        <div className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex flex-col animate-fade-in sm:p-4 md:p-8 lg:p-12">
          <div className="bg-neutral-950 border border-white/10 shadow-2xl rounded-2xl flex flex-col w-full h-full max-w-4xl mx-auto overflow-hidden relative">
            
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/5 bg-neutral-900/50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/5 p-1 border border-white/10 flex items-center justify-center">
                  <img src={auraLogo} alt="Aura Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-white font-medium flex items-center gap-2">
                    Aura
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  </h3>
                  <p className="text-xs text-neutral-400">Assistente Virtual</p>
                </div>
              </div>
              <button 
                onClick={handleCloseChat}
                className="p-2 rounded-lg hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
                aria-label="Fechar chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Warning Note */}
            {messages.length === 0 && (
              <div className="bg-yellow-500/10 border-b border-yellow-500/20 p-2 text-center text-xs text-yellow-200/80 flex-shrink-0">
                Aviso: O histórico desta conversa será permanentemente apagado ao fechar esta janela.
              </div>
            )}

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6 flex flex-col gap-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              
              {messages.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center max-w-md mx-auto fade-in">
                  <div className="w-20 h-20 mb-6 relative">
                    <div className="absolute inset-0 bg-purple-500/20 rounded-full animate-ping"></div>
                    <img src={auraLogo} alt="Aura Logo" className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
                  </div>
                  <h2 className="text-2xl font-semibold text-white mb-2">Como posso ajudar?</h2>
                  <p className="text-neutral-400 mb-8 text-sm">
                    Sou a assistente virtual inteligente da Aurahub. Escolha uma das opções abaixo ou digite sua pergunta.
                  </p>
                  
                  <div className="flex flex-col gap-3 w-full">
                    {suggestedQuestions.map((q, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSendMessage(q)}
                        className="text-left px-4 py-3 bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/10 rounded-xl text-sm text-neutral-300 transition-all hover:translate-x-1"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  {messages.map((msg) => (
                    <div key={msg.id} className="flex flex-col w-full">
                      <div className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up w-full`}>
                        <div className={`flex gap-3 max-w-[85%] md:max-w-[75%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                          {/* Avatar */}
                          <div className="shrink-0 mt-1">
                            {msg.sender === 'bot' ? (
                               <div className="w-8 h-8 rounded-full bg-neutral-800 border border-purple-500/30 flex items-center justify-center p-1.5 shadow-[0_0_10px_rgba(168,85,247,0.2)]">
                                 <img src={auraLogo} alt="Aura AI" className="w-full h-full object-contain" />
                               </div>
                            ) : (
                               <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white">
                                 <User className="w-4 h-4" />
                               </div>
                            )}
                          </div>
                          
                          {/* Bubble */}
                          <div className={`p-3 rounded-2xl text-sm ${
                            msg.sender === 'user' 
                              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-tr-none shadow-lg' 
                              : 'bg-neutral-800/80 border border-white/10 text-neutral-200 rounded-tl-none'
                          }`}>
                            <p className="whitespace-pre-wrap leading-relaxed inline">
                              {msg.sender === 'bot' && msg.isTypingEffect ? (
                                <TypewriterText 
                                  text={msg.text} 
                                  onComplete={() => {
                                    setMessages(prev => prev.map(m => m.id === msg.id ? { ...m, isTypingEffect: false } : m))
                                  }}
                                />
                              ) : (
                                msg.text
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Dynamic suggestions mapping (rendered below bubble if they exist and typing is done) */}
                      {msg.sender === 'bot' && msg.perguntas && msg.perguntas.length > 0 && !msg.isTypingEffect && (
                        <div className="flex flex-wrap gap-2 mt-2 ml-12 animate-fade-in-up">
                          {msg.perguntas.map((p, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleSendSuggestion(p, msg.id)}
                              className="text-left px-3 py-2 bg-gradient-to-r from-purple-900/40 to-pink-900/40 border border-purple-500/30 hover:border-purple-400/80 hover:bg-purple-500/20 rounded-xl text-xs text-white shadow-lg transition-all hover:-translate-y-0.5"
                            >
                              {p}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex justify-start animate-fade-in-up">
                      <div className="flex gap-3 max-w-[85%] flex-row">
                         <div className="shrink-0 mt-1">
                            <div className="w-8 h-8 rounded-full bg-neutral-800 border border-purple-500/30 flex items-center justify-center p-1.5">
                              <img src={auraLogo} alt="Aura AI" className="w-full h-full object-contain" />
                            </div>
                         </div>
                         <div className="p-4 rounded-2xl rounded-tl-none bg-neutral-800/80 border border-white/10 text-neutral-200 flex items-center gap-1.5">
                           <span className="w-2 h-2 rounded-full bg-neutral-500 animate-bounce" style={{ animationDelay: '0ms' }}></span>
                           <span className="w-2 h-2 rounded-full bg-neutral-500 animate-bounce" style={{ animationDelay: '150ms' }}></span>
                           <span className="w-2 h-2 rounded-full bg-neutral-500 animate-bounce" style={{ animationDelay: '300ms' }}></span>
                         </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-neutral-900 border-t border-white/10">
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage(inputValue);
                }}
                className="flex items-center gap-2 relative max-w-4xl mx-auto"
              >
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Digite sua mensagem para a Aura..."
                  className="bg-black/50 border-white/10 text-white pl-4 pr-12 py-6 rounded-xl focus-visible:ring-purple-500/50 placeholder:text-neutral-500"
                  disabled={isTyping}
                />
                <Button 
                  type="submit" 
                  disabled={!inputValue.trim() || isTyping}
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-lg h-10 w-10 transition-all border-0 shadow-lg"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
