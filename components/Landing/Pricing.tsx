import styled from "styled-components";
import { CTWpp, Section } from "./Components";
import { FaCheckCircle } from "react-icons/fa";

const Pricing = () => {
  return (
    <Section id="pricing">
      <Wrapper>
        <Title>Planos & Preços</Title>
        <CardsContainer>
          <Card>
            <PlanTitle>Plano Mensal</PlanTitle>
            <Price>R$ 149,90/mês</Price>
            <Features>
              <li><FaCheckCircle /> Gestão de pedidos e estoques</li>
              <li><FaCheckCircle />Relatórios simplificados</li>
              <li><FaCheckCircle />Automação de comunicação</li>
            </Features>
            <CTWpp href="https://wa.me/+5586995185757?text=Ol%C3%A1!%20Fiquei%20interessado%20no%20*Plano%20Memsal*%20da%20Easy%20Shop!" target="_blank">Escolher Mensal</CTWpp>
          </Card>
          <Card $highlight>
            <DiscountGroup>
              <PlanTitle>Plano Anual</PlanTitle>
              <Discount>Economize 2 meses!</Discount>
            </DiscountGroup>
            <Price>R$ 119,90/mês</Price>
            <Features>
              <li><FaCheckCircle />Gestão de pedidos e estoques</li>
              <li><FaCheckCircle />Relatórios simplificados</li>
              <li><FaCheckCircle />Automação de comunicação</li>
              <li><FaCheckCircle />Suporte prioritário</li>
            </Features>
            <CTWpp $highlight href="https://wa.me/+5586995185757?text=Ol%C3%A1!%20Fiquei%20interessado%20no%20*Plano%20Anual*%20da%20Easy%20Shop!" target="_blank">Escolher Anual</CTWpp>
          </Card>
          <Card>
            <PlanTitle>Personalizado</PlanTitle>
            <Price>R$ xxx/mês</Price>
            <Features>
              <li><FaCheckCircle />Adequado às suas necessidades</li>
              <li><FaCheckCircle />Gestão de pedidos e estoques</li>
              <li><FaCheckCircle />Relatórios simplificados</li>
              <li><FaCheckCircle />Automação de comunicação</li>
              <li><FaCheckCircle />Suporte prioritário</li>
            </Features>
            <CTWpp href="https://wa.me/+5586995185757?text=Ol%C3%A1!%20Fiquei%20interessado%20no%20*Plano%20Personalizado*%20da%20Easy%20Shop!" target="_blank">Entrar em Contato</CTWpp>
          </Card>
        </CardsContainer>
      </Wrapper>
    </Section>
  );
}

export default Pricing;



const Wrapper = styled.div`
  width: 100%;
  padding: 0 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  margin-bottom: 16px;
`;

const Title = styled.h1`
  color: #13131a;
  font-size: 24px;
  font-weight: 700;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;

  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    gap: 32px;
  }
`;

const DiscountGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div<{ $highlight?: boolean }>`
  background: ${({ $highlight }) => ($highlight ? 'linear-gradient(315deg, rgba(89,45,144,1) 0%, rgba(19,0,40,1) 40%)' : '#FFF')};
  border: ${({ $highlight }) => ($highlight ? '2px solid #592d90' : '1px solid #ddd')};
  border-radius: 10px;

  padding: 16px;
  flex: 1;
  min-height: 375px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 32px;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  transform: scale(${({ $highlight }) => ($highlight ? 1.1 : 1.0)});

  h2, p {
    color: ${({ $highlight }) => ($highlight ? '#FFF' : '#3A3A3AS')};
  }
  li {
    color: ${({ $highlight }) => ($highlight ? '#E6E6E6' : '#3A3A3AS')};
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    transform: scale(${({ $highlight }) => ($highlight ? 1.0 : 1.0)});
  }
`;

const PlanTitle = styled.h2`
  color: #333;
  font-size: 20px;
  font-weight: 600;
`;

const Price = styled.p`
  color: #13131a;
  font-size: 28px;
  font-weight: 700;
`;

const Discount = styled.span`
  color: #ab7ae7 !important;
  font-size: 16px;
  font-weight: 500;
`;

const Features = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  display: flex;
  flex-direction: column;
  gap: 8px;

  li {
    font-size: 14px;
    
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;