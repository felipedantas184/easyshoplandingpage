import Image from "next/image";
import { CTAScroll, FHalf, ImgWrapper, Section, SHalf, Subtitle, TextWrapper, Title, Wrapper } from "./Components";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const Credibility = () => {
  return (
    <Section $dark>
      <Wrapper>
        <FHalf>
          <TextWrapper>
            <Title>Credibilidade Para Sua Loja</Title>
            <Subtitle>Com sua própria loja virtual, você agrega maior credibilidade para a empresa e maior percepção de valor por seu cliente</Subtitle>
          </TextWrapper>
          <CTAScroll className="scroll" to="pricing" spy={true} smooth={true} hashSpy={true} offset={50} duration={1000} delay={500} isDynamic={true} ignoreCancelEvents={false} spyThrottle={500}>Conhecer Planos <IoArrowForwardCircleOutline size={24} /></CTAScroll>
        </FHalf>
        <SHalf>
          <ImgWrapper>
            <Image src={'/assets/images/img/automatize.png'} alt='Credibilidade para sua loja com a Easy Shop' fill sizes="(max-width: 384px)" className={'image'} />
          </ImgWrapper>
        </SHalf>
      </Wrapper>
    </Section>
  );
}

export default Credibility;