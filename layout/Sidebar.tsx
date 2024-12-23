import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import { FaRegEnvelope, FaHouse, FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";

interface Props {
  $isOpen: any
}

const Sidebar = ({ isOpen, toggle }: any) => {
  const router = useRouter()

  return (
    <Container $isOpen={isOpen}>
      <Wrapper>
        <BigWrapper>
          <TitleWrapper>
            <Logo href={'/'} ><Image src={'/assets/images/img/EasyShopLogoTransparent.png'} alt='Easy Shop Logo' fill sizes="(max-width: 150px)" /></Logo>
            <Close onClick={toggle}>
              <FaTimes color="#F6F6F6" />
            </Close>
          </TitleWrapper>
          <Menu>
            <Item><PageInternalLink href={'/'}><FaHouse size={20} color="#F6F6F6" />Página Inicial</PageInternalLink></Item>
            <Item><PageLink target='_blank' href='https://www.instagram.com/easyshop.pi/'><FaInstagram size={20} color="#F6F6F6" />Instagram</PageLink></Item>
            <Item><PageLink target='_blank' href='https://www.instagram.com/easyshop.pi/'><FaFacebook size={20} color="#F6F6F6" />Facebook</PageLink></Item>
            <Item><PageLink target='_blank' href='https://maps.app.goo.gl/jPSt5QCpzHwX4ECd6'><IoLocationOutline size={20} color="#F6F6F6" />Localização</PageLink></Item>
            <Item><PageLink target='_blank' href='mailto:easyshop.piaui@gmail.com'><FaRegEnvelope size={20} color="#F6F6F6" />Email</PageLink></Item>
            <Item><PageLink target='_blank' href='https://easyphone.vercel.app/'><MdOutlineArrowOutward size={20} color="#F6F6F6" />Demo Easy Phone</PageLink></Item>
            <Item><PageLink target='_blank' href='https://easyjoias.vercel.app/'><MdOutlineArrowOutward size={20} color="#F6F6F6" />Demo Easy Joias</PageLink></Item>
          </Menu>
        </BigWrapper>
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 300, width: '100%', justifyContent: 'center', alignItems: 'center' }} >
          <LogoutButton href="https://wa.me/+5586995185757?text=Ol%C3%A1!%20Fiquei%20interessado%20no%20*Plano%20Personalizado*%20da%20Easy%20Shop!" ><FaWhatsapp /> Entrar em Contato</LogoutButton>
        </div>
      </Wrapper>
    </Container>
  );
}

export default Sidebar;



const Container = styled.nav<Props>`
  background: #13131A;
  padding: 25px 0;
  
  top: 0;
  right: 0;
  position: fixed;
  z-index: 999;
  width: 20%;
  height: 100%;

  opacity: ${({ $isOpen }) => ($isOpen ? '100%' : '0')};
  left: ${({ $isOpen }) => ($isOpen ? '80%' : '100%')};
  transition: 0.7s ease-in-out;

  border-radius: 10px 0 0 10px;
  box-shadow: rgba(99, 99, 99, 0.8) 0px 2px 8px 0px;

  @media screen and (max-width: 768px) {
    width: 80%;
    opacity: ${({ $isOpen }) => ($isOpen ? '100%' : '0')};
    left: ${({ $isOpen }) => ($isOpen ? '20%' : '100%')};
  }
`
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 8px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8px;
`
const BigWrapper = styled.div`
  width: 100%;   
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 48px;
`
const TitleWrapper = styled.div`
  width: 100%;   
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`
const Logo = styled(Link)`
  position: relative;
  width: 150px;
  height: 75px;
  text-decoration: none;
  cursor: pointer;

  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-tap-highlight-color: transparent; 
`
const Close = styled.div`
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;

  -webkit-tap-highlight-color: transparent;
  user-select: none
`
const Menu = styled.ul`
  width: 100%;  
  list-style: none;
  text-align: left;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
`
const Item = styled.li`
  color: #F6F6F6;
  font-size: 16px;
  font-weight: 500;
  width: 80%;
  
  text-decoration: none;
  cursor: pointer;
  -webkit-tap-highlight-color:  rgba(255, 255, 255, 0); 
  user-select: none;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #8360C3;
    transition: 0.2s ease-in-out;
  }
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
const PageLink = styled.a`
  padding: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  font-family: 'Montserrat', sans-serif;
`
const PageInternalLink = styled(Link)`
  padding: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  font-family: 'Montserrat', sans-serif;
`
const LogoutButton = styled.a`
  width: 100%;
  min-height: 3rem;
  margin: 0;
  padding: calc(.875rem - 1px) calc(1.5rem - 1px);

  background-color: #8360C3;
  background-clip: padding-box;

  border: 1px solid transparent;
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;

  color: #fff;
  font-family: "Montserrat";
  font-size: 16px;
  font-weight: 600;
  line-height: 1.25;
  text-decoration: none;
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  position: relative;

  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  -webkit-tap-highlight-color: transparent;

  &:hover, &:focus {
    background-color: #075e54;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  }

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    background-color: #075e54;
    box-shadow: rgba(0, 0, 0, .06) 0 2px 4px;
    transform: translateY(0);
  }
`