import styled from "styled-components";

import { Theme } from "styles/theme";

import { Technology } from "modules/offers/types/Technology";
import { technologyItems } from "modules/offers/constants/technologyItems";
import { Link } from "react-router-dom";

type OfferDetailsWrapperProps = {
  technology: Technology;
  theme: Theme;
};

export const OfferDetailsWrapper = styled.div<OfferDetailsWrapperProps>`
  width: 100%;
  height: 98.5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  margin-bottom: 0.6em;
  padding: 1.9em 0.45em 1em 1.3em;
  box-shadow: 1px 2px 3px -1px ${(props) => props.theme.colors.grayColor};
  background: ${(props) => props.theme.colors.secondaryBgColor};
  overflow-y: scroll;

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    width: 9px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.secondaryColor};
  }

  &::after {
    content: "";
    position: absolute;
    display: block;
    background: red;
    background: ${({ technology }) => technologyItems[technology].color};
    top: 0;
    left: 0;
    width: 7px;
    height: 65%;

    ${(props) => props.theme.media.tablet} {
      width: 13.5px;
    }
  }

  ${(props) => props.theme.media.tablet} {
    display: block;
    padding: 2.6em 2em 1.4em 3em;
  }
`;

export const Header = styled.header`
  width: 100%;

  ${(props) => props.theme.media.tablet} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const OfferTitle = styled.h2`
  font-size: 1.1rem;
  line-height: 1.45em;
  color: ${(props) => props.theme.colors.primaryColor};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  margin-bottom: 0.35em;

  ${(props) => props.theme.media.tablet} {
    margin-bottom: 0.6em;
    font-size: 1.9rem;
    line-height: 1.25em;
    flex: 0.7;
  }
`;

export const OfferPrice = styled.p`
  font-size: 1rem;
  line-height: 1.55em;
  color: ${(props) => props.theme.colors.secondaryColor};
  font-weight: ${(props) => props.theme.fontWeight.regular};

  ${(props) => props.theme.media.tablet} {
    font-size: 1.2rem;
    line-height: 1.5em;
    flex: 0.3;
    text-align: end;
  }
`;

export const Middle = styled.div`
  font-weight: ${(props) => props.theme.fontWeight.light};
  color: ${(props) => props.theme.colors.primaryColor};
  position: absolute;
  bottom: 0.45em;
  right: 0.7em;

  ${(props) => props.theme.media.tablet} {
    position: relative;
    bottom: 0.8em;
    right: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const OfferMeta = styled.p`
  display: none;
  font-size: 0.8rem;
  line-height: 1.2rem;

  ${(props) => props.theme.media.tablet} {
    display: block;
    font-size: 1.15rem;
  }
`;

export const OfferDate = styled.p`
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.primaryColor};
  margin-top: 0.25em;

  b {
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
  }
`;

export const Hr = styled.div`
  background: ${(props) => props.theme.colors.secondaryColor};
  width: 100%;
  height: 4px;
  margin: 0.7em auto 0.35em;

  ${(props) => props.theme.media.tablet} {
    margin: 2.6em auto 0.9em;
    height: 7px;
  }
`;

export const SectionTitle = styled.h3`
  font-size: 1rem;
  line-height: 1em;
  color: ${(props) => props.theme.colors.primaryColor};
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
  margin-bottom: 0.45em;
  margin-top: 0.6em;

  ${(props) => props.theme.media.tablet} {
    margin-top: 0.8em;
    font-size: 1.1rem;
    line-height: 1.15em;
    flex: 0.7;
  }
`;

export const OfferTags = styled.ul`
  font-weight: ${(props) => props.theme.fontWeight.light};
  color: ${(props) => props.theme.colors.secondaryBgColor};
  display: flex;
  flex-wrap: wrap;

  ${(props) => props.theme.media.tablet} {
    display: flex;
    flex-wrap: wrap;
    margin-top: 0.6em;
  }
`;

export const OfferTag = styled.li`
  font-size: 0.67rem;
  background: ${(props) => props.theme.colors.secondaryColor};
  border-radius: 10px;
  padding: 0.5em 1.1em;
  margin-right: 1.4em;
  margin-bottom: 0.7em;
`;

export const Content = styled.p`
  font-size: 1rem;
  line-height: 1.3em;
  color: ${(props) => props.theme.colors.primaryColor};

  ${(props) => props.theme.media.tablet} {
    font-size: 1.05rem;
    line-height: 1.6em;
  }
`;

export const GoBackLink = styled(Link)`
  position: absolute;
  top: 10px;
  right: 10px;
  color: ${(props) => props.theme.colors.primaryBgColor};
  background: ${(props) => props.theme.colors.primaryColor};
  width: 35px;
  height: 35px;
  border-radius: 4px;
  font-size: 1.65rem;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: .25;
  transition: opacity .15s ease-in-out;
  
  &:hover {
  opacity: .45;
  }
  
  ${(props) => props.theme.media.tablet} {
    right: 30px;
  }
`;
