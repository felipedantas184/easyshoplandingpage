import Image from "next/image";
import { CTAScroll, FHalf, ImgWrapper, PerkDescription, PerksWrapper, PerkTitle, PerkWrapper, Section, SHalf, Subtitle, TextWrapper, Title, Wrapper } from "./Components";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const Solution = () => {
  return (
    <Section>
      <Wrapper>
        <FHalf>
          <TextWrapper>
            <Title>Soluções que Transformam Negócios</Title>
            <Subtitle>Crie uma loja online com a identidade da sua marca, controle seu estoque em tempo real, organize pedidos e visualize métricas que impulsionam vendas.</Subtitle>
          </TextWrapper>
          <PerksWrapper>
            <PerkWrapper>
              <FaMoneyBillTrendUp size={24} color="#411551" />
              <PerkTitle>Maior Conversão de Vendas</PerkTitle>
              <PerkDescription>Aumente o número de vendas com uma loja profissional!</PerkDescription>
            </PerkWrapper>
            <PerkWrapper>
              <FaMoneyBillTrendUp size={24} color="#411551" />
              <PerkTitle>Maior Controle do Negócio</PerkTitle>
              <PerkDescription>Aumente o número de vendas com uma loja profissional!</PerkDescription>
            </PerkWrapper>
          </PerksWrapper>
          <CTAScroll className="scroll" to="pricing" spy={true} smooth={true} hashSpy={true} offset={50} duration={1000} delay={500} isDynamic={true} ignoreCancelEvents={false} spyThrottle={500}>Conhecer Planos <IoArrowForwardCircleOutline size={24} /></CTAScroll>
        </FHalf>
        <SHalf>
          <ImgWrapper>
            <Image src={'/assets/images/img/solution.png'} alt='Easy Phone Logo' fill sizes="(max-width: 384px)" className={'image'} />
          </ImgWrapper>
        </SHalf>
      </Wrapper>
    </Section>
  );
}

export default Solution;