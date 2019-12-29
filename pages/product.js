import Layout from "../components/Layout";
import { getProductById } from "../lib/moltin";
import ProductSummary from '../components/ProductSummary';
import ProductAttributes from '../components/ProductAttributes';

const ProductPage = ({ product }) => (
    <Layout title={product.name}>
        <ProductSummary {...product} />
        <ProductAttributes {...product} />
    </Layout>
)

ProductPage.getInitialProps = async ({ query: { id } }) => {
    const { data, included: { main_images } } = await getProductById(id);
    const imageId = data.relationships.main_image ? data.relationships.main_image.data.id : false;
    return {
        product: {
            ...data,
            image: imageId ? main_images.find(img => img.id === imageId).link.href : '/static/moltin-light-hex.svg'
        }
    }
}

export default ProductPage;