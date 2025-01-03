import Image from "next/image";
import { CTAScroll, FHalf, ImgWrapper, PerkDescription, PerksWrapper, PerkTitle, PerkWrapper, Section, SHalf, Subtitle, TextWrapper, Title, Wrapper } from "./Components";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaSync } from "react-icons/fa";

const Automatize = () => {
  return (
    <Section>
      <Wrapper $invert>
        <FHalf>
          <TextWrapper>
            <Title>Automatize Suas Vendas</Title>
            <Subtitle>Automatize diversas funções e ganhe tempo para gerenciar outros afazeres e expandir ainda mais sua loja!</Subtitle>
          </TextWrapper>
          <PerksWrapper>
            <PerkWrapper>
              <MdOutlineMarkEmailRead size={24} color="#411551" />
              <PerkTitle>E-mails Automáticos</PerkTitle>
              <PerkDescription>Envie e-mails automáticos para seu cliente!</PerkDescription>
            </PerkWrapper>
            <PerkWrapper>
              <FaSync size={24} color="#411551" />
              <PerkTitle>Controle seu Estoque</PerkTitle>
              <PerkDescription>Gerencie e consulte seu estoque de onde estiver!</PerkDescription>
            </PerkWrapper>
          </PerksWrapper>
          <CTAScroll className="scroll" to="pricing" spy={true} smooth={true} hashSpy={true} offset={50} duration={1000} delay={500} isDynamic={true} ignoreCancelEvents={false} spyThrottle={500} >Conhecer Planos <IoArrowForwardCircleOutline size={24}/></CTAScroll>
        </FHalf>
        <SHalf>
          <ImgWrapper>
            <Image src={'/assets/images/img/automatize.png'} alt='Automatize suas vendas com a Easy Shop' fill sizes="(max-width: 384px)" className={'image'} />
          </ImgWrapper>
        </SHalf>
      </Wrapper>
    </Section>
  );
}

export default Automatize;