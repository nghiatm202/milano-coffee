import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../button'
import './style.scss'

export interface HeaderProps {
  children?: React.ReactNode
}

export function Header({ children }: HeaderProps) {
  return (
    <section id="header">
      <div className="container">
        <div className="inner">
          <div className="logo">
            <Link to="/">
              <img src="https://milanocoffee.com.vn/img/milano-logo.svg" alt="Milano Logo" />
            </Link>
          </div>

          <ul className="menu">
            <li className="menu__item">
              <Link to="/" className="menu__link">
                Giới Thiệu
              </Link>
              <ul className="sub-menu">
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    Dự án tiêu biểu
                  </a>
                </li>
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    Kênh phân phối
                  </a>
                </li>
              </ul>
            </li>

            <li className="menu__item">
              <a href="" className="menu__link">
                Nhượng Quyền
              </a>
              <ul className="sub-menu">
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    Mô hình G1
                  </a>
                </li>
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    Mô hình G2
                  </a>
                </li>
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    Mô hình Kiosk
                  </a>
                </li>
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    Mô hình Container
                  </a>
                </li>
              </ul>
            </li>

            <li className="menu__item">
              <a href="" className="menu__link">
                Tin Tức
              </a>
              <ul className="sub-menu">
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    Tin Về Milano Coffee
                  </a>
                </li>
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    Góc Báo Chí
                  </a>
                </li>
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    Kiến Thức Kinh Doanh
                  </a>
                </li>
              </ul>
            </li>

            <li className="menu__item">
              <a href="" className="menu__link">
                Hệ Thống Đại Lý
              </a>
              <ul className="sub-menu">
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    TP Hồ Chí Minh
                  </a>
                </li>
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    Khu vực miền Bắc
                  </a>
                </li>
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    Khu vực miền Trung
                  </a>
                </li>
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    Khu vực miền Nam
                  </a>
                </li>
              </ul>
            </li>

            <li className="menu__item">
              <a href="" className="menu__link">
                Sản Phẩm
              </a>
              <ul className="sub-menu">
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    Cà phê phin giấy
                  </a>
                </li>
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    Cà phê sữa mới
                  </a>
                </li>
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    Các món thức uống
                  </a>
                </li>
              </ul>
            </li>

            <li className="menu__item">
              <Link to="/lien-he" className="menu__link">
                Liên Hệ
              </Link>
            </li>

            <li className="menu__item">
              <a href="" className="menu__link">
                Tuyển Dụng
              </a>
            </li>
          </ul>

          <Button text="Yêu Cầu Tư Vấn" />
        </div>
      </div>
    </section>
  )
}
