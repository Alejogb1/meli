import {Container, Wrapper, Row,
    Panel,
    Column,
    Gallery,
    Section,
    Description,} from "./style" 
import {useParams} from "react-router-dom"
import ProductAction from "../../Components/ProductAction/index";
import SellerInfo from "../../Components/SellerInfo/index";
import useProduct from "../../customHooks/useProduct"
const Product = () => {
    const {id} = useParams()
    const [info] = useProduct(id)
    console.log(info)
    const product = info.product.information
    console.log("PRODUCT", product)
    if (info) {
        return (
            <>
            {info.fetching ? (
                <h3>Cargando...</h3>
            ) : (
                    <Container>
                        <Wrapper>
                            <Container>
                                <Row>
                                    <a href="#">Compartir</a>
                                    <a href="#">Vender uno igual</a>
                                </Row>
                            </Container>
                            <Panel>
                                <Column>
                                    <Gallery>
                                        <img alt="T-Shirt" src={product.pictures[0].url} />
                                    </Gallery>
                                     <Info description={product.plain_text} />
                                </Column>
            
                                <Column>
                                    <ProductAction free_shipping={product.shipping.free_shipping} price={product.base_price} condition={product.condition} title={product.title} />
                                    <SellerInfo  state={product.seller_address.state.name} city={product.seller_address.city.name} />
            
                                    <WarrantySection />
                                    <WarrantySection />
                                    <WarrantySection />
                                </Column>
                            </Panel>
                        </Wrapper>
                    </Container>   
            )}
            </>
        )
       
    }
}
const WarrantySection = () => (
    <Section>
      <h4>Garantia</h4>
  
      <div>
        <span>
          <p className="title">Compra Garantízada</p>
          <p className="description">
          Tu compra está protegida. Si hay algún problema o no recibes el producto tal como lo compraste, te devolvemos el dinero que pagaste.
          </p>
        </span>
        <span>
          <p className="title">Garantía del vendedor</p>
          <p className="description">Garantía de fábrica: 6 meses</p>
        </span>
      </div>
  
      <a href="#">Conocer más sobre Compra Protegida</a>
    </Section>
  );
  
  const Info = ({description}) => (
    <Description>
      <h2>Descripción</h2>
  
      <p>
       {description}
      </p>
    </Description>
  );

export default Product