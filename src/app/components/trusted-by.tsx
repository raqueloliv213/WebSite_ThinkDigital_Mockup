import imgAxians from "../../imports/logo_axians_png.png";
import imgDourogas from "../../imports/logo_dourogás_png.png";
import imgDaikin from "../../imports/logo_daikin_png.png";
import imgCerealis from "../../imports/logo_cerealis_png.png";
import imgEdp from "../../imports/logo_edp_png.png";
import imgUnilever from "../../imports/logo_unilever_png.png";
import imgNos from "../../imports/logo_nos_png.png";
import imgFca from "../../imports/logo_FCA_png.png";
import imgVodafone from "../../imports/logo_vodafone_png.png";
import imgAltice from "../../imports/logo_altice_png.png";
import imgSumol from "../../imports/logo_sumol_png.png";
import imgRockinrio from "../../imports/logo_rockinrio_png.png";

const logos = [
  { src: imgAxians,    alt: "Axians" },
  { src: imgDourogas,  alt: "Dourogás" },
  { src: imgDaikin,    alt: "Daikin" },
  { src: imgCerealis,  alt: "Cerealis" },
  { src: imgEdp,       alt: "EDP" },
  { src: imgUnilever,  alt: "Unilever" },
  { src: imgNos,       alt: "NOS" },
  { src: imgFca,       alt: "FCA" },
  { src: imgVodafone,  alt: "Vodafone" },
  { src: imgAltice,    alt: "Altice" },
  { src: imgSumol,     alt: "Sumol" },
  { src: imgRockinrio, alt: "Rock in Rio" },
];

function BrandList({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <>
      {logos.map((logo) => (
        <div className="brand-item" key={logo.alt + (ariaHidden ? "-dup" : "")}>
          <img src={logo.src} alt={logo.alt} />
        </div>
      ))}
    </>
  );
}

export function TrustedBy() {
  return (
    <section className="bg-white py-4">
      <div className="marquee-wrapper">
        <div className="marquee-track">
          <BrandList />
          <BrandList ariaHidden />
        </div>
      </div>
    </section>
  );
}
