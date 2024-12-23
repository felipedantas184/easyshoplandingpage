import styled from "styled-components"
import { Link as LinkS } from 'react-scroll'

interface Props {
  $dark?: boolean,
  $invert?: boolean
}

export const Section = styled.section<Props>`
  background: rgb(19,0,40);
  background: ${({ $dark }) => ($dark ? 'linear-gradient(315deg, rgba(89,45,144,1) 0%, rgba(19,0,40,1) 50%)' : '#F6F6F6')};
  padding: 25px 0;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;

  h1, span {
    color: ${({ $dark }) => ($dark ? '#F6F6F6' : '#13131A')};
  }
  button, .scroll {
    background-color: ${({ $dark }) => ($dark ? '#F6F6F6' : '#130028')};
    color: ${({ $dark }) => ($dark ? '#13131A' : '#F6F6F6')};

    &:hover {
      background-color:#13131A;
      color: #F6F6F6;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 85px 0;
    margin-top: -60px;
  }
`
export const Wrapper = styled.div<Props>`
  width: 100%;
  max-width: 1080px;
  padding: 8px;
	margin-left: auto;
	margin-right: auto;

	display: flex;
	flex-direction: ${({ $invert }) => ($invert ? 'row-reverse' : 'row')};;
	align-items: center;
	justify-content: space-between;
  gap: 8px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`
export const FHalf = styled.div`
  flex: 1;
  width: 100%;
  padding: 8px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
  gap: 8px;
`
export const SHalf = styled.div`
  flex: 1;
  width: 100%;
  padding: 8px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
  gap: 8px;
`
export const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`
export const Title = styled.h1<Props>`
  font-size: 42px;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`
export const Subtitle = styled.span<Props>`
  font-size: 18px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`
export const PerksWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
`
export const PerkWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;

  background-color: #F6F6F6;
  padding: 8px;
  border-radius: 8px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`
export const PerkTitle = styled.h4`
  font-size: 16px;
  font-weight: 700;
  color: #22222A;
  margin-top: 8px;
`
export const PerkDescription = styled.p`
  color: #22222A;
  font-size: 14px;
`
export const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.5s ease-in-out;
  -webkit-tap-highlight-color: transparent;

  > div {
    position: unset !important;
    transition: transform 0.5s ease-in-out;
  }
  
  .image {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
    transition: transform 0.5s ease-in-out;

    &:hover {
      transform: scale(1.025);
    }
  }
`
export const CTAButton = styled.button`
  margin-top: 24px;
  padding: 8px 12px;

  background-clip: padding-box;

  border: none;
  border-radius: 8px;
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
  align-self: flex-start;
  align-items: center;
  justify-content: center;
  position: relative;

  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  -webkit-tap-highlight-color: transparent;

  &:hover, &:focus {
    background-color: #13131A;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  }

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    background-color: #130028;
    box-shadow: rgba(0, 0, 0, .06) 0 2px 4px;
    transform: translateY(0);
  }

  &:disabled {
    background-color: #545454;
  }
`
export const CTAScroll = styled(LinkS)`
  margin-top: 24px;
  padding: 16px 24px;

  background-clip: padding-box;

  border: none;
  border-radius: 8px;
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
  align-self: flex-start;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 8px;

  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  -webkit-tap-highlight-color: transparent;

  &:hover, &:focus {
    background-color: #13131A;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  }

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    background-color: #130028;
    box-shadow: rgba(0, 0, 0, .06) 0 2px 4px;
    transform: translateY(0);
  }

  &:disabled {
    background-color: #545454;
  }
`
export const CTWpp = styled.a<{ $highlight?: boolean; }>`
  margin-top: 24px;
  padding: 12px 18px;

  background-clip: padding-box;

  border: none;
  border-radius: 8px;
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
  align-self: center;
  align-items: center;
  justify-content: center;
  position: relative;

  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  -webkit-tap-highlight-color: transparent;

  background-color: ${props => props.$highlight ? '#E6E6E6' : '#130028'};
  color: ${props => props.$highlight ? '#130028' : '#E6E6E6'};
  align-self: center;

  &:hover {
    background-color: ${props => props.$highlight ? '#000000' : '#13131A'};
    color: ${props => props.$highlight ? '#E6E6E6' : '#FFF'};
  }

  &:hover, &:focus {
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  }

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    background-color: #130028;
    box-shadow: rgba(0, 0, 0, .06) 0 2px 4px;
    transform: translateY(0);
  }

  &:disabled {
    background-color: #545454;
  }
`