
import styled from "styled-components";
import Product from "../components/Product";


const Products = ({elements, addtobag}) => {
  

  return(
      <ProductsGrid>
        {elements?.map((product) => <Product data={product} addtobag={addtobag}/>)}
      </ProductsGrid>
  )
}

export default Products;

const ProductsGrid = styled.div`
  height: 100%;
  overflow-y: auto;
  ::-webkit-scrollbar{
    /* display: none; */
  }
  
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(223px, 1fr));
  grid-auto-flow: dense;
  gap: 16px;
`