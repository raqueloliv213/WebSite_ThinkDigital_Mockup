import { motion } from "motion/react";
import { ReactLenis } from "lenis/react";
import { InnovationStackIntro } from "../components/innovation-stack-intro";
import { Feature } from "../components/innovation-feature";
import medicalEquipment from "../../imports/Raquel/medical_equipment.png";

const projetosInovadores = [
  {
    badge: "Vodafone · 2020",
    title: "Cuidados de saúde simplificados",
    description:
      "Em parceria com a Vodafone, desenvolvemos uma solução que permite aos doentes realizar um autoexame e partilhar os resultados instantaneamente com profissionais de saúde, ou serem acompanhados por videochamada.",
    image: medicalEquipment,
    imageAlt: "Cuidados de saúde simplificados",
    imageStyle: { transform: "scale(1.35)", transformOrigin: "center" },
  },
  {
    badge: "NOS Hackton IoT Prize · 2019",
    title: "First 5G NB-IoT",
    description:
      "Vencedores do NOS Hackton IoT Prize, a ThinkDigital desenvolveu a primeira placa portuguesa 5G para integração com a rede de comunicações NOS NB-IoT.",
    image: "https://www.thinkdigital.pt/images/gateway.png",
    imageAlt: "First 5G NB-IoT",
  },
  {
    badge: "Rock in Rio Lisboa · 2018",
    title: "A Smarter Rock in Rio Lisboa",
    description:
      "Para uma experiência mais fluida dos espectadores e uma melhor gestão do evento, implementámos check-in móvel nas atrações no local e monitorização em tempo real do consumo de energia, água e qualidade do ar.",
    image: "https://www.thinkdigital.pt/images/logos/logo_rockinrio.png",
    imageAlt: "A Smarter Rock in Rio Lisboa",
  },
];

export default function Inovacao() {
  return (
    <ReactLenis root>
      <div className="bg-white min-h-screen">
        <InnovationStackIntro />

        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-[80px] pt-16 sm:pt-20">
          <motion.h2
            className="font-['Roboto',sans-serif] font-bold text-[28px] sm:text-[34px] lg:text-[38px] text-[#0d1a38] leading-tight"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Projetos Inovadores
          </motion.h2>
        </div>

        {projetosInovadores.map((p, i) => (
          <Feature key={p.title} {...p} reverse={i % 2 === 1} />
        ))}
      </div>
    </ReactLenis>
  );
}
