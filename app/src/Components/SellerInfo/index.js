import React from "react";

import {
  Container,
  Title,
  LocationCard,
  LocationIcon,
  ReputationCard,
  ReputationThermometer,
  ReputationRow,
  SupportIcon,
  ClockIcon,
  More,
} from "./style";
const SellerInfo = ({state, city}) => {
    return (
      <Container>
        <Title>Información sobre el vendedor</Title>
  
        <LocationCard>
          <LocationIcon />
  
          <div>
            <p>Ubicación</p>
            <strong>{state}, {city}</strong>
          </div>
        </LocationCard>
  
        <ReputationCard>
          <ReputationThermometer>
            <li />
            <li />
            <li />
            <li />
            <li className="active" />
          </ReputationThermometer>
  
          <ReputationRow>
            <div>
              <strong>561</strong>
              <span>ventas en los últimos 4 meses</span>
            </div>
            <div>
              <strong>
                <SupportIcon />
              </strong>
              <span>Brinda buena atención</span>
            </div>
            <div>
              <strong>
                <ClockIcon />
              </strong>
              <span>Despacha sus productos a tiempo</span>
            </div>
          </ReputationRow>
        </ReputationCard>
  
        <More href="#">Ver más datos del vendedor</More>
      </Container>
    );
  };

  export default SellerInfo