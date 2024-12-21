import Image from "next/image";
import { CTAScroll, FHalf, ImgWrapper, Section, SHalf, Subtitle, TextWrapper, Title, Wrapper } from "./Components";

const Hero = () => {
  return ( 
    <Section dark>
      <Wrapper>
        <FHalf>
          <TextWrapper>
            <Title>Transforme Seu Negócio em uma Loja Virtual</Title>
            <Subtitle>Simples, rápido e eficiente. Crie sua loja online e conquiste mais clientes!</Subtitle>
          </TextWrapper>
          <CTAScroll className="scroll" to="pricing" spy={true} smooth={true} hashSpy={true} offset={50} duration={1000} delay={500} isDynamic={true} ignoreCancelEvents={false} spyThrottle={500} >Conhecer Planos</CTAScroll>
        </FHalf>
        <SHalf>
          <ImgWrapper>
            <Image src={'/assets/images/img/hero.png'} alt='Easy Phone Logo' fill sizes="(max-width: 384px)" className={'image'}  />
          </ImgWrapper>
        </SHalf>
      </Wrapper>
    </Section>
   );
}
 
export default Hero;