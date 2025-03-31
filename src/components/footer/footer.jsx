import React from "react";
import Container from "../container/container";
import styled from "styled-components";
import { lang } from "../shared/staticText/staticText";
import { FooterList } from "./footerList";
import { HeaderText } from "../headerButtonIcon/headerTextButton";
import { theme } from "../style/theme";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Фикс для иконки маркера
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

// Координаты Стокгольма
const center = {
  lat: 59.329323,
  lng: 18.068581,
};

const FooterContainer = styled.footer`
  position: relative;
  color: white;
  padding: 60px 0px;
  background: linear-gradient(
    135deg,
    rgb(15, 32, 39) 0%,
    rgb(32, 58, 67) 50%,
    rgb(44, 83, 100) 100%
  );
  overflow: hidden;
  min-height: 300px;
`;

const MapWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.4;

  .leaflet-container {
    width: 100%;
    height: 100%;
    filter: brightness(0.8) contrast(0.8);
  }

  .leaflet-tile-container img {
    filter: opacity(0.6) !important;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 10;
`;

const FooterBlockIn = styled.div`
  display: block;
  text-align: center;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

const FooterLeftblock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

const LeftText = styled.p`
  font-style: normal;
  font-size: 10px;
  vertical-align: top;
  letter-spacing: 0.06em;
  color: ${theme.color.ColorText};
  margin-top: 20px;
  text-align: center;
`;

const FooterRighttblock = styled.div`
  text-align: centr;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FooterUpUl = styled.ul`
  display: flex;
  flex-direction: column-reverse;
  margin-top: 20px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    align-items: baseline;
    margin-bottom: 60px;
  }
`;

const FooterUpli = styled.li`
  font-style: normal;
  font-size: 14px;
  vertical-align: top;
  letter-spacing: 0.06em;
  color: #ffff;
  margin-bottom: 9px;
  &:last-child {
    margin-left: 0px;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

const FooterSvgUl = styled.ul`
  display: flex;
  justify-content: center;
  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

const FooterSvgli = styled.li`
  color: white;
  border: 1px solid white;
  border-radius: 50%;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 5px;
  margin-left: 16px;
  &:first-child {
    margin-left: 0px;
  }
`;

const FooterSocialLink = styled.a`
  border-radius: 50%;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 5px;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <MapWrapper>
        <MapContainer
          center={[center.lat, center.lng]}
          zoom={13}
          scrollWheelZoom={false}
          zoomControl={false}
          attributionControl={false}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[center.lat, center.lng]} />
        </MapContainer>
      </MapWrapper>

      <ContentWrapper>
        <Container>
          <FooterBlockIn>
            <FooterLeftblock>
              <HeaderText />
            </FooterLeftblock>
            <FooterRighttblock>
              <FooterUpUl>
                {FooterList.map((item) => (
                  <FooterUpli key={item.id}>{item.header}</FooterUpli>
                ))}
              </FooterUpUl>
            </FooterRighttblock>
          </FooterBlockIn>
          <FooterSvgUl>
            {FooterList.map((item) => (
              <FooterSvgli key={item.id}>
                <FooterSocialLink href={item.link}>{item.svg}</FooterSocialLink>
              </FooterSvgli>
            ))}
          </FooterSvgUl>
          <LeftText>{lang.en.FooterLefttext}</LeftText>
        </Container>
      </ContentWrapper>
    </FooterContainer>
  );
};
