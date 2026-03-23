// components/Contact.tsx
"use client";

import { useState } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useToast } from "@/hooks/use-toast";
import styles from "@/components/ui/contact.module.css";

const WHATSAPP_URL =
  "https://wa.me/5534984263844?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20as%20soluções%20da%20Aura.";
const WEBHOOK_URL = "https://n8n-comercial.aurabs.com.br/webhook/contato-site";

/* ── Icons ── */
const CheckIcon = ({ color }: { color: string }) => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M2 6l3 3 5-5" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M2 8h12M8 3l5 5-5 5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const WappIcon = ({ color = "white", size = 26 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.886a.5.5 0 00.611.61l6.101-1.465A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.666-.523-5.179-1.434l-.37-.222-3.827.919.943-3.748-.241-.388A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
);

const SuccessCheckIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path d="M5 14l7 7 11-11" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* ── Component ── */
const Contact = () => {
  const { toast } = useToast();
  const { ref, visible } = useIntersectionObserver(0.1);

  const [formData, setFormData] = useState({ name: "", company: "", whatsapp: "", email: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
    } catch {
      toast({ title: "Erro ao enviar", description: "Tente novamente mais tarde." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section id="contact" className={styles.section}>

        {/* Background */}
        <div className={styles.bgBase} />
        <div className={`${styles.blob} ${styles.blob1}`} />
        <div className={`${styles.blob} ${styles.blob2}`} />
        <div className={`${styles.blob} ${styles.blob3}`} />
        <div className={`${styles.beam} ${styles.beam1}`} />
        <div className={`${styles.beam} ${styles.beam2}`} />
        <div className={styles.gridDots} />
        <div className={styles.noise} />

        <div className={styles.container}>
          <div
            ref={ref}
            className={styles.inner}
            style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(20px)", transition: "opacity .8s ease, transform .8s ease" }}
          >

            {/* ── LEFT: copy ── */}
            <div className={styles.copy}>
              <div className={styles.eyebrow}>
                <div className={styles.dots}>
                  <div className={styles.dot}/><div className={styles.dot}/><div className={styles.dot}/>
                </div>
                <span className={styles.eyebrowText}>Contato</span>
              </div>

              <h2 className={styles.title}>
                Pronto pra ter IA<br/>
                <span className={styles.titleGrad}>trabalhando pra você?</span>
              </h2>

              <p className={styles.desc}>
                A gente se reúne com você, entende o seu problema do zero e constrói a solução sob medida. Você testa de graça. Só paga se funcionar.
              </p>

              <div className={styles.trust}>
                <div className={styles.trustItem}>
                  <div className={`${styles.check} ${styles.ckPu}`}><CheckIcon color="#a855f7"/></div>
                  <span className={styles.trustText}><strong>Reunião gratuita</strong> — a gente entende o seu negócio</span>
                </div>
                <div className={styles.trustItem}>
                  <div className={`${styles.check} ${styles.ckPk}`}><CheckIcon color="#ec4899"/></div>
                  <span className={styles.trustText}><strong>Solução sob medida</strong> — construída pro seu problema</span>
                </div>
                <div className={styles.trustItem}>
                  <div className={`${styles.check} ${styles.ckOr}`}><CheckIcon color="#f97316"/></div>
                  <span className={styles.trustText}><strong>Você só paga se gostar</strong> — zero risco pra você</span>
                </div>
              </div>

              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={styles.wappLink}>
                <div className={styles.wappDot}/>
                <WappIcon color="#25d366" size={16}/>
                Conversar no WhatsApp
              </a>
            </div>

            {/* ── RIGHT: form card ── */}
            <div className={styles.card}>

              {!submitted ? (
                <>
                  <p className={styles.cardTitle}>Fale com a Aura</p>
                  <p className={styles.cardSub}>Preencha abaixo — retornamos em até 24h</p>

                  <form onSubmit={handleSubmit}>
                    <div className={styles.row}>
                      <input className={styles.inp} name="name"    placeholder="Seu nome"    value={formData.name}    onChange={handleChange} required/>
                      <input className={styles.inp} name="company" placeholder="Sua empresa" value={formData.company} onChange={handleChange}/>
                    </div>
                    <div className={styles.field}>
                      <input className={styles.inp} name="whatsapp" placeholder="WhatsApp" value={formData.whatsapp} onChange={handleChange} required/>
                    </div>
                    <div className={`${styles.field} ${styles.optWrap}`}>
                      <input
                        className={styles.inp}
                        name="email" type="email"
                        placeholder="E-mail"
                        value={formData.email}
                        onChange={handleChange}
                        style={{ paddingRight: "80px" }}
                      />
                      <span className={styles.optTag}>opcional</span>
                    </div>

                    <button type="submit" className={styles.submit} disabled={loading}>
                      <div className={styles.submitShine}/>
                      {loading ? "Enviando..." : <><ArrowIcon/> Quero IA na minha empresa</>}
                    </button>
                  </form>

                  <div className={styles.pills}>
                    <span className={styles.pill}><div className={styles.pillDot}/>Sem spam</span>
                    <span className={styles.pill}><div className={styles.pillDot}/>Resposta em 24h</span>
                    <span className={styles.pill}><div className={styles.pillDot}/>Sem compromisso</span>
                  </div>
                </>
              ) : (
                <div className={`${styles.successWrap} ${styles.visible}`}>
                  <div className={styles.successIcon}><SuccessCheckIcon/></div>
                  <p className={styles.successTitle}>Mensagem enviada!</p>
                  <p className={styles.successSub}>Nossa equipe vai entrar em contato em até 24 horas. Pode ficar de olho no seu WhatsApp.</p>
                </div>
              )}

            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp FAB */}
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={styles.wappFab} aria-label="WhatsApp">
        <WappIcon/>
      </a>
    </>
  );
};

export default Contact;