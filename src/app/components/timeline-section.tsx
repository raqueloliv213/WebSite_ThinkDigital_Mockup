import { motion } from "motion/react";

const milestones = [
  {
    year: "2007",
    title: "Uma ideia, uma sala, Aveiro",
    text: "Fundada por Diogo Resende e Nuno Ferreira, a ThinkDigital nasce como empresa de engenharia e desenvolvimento de software, com uma aposta clara desde o primeiro dia: criar soluções tecnológicas à medida da indústria portuguesa.",
  },
  {
    year: "2014",
    title: "Nasce a ThinkDigital Telematics",
    text: "A constituição da ThinkDigital II, Telematics, SA reforça a aposta em telemetria e abre caminho ao trackingDIARY®, a plataforma cloud que passa a localizar viaturas, equipas e tarefas em tempo real.",
  },
  {
    year: "2016",
    title: "Ao lado das maiores operadoras",
    text: "A ThinkDigital torna-se parceira e fornecedora da Vodafone Portugal, da NOS e da Altice MEO, levando soluções IoT a milhares de pontos de contacto. Para acompanhar este crescimento, abre um escritório em Lisboa.",
  },
  {
    year: "2018",
    title: "Fábricas e edifícios, em tempo real",
    text: "SCADA, MES e monitorização energética com inteligência artificial transformam fábricas e edifícios em ambientes geridos por dados, reduzindo consumos e antecipando falhas antes que aconteçam.",
  },
  {
    year: "2021",
    title: "Primeiro salto fora de Portugal",
    text: "A ThinkDigital expande-se para o Dubai, em parceria com a Oman Telecom, levando a sua experiência em eficiência energética e industrial para o Médio Oriente.",
  },
  {
    year: "2022",
    title: "Uma sede pensada para o futuro",
    text: "Inaugura-se a nova sede em Aveiro: espaçosa, verde e desenhada para diluir a fronteira entre trabalho e conforto, recebendo equipas, clientes e parceiros num único hub tecnológico.",
  },
  {
    year: "I&D",
    title: "Investigação sem fronteiras",
    text: "Projetos europeus como o FaceRehab, reabilitação facial assistida por IoT e inteligência artificial, e iniciativas ligadas ao Space Portugal levam a ThinkDigital a investir anualmente mais de 1,2M€ em investigação e desenvolvimento.",
  },
  {
    year: "AGORA",
    title: "18 anos depois, a continuar a monitorizar",
    text: "Com mais de 18 anos de experiência, a ThinkDigital continua a digitalizar fábricas, frotas e empresas em Portugal e na Europa. Consolidamos também 10 anos de parceria com o Rock in Rio Lisboa, com presença consecutiva em 2016, 2018, 2022, 2024 e agora em 2026, com exceção de 2020, ano sem edição devido à pandemia de Covid-19.",
  },
];

export function TimelineSection() {
  return (
    <section className="bg-white">
      <motion.h2
        className="font-['Roboto',sans-serif] font-bold text-[30px] sm:text-[36px] lg:text-[42px] text-[#0d1a38] mb-4 leading-tight"
        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Sempre ligados, ano após ano
      </motion.h2>
      <motion.p
        className="font-['Roboto',sans-serif] text-[15px] sm:text-[17px] text-[#6b7a99] leading-relaxed max-w-[700px] mb-12 sm:mb-16"
        initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
      >
        Da fundação em Aveiro às parcerias que nos levaram por toda a Europa, esta é uma história sobre estar sempre conectados: às pessoas, às ideias e ao que vem a seguir.
      </motion.p>

      <div className="relative flex flex-col gap-12 sm:gap-14">
        <div className="absolute left-[6px] sm:left-[7px] top-1 bottom-1 w-px bg-[#e5e5ed]" aria-hidden />

        {milestones.map((m, idx) => (
          <motion.article
            key={m.year + idx}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="relative pl-8 sm:pl-10"
          >
            <span className="absolute left-0 top-1 w-[14px] h-[14px] rounded-full border-2 bg-white border-[#0085ca]" aria-hidden />

            <div className="flex flex-col items-start gap-3 max-w-[640px]">
              <span className="inline-flex font-mono text-[13px] tracking-[0.1em] font-bold border rounded-full px-3 py-1 border-[#0085ca] text-[#0085ca]">
                {m.year}
              </span>

              <h3 className="font-['Roboto',sans-serif] font-bold text-[22px] sm:text-[26px] lg:text-[28px] text-[#0d1a38]">
                {m.title}
              </h3>
              <p className="font-['Roboto',sans-serif] text-[14px] sm:text-[15px] text-[#6b7a99] leading-relaxed">
                {m.text}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
