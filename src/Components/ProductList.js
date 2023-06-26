
import { useFilterContext } from "../Context/filterContext";
import GridView from "./GridView";

const ProductList = () => {

    const { filter_products, grid_view } = useFilterContext();


    if (grid_view === true) {
        return <GridView products={filter_products} />;
    }

    return (<div>product</div>)
}

export default ProductList;