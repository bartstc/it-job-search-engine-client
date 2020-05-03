import styled from "styled-components";

import { Theme } from "styles/theme";

import { Technology } from "modules/offers/types/Technology";
import { technologyItems } from "modules/offers/constants/technologyItems";

type OfferItemWrapperProps = {
  technology: Technology;
  theme: Theme;
};

export const OfferItemWrapper = styled.li<OfferItemWrapperProps>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  //border-radius: 5px;
  position: relative;
  margin-bottom: .6em;
  padding: 0.45em 0.45em 0.45em 1.3em;
  box-shadow: 1px 2px 3px -1px ${props => props.theme.colors.grayColor};
  background: ${props => props.theme.colors.secondaryBgColor};

  &::after {
    content: "";
    position: absolute;
    display: block;
    background: red;
    background: ${({ technology }) => technologyItems[technology].color};
    top: 0;
    left: 0;
    //border-radius: 5px;
    width: 7px;
    height: 100%;

    ${props => props.theme.media.tablet} {
      width: 10px;
      //border-radius: 7px;
    }
  }

  ${props => props.theme.media.tablet} {
    display: block;
    padding: 0.6em 1.2em 0.6em 2em;
  }
`;

export const Top = styled.header`
  width: 100%;

  ${props => props.theme.media.tablet} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const OfferItemTitle = styled.h2`
  font-size: 1.05rem;
  line-height: 1.45em;
  color: ${props => props.theme.colors.primaryColor};
  font-weight: ${props => props.theme.fontWeight.semiBold};
  margin-bottom: 0.35em;

  ${props => props.theme.media.tablet} {
    margin-bottom: 0;
    font-size: 1.3rem;
    line-height: 1.4em;
    flex: 0.7;
  }
`;

export const OfferItemPrice = styled.p`
  font-size: 1rem;
  line-height: 1.55em;
  color: ${props => props.theme.colors.secondaryColor};
  font-weight: ${props => props.theme.fontWeight.regular};

  ${props => props.theme.media.tablet} {
    font-size: 1.1rem;
    line-height: 1.7em;
    flex: 0.3;
    text-align: end;
  }
`;

export const Middle = styled.div`
  font-weight: ${props => props.theme.fontWeight.light};
  color: ${props => props.theme.colors.primaryColor};
  position: absolute;
  bottom: 0.45em;
  right: 0.7em;

  ${props => props.theme.media.tablet} {
    position: relative;
    bottom: auto;
    right: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const OfferItemMeta = styled.p`
  display: none;
  font-size: 0.75rem;
  line-height: 1.2rem;

  ${props => props.theme.media.tablet} {
    display: block;
  }
`;

export const OfferItemDate = styled.p`
  font-size: 0.9rem;
`;

export const OfferItemTags = styled.ul`
  font-weight: ${props => props.theme.fontWeight.light};
  color: ${props => props.theme.colors.secondaryBgColor};
  display: none;

  ${props => props.theme.media.tablet} {
    display: flex;
    flex-wrap: wrap;
    margin-top: .6em;
  }
`;

export const OfferItemTag = styled.li`
  font-size: 0.67rem;
  background: ${props => props.theme.colors.secondaryColor};
  border-radius: 10px;
  padding: 0.25em 1.1em;
  margin-right: 1.4em;
  margin-bottom: 0.7em;
  line-height: 16px;
`;
