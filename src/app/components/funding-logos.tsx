import imgAal from "../../imports/Raquel/176.png";
import imgCompete from "../../imports/Raquel/177.png";
import imgPrr from "../../imports/Raquel/178.png";

export function FundingLogos() {
  return (
    <section className="bg-white py-10">
      <div className="max-w-[1100px] mx-auto px-4 flex flex-nowrap items-center justify-center gap-4 sm:gap-8 overflow-x-auto">
        <img src={imgAal} alt="AAL Programme · Comissão Europeia · FCT" className="h-7 sm:h-10 w-auto object-contain shrink-0" />
        <img src={imgCompete} alt="Compete 2020 · Portugal 2020 · Fundo Europeu de Desenvolvimento Regional" className="h-7 sm:h-10 w-auto object-contain shrink-0" />
        <img src={imgPrr} alt="PRR · República Portuguesa · Financiado pela União Europeia NextGenerationEU" className="h-7 sm:h-10 w-auto object-contain shrink-0" />
      </div>
    </section>
  );
}
