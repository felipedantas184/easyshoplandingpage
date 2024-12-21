import styled from "styled-components";
import { Section } from "./Components";
import { MdOutlineCardGiftcard } from "react-icons/md";
import { FaChartColumn, FaCloudscale, FaEnvelopeCircleCheck, FaKey, FaStore } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { BsCollectionPlay } from "react-icons/bs";
import { TbTargetArrow } from "react-icons/tb";
import { LuRefreshCcw } from "react-icons/lu";

const Perks = () => {
  return ( 
    <Section>
      <Wrapper>
        <Topline>Vantagens com a Easy Shop</Topline>
        <SectionTitle>O que sua loja ganha com a Easy Shop?</SectionTitle>
        <CardsWrapper>
        <Card>
            <TbTargetArrow size={32} color="#411551" />
            <CardTitle>Presença Online Profissional</CardTitle>
            <CardSubtitle>Transforme sua loja em uma vitrine virtual com um site personalizado que reflete a identidade da sua marca.</CardSubtitle>
          </Card>
          <Card>
            <FaStore size={32} color="#411551" />
            <CardTitle>Gestão de Estoques Simplificada</CardTitle>
            <CardSubtitle>Controle seu inventário em tempo real, reduzindo erros e otimizando suas operações diárias.</CardSubtitle>
          </Card>
          <Card>
            <LuRefreshCcw size={32} color="#411551" />
            <CardTitle>Pedidos Automatizados</CardTitle>
            <CardSubtitle>Gerencie e organize os pedidos de forma automática, garantindo eficiência e rapidez na entrega.</CardSubtitle>
          </Card>
          <Card>
            <FaChartColumn size={32} color="#411551" />
            <CardTitle>Relatórios Práticos e Objetivos</CardTitle>
            <CardSubtitle>Tenha acesso a dados e análises que ajudam a tomar decisões estratégicas e a impulsionar suas vendas.</CardSubtitle>
          </Card>
          <Card>
            <FaEnvelopeCircleCheck size={32} color="#411551" />
            <CardTitle>Comunicação com os Clientes</CardTitle>
            <CardSubtitle>Envie confirmações automáticas de pedidos e mantenha um relacionamento mais próximo com seus clientes.</CardSubtitle>
          </Card>
          <Card>
            <FaCloudscale size={32} color="#411551" />
            <CardTitle>Suporte e Escalabilidade</CardTitle>
            <CardSubtitle>Conte com uma plataforma preparada para crescer junto com o seu negócio, além de suporte técnico dedicado.</CardSubtitle>
          </Card>
        </CardsWrapper>
      </Wrapper>
    </Section>
   );
}
 
export default Perks;


const Wrapper = styled.div`
  max-width: 1080px;
	margin-left: auto;
	margin-right: auto;
  padding: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`
const Topline = styled.span`
  padding: 0 8px;
  color: #A48C42;
  font-size: 14px;
  font-weight: 600;
  align-self: flex-start;
  text-transform: uppercase;
`
const SectionTitle = styled.h2`
  padding: 0 8px;
  color: #1A1A1A;
  font-size: 32px;
  font-weight: 600;
  align-self: flex-start;
  text-transform: capitalize;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`
const CardsWrapper = styled.div`
  margin-top: 16px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
const Card = styled.div`
  background-color: #FFFFFF;
  padding: 24px;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`
const CardTitle = styled.h1`
  color: #1A1A1A;
  font-size: 22px;
  font-weight: 600;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`
const CardSubtitle = styled.h4`
  color: #1A1A1A;
  font-size: 16px;
  font-weight: 400;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`