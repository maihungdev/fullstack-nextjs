import React, { Component } from 'react'
import '../../../static/desktop/header/header.css'
import HeaderCart from './HeaderCart';

export default class Header extends Component {
  render() {
    return (
     <>
     <header id="header">
  <div className="top-promo">
    <div className="container">
      <div className="right">
        <a className="top-label" target="_blank" href="https://tiki.vn/top/uu-dai-doi-tac?src=header_label" title="Ưu đãi đối tác" onclick>
          <i className="tikicon icon-uu-dai-hop-tac" /> Ưu đãi đối tác
        </a>
        <a className="top-label" target="_blank" href="https://tiki.vn/phieu-qua-tang/c13744?src=header_label" title="Phiếu quà tặng" onclick>
          <i className="tikicon icon-gift-card" /> Phiếu quà tặng
        </a>
        <a className="top-label" target="_blank" href="https://tiki.vn/booking/hotel?src=header_label" title=" Đặt khách sạn" onclick>
          <i className="tikicon icon-booking_dot_com" /> Đặt khách sạn
        </a>
        <a className="top-label" target="_blank" href="https://tiki.vn/dat-ve-may-bay?src=header_label" title="Đặt vé máy bay" onclick>
          <i className="tikicon icon-gotadi" /> Đặt vé máy bay
        </a>
        <a className="top-label" target="_blank" href="https://tiki.vn/chuong-trinh/clearance-sale?src=header_label" title="Săn hàng tồn" onclick>
          <i style={{marginTop: '-1px'}} className="tikicon icon-clearance-sale" />
          Săn hàng tồn
        </a>
        <a className="top-label" target="_blank" href="https://tiki.vn/deal-hot?src=header_label" title="Deal SỐC giảm giá mỗi ngày" onclick="ga('send','event','tiki-hot','click','header-label')">
          <i className="ico ico-fire" /> Khuyến Mãi HOT
        </a>
        <a className="top-label" target="_blank" href="https://tiki.vn/hang-ngoai-nhap?src=header_label" title="Mua hàng nước ngoài" onclick>
          <i className="tikicon icon-global-18" /> Mua hàng nước ngoài
        </a>
        <div className="sell-with-tiki top-label">
          <a target="_blank" href="/ban-hang-cung-tiki?ref=header-dropdown" title="Kinh doanh cùng Tiki" onclick="ga('send','event','tiki-sell-with-tiki','click','header-label');">
            <i className="tikicon icon-money_bag" /> Bán hàng cùng Tiki
            <i className="tikicon icon-arrow-down" />
          </a>
          <div className="collapse">
            <div className="title">Bán hàng hiệu quả cùng Tiki</div>
            <ul>
              <li>
                Hơn <b>30 triệu lượt truy cập</b> hàng tháng với hơn
                <b>40% là khách hàng trung thành</b>
              </li>
              <li>
                Trung bình <b>giao hàng dưới 2 ngày</b>, nhận tiền nhanh
                hơn, không làm đọng vốn
              </li>
              <li>
                Tỉ lệ <b>huỷ đơn hàng dưới 3%</b>, thấp nhất trên thị trường
              </li>
              <li>
                Kiểm soát chất lượng hàng hoá. Đảm bảo
                <b>cạnh tranh lành mạnh, không hàng giả, hàng nhái</b>
              </li>
            </ul>
            <a target="_blank" href="/ban-hang-cung-tiki?ref=header-dropdown" title="Kinh doanh cùng Tiki" className="register" onclick="ga('send','event','tiki-sell-with-tiki','click','header-label');">ĐĂNG KÝ NGAY</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="header-form-container">
    <div className="container">
      <a href="https://tiki.vn/" className="logo">
        <i className="tikicon icon-tiki_short" />
      </a>
      <div className="form-search">
        <form id="search_form" action="https://tiki.vn/search" method="get">
          <div className="search-wrap">
            <div className="input">
              <div className="flex">
                <input type="text" name="q" autoComplete="off" defaultValue placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn ..." />
              </div>
            </div>
            <button type="submit">
              <i className="tikicon icon-search" /> <span>Tìm kiếm</span>
            </button>
          </div>
        </form>
        <div id="search-suggestion" style={{display: 'none'}} />
        <div id="search-autocomplete" style={{display: 'none'}} />
      </div>
      <div className="header-link">
        <a rel="nofollow" href="https://tiki.vn/sales/order/history" title="Kiểm tra trạng thái Đơn hàng của bạn" className="tracking-order item">
          <i className="icon-style-1 tikicon icon-tracking" /> Theo dõi<br />đơn
          hàng
        </a>
        <div className="noti-item tracking-noti item" id="header-noti">
          <div>
            <div>
              <i className="icon-style-1 tikicon icon-notification" /> Thông
              báo<br />của tôi
            </div>
          </div>
        </div>
        <div className="user-profile item" id="header-user">
          <i className="icon-style-1 tikicon icon-user" />
          <b className="loading" /><br />
          Tài khoản
        </div>
       <HeaderCart/>
      </div>
    </div>
  </div>
  <div className="main-nav">
    <div className="container">
      <div className="feature location-picker" id="locationPicker">
        <a className="feature recently" href="javascript:">
          <span className="tikicon icon-arrow-down" /> Danh muc
        </a>
      </div>
      <div className="feature location-picker" id="locationPicker">
        <span className="tikicon icon-location-picker" />
        <span className="text"> Bạn muốn giao hàng tới đâu? </span>
      </div>
      <a className="feature recently" href="javascript:">
        <span className="tikicon icon-arrow-down" /> Sản phẩm bạn đã xem
      </a>
      <a href="https://tiki.vn/top/giao-hang-tiki" target="_blank" className="feature delivery-2h">
        <span className="tikicon icon-header_2h"> </span> 2-tiếng nhận hàng<br />
        Hàng trăm nghìn sản phẩm
      </a>
      <div className="feature exclusive">
        <span className="tikicon icon-exclusive" /> Tất cả sản phẩm<br />
        100% chính hiệu
      </div>
      <a href="https://tiki.vn/doi-tra-de-dang" target="_blank" className="feature return">
        <span className="tikicon icon-return"> </span> 30 ngày đổi trả dễ dàng
      </a>
    </div>
  </div>
</header>
     </>
    )
  }
}
