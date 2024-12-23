import Image from "next/image";
import { FaCreditCard, FaEnvelope, FaFacebook, FaInstagram, FaMobile, FaTruck } from "react-icons/fa6";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <LogoWrapper>
          <Image src={'/assets/images/img/EasyShopLogoTransparent.png'} alt={'Logo'} fill sizes="(max-width: 200px)" className={'image'} />
        </LogoWrapper>
        <Grid>
          <TextWrapper>
            <Group>
              <FaTruck size={16} color="#F6F6F6" />
              <Title>Lojas Demo</Title>
            </Group>
            <List>
              <ListItem><a target='_blank' href='https://easyphone.vercel.app/'>Easy Phone (Demo)</a></ListItem>
              <ListItem><a target='_blank' href='https://easyjoias.vercel.app/'>Easy Joias (Demo)</a></ListItem>
            </List>
          </TextWrapper>
          <TextWrapper>
            <Group>
              <FaCreditCard size={16} color="#F6F6F6" />
              <Title>Pagamento</Title>
            </Group>
            <List>
              <ListItem>Pagar no Pix</ListItem>
              <ListItem>Cartão de Crédito</ListItem>
              <ListItem>Cartão de Débito</ListItem>
            </List>
          </TextWrapper>
          <TextWrapper>
            <Group>
              <FaMobile size={16} color="#F6F6F6" />
              <Title>Redes Sociais</Title>
            </Group>
            <List>
              <SocialItem>
                <a target='_blank' href='https://www.instagram.com/easyshop.pi/'><FaFacebook size={18} color={'#F6F6F6'} />Facebook</a>
              </SocialItem>
              <SocialItem>
                <a target='_blank' href='https://www.instagram.com/easyshop.pi/'><FaInstagram size={18} color={'#F6F6F6'} />Instagram</a>
              </SocialItem>
              <SocialItem>
                <a target='_blank' href='mailto:easyshop.piaui@gmail.com'><FaEnvelope size={18} color={'#F6F6F6'} />Email</a>
              </SocialItem>
            </List>
          </TextWrapper>
        </Grid>
      </Wrapper>
      <Copyright>
        <CopyrightSpan>Felipe Dantas @ 2024</CopyrightSpan>
      </Copyright>
    </Container>
  );
}

export default Footer;



const Container = styled.section`
  background-color: #13131A;

  display: flex;
  flex-direction: column;
  align-items: center;
`
const Wrapper = styled.div`
  width: 100%;
  max-width: 1080px;
  padding: 32px 16px 24px 16px;
	margin-left: auto;
	margin-right: auto;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

  @media screen and (max-width: 768px) {
    padding: 32px 8px;
    flex-direction: column;
    gap: 16px;
    align-items: center;
  }
`
const LogoWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 120px;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  > div {
    position: unset !important;
  }

  .image {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
  }
`
const Grid = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
  gap: 48px;

  @media screen and (max-width: 768px) {
    margin-top: 8px;
    padding: 4px;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 32px;
    align-items: center;
  }
`
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: flex-start;
`
const Group = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`
const Title = styled.h4`
  color: #F6F6F6;
  font-size: 18px;
`
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`
const ListItem = styled.li`
  color: #E1E1E1;
  font-size: 16px;

  &::after {
    display:block;
    content: '';
    border-bottom: solid 2px #8360C3;  
    transform: scaleX(0);  
    transition: transform 250ms ease-in-out;
  }
  &:hover::after {
    transform: scaleX(1);
  }
`
const SocialNav = styled.ul`
	list-style: none;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`
const SocialItem = styled.li`
  font-size: 16px;
	transition: all 0.2s ease-in-out;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-tap-highlight-color: transparent;

  &::after {
    display:block;
    content: '';
    border-bottom: solid 2px #8360C3;  
    transform: scaleX(0);  
    transition: transform 250ms ease-in-out;
  }
  &:hover::after {
    transform: scaleX(1);
  }

  a {
    text-decoration: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    color: #F1F1F1;
  }
`
const Copyright = styled.div`
  background-color: #13131A;
  width: 100%;
  padding: 12px 0;
	margin-left: auto;
	margin-right: auto;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`
const CopyrightSpan = styled.span`
  color: #E5E5E5;
  font-size: 14px;
  text-align: center;
`