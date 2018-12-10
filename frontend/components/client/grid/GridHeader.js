export default class GridHeader extends React.Component {
  render() {
    return (
      <>
        <div className="woodmart-tabs-header">
          <div className="woodmart-tabs-loader" />
          <div className="tabs-name">
            <span className="tabs-text">POPULAR IN CATEGORY</span>
          </div>
          <div className="tabs-navigation-wrapper">
            <span className="open-title-menu">WATCHES</span>
            <ul className="products-tabs-title">
              <li
                data-atts='{"title":"WATCHES","post_type":"ids","items_per_page":"6","pagination":"arrows","product_hover":"quick","columns":"6","orderby":"post__in","include":"15020, 15018, 15029, 15045, 15023, 15031, 15043, 15042, 15038, 15036, 15034, 15047","carousel_js_inline":"yes"}'
                className=" active-tab-title"
              >
                <span className="tab-label">WATCHES</span>
              </li>
              <li
                data-atts='{"title":"JEWELRY","post_type":"ids","items_per_page":"6","pagination":"arrows","product_hover":"quick","columns":"6","orderby":"post__in","include":"15055, 15068, 15069, 15070, 15071, 15072, 15073, 15075, 15076, 15077, 15078, 15079","carousel_js_inline":"yes"}'
                className
              >
                <span className="tab-label">JEWELRY</span>
              </li>
              <li
                data-atts='{"title":"FURNITURE","post_type":"ids","items_per_page":"6","pagination":"arrows","product_hover":"quick","columns":"6","orderby":"post__in","include":"14988, 14959, 14985, 14958, 14983, 14957, 14979, 14948, 14977, 14961, 14956, 14981","carousel_js_inline":"yes"}'
                className
              >
                <span className="tab-label">FURNITURE</span>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}
