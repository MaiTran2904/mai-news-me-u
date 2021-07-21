import React, { Component } from 'react';
import { Carousel, Card } from 'antd';
import { SlideSectionStyles, BlogCardItemStyle } from './styleHistory';

const { Meta } = Card;
class History extends Component
{
  listSlides = [
    {
      id: 1,
      image: 'assets/images/project/pnv.png',
      title: 'Năm 2010',
      description:
        'Khởi động dự án PN Việt Nam tại Đà Nẵng với 30 em sinh viên.',
    },
    {
      id: 2,
      image: 'assets/images/project/khoa1.jpeg',
      title: 'Năm 2012',
      description:
        'Lễ tốt nghiệp niên khóa đầu tiên của PN Philippines (24 sinh viên) và PN Việt Nam (27 sinh viên)',
    },
    {
      id: 3,
      image: 'assets/images/project/pn.png',
      title: 'Năm 2013',
      description:
        'Thành lập Passerelles numériques Hồng Kông, quỹ từ thiện do các tình nguyện viên sáng lập với mong muốn quảng bá PN và gây quỹ ủng hộ cho dự án.',
    },
    {
      id: 4,
      image: 'assets/images/project/pn10years.png',
      title: 'Năm 2015',
      description:
        'Passerelles numériques kỉ niệm 10 năm thành lập! Kể từ năm 2010, PN đã đào tạo miễn phí chương trình Công nghệ thông tin cho hơn 1500 sinh viên.',
    },
    {
      id: 5,
      image: 'assets/images/project/pnsea.jpg',
      title: 'Năm 2016',
      description:
        'Sự ra đời của tổ chức pháp nhân PN SEA (Đông Nam Á) ở Singapore với mục tiêu gây quỹ và nâng cao nhận thức về những hành động của tổ chức Passerelles numériques.',
    },
  ];

  render()
  {
    return (
      <SlideSectionStyles>
        <div className="container slide-section">
          <p className="title">History</p>
        </div>
        <Carousel
          centerMode
          className="slides font-manrope"
          // autoplay
          dotPosition="bottom"
          slidesToShow={3}
          dots
        >
          {this.listSlides.map( item =>
          (
            <div key={String( `slide-${ item.id }` )}>
              <BlogCardItemStyle>
                <Card hoverable cover={<img alt="example" src={item.image || ''} />} className="card">
                  <Meta title={item.title} description={item.description} />
                </Card>
              </BlogCardItemStyle>
            </div>
          ) )}
        </Carousel>
      </SlideSectionStyles>
    );
  }
};
export default History;
