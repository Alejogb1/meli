import React from "react";

import {
  Container,
  Condition,
  Row,
  HeartIcon,
  DispatchTag,
  PriceCard,
  PriceRow,
  InstallmentsInfo,
  StockStatus,
  MethodCard,
  CheckIcon,
  Actions,
  Button,
  Benefits,
  ShieldIcon,
} from "./style";

const ProductAction = ({title, condition, price, free_shipping}) => {
  return (
    <Container>
      <Condition>{condition}</Condition>

      <Row>
        <h1>{title}</h1>
        <HeartIcon />
      </Row>
      <DispatchTag>Envíos normales</DispatchTag>

      <PriceCard>
        <PriceRow>
          <span className="symbol">ARS$</span>
          <span className="fraction">{price}</span>
          <span className="cents">00</span>
        </PriceRow>

        <InstallmentsInfo>en 3 cuotas de ${(price/3).toFixed()}</InstallmentsInfo>
      </PriceCard>

      <StockStatus>Disponible</StockStatus>

      <MethodCard>
        {free_shipping === true ? (
          <> 
            <CheckIcon />
            <div>
              <span className="title">Envío gratis a todo el país</span>
              <span className="details">Benefício Mercado Envíos</span>
              <a href="#" className="more">
                Ver más opciones
              </a>
            </div>
          </>       
        ) : (<></>)}
       
      </MethodCard>

      <Actions>
        <Button solid>Comprar ahora</Button>
        <Button>Agregar al carrito</Button>
      </Actions>

      <Benefits>
        <li>
          <ShieldIcon />
          <p>
          Compra Protegida, recibí el producto que esperabas o te devolvemos tu dinero.
          </p>
        </li>
      </Benefits>
    </Container>
  );
};

export default ProductAction;
