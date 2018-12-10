import ItemProduct from "../components/client/grid/ItemProduct";
import GridHeader from "../components/client/grid/GridHeader";
import "../static/style.css"
export default class App extends React.Component {
  render() {
    return <><div className="woodmart-products-tabs tabs-wd-5c003e1e0b459 tabs-design-simple ">
    <GridHeader/>
    <div className="woodmart-tab-content">
      <div className="woodmart-products-element">
        <div className="woodmart-products-loader" />
        <div className="products elements-grid align-items-start row woodmart-products-holder  woodmart-spacing-20 grid-columns-6 pagination-arrows" data-paged={1} data-source="shortcode">
          <ItemProduct />
          <ItemProduct />
          <ItemProduct />
          <ItemProduct />
          <ItemProduct />
          <ItemProduct />
          <ItemProduct />
          <ItemProduct />
          <ItemProduct />
          <ItemProduct />
          <ItemProduct />
          <ItemProduct />
          <div className="products-footer">
            <div className="wrap-loading-arrow">
              <div className="woodmart-products-load-prev disabled">Load previous products</div>
              <div className="woodmart-products-load-next">Load next products</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>;
  }
}
