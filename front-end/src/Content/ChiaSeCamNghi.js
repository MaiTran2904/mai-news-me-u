import React, { Component } from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { TestimonialStyles } from './styleSharing';
import map from './map.png';
import quote from './quote.png';

const positions = [
  {
    top: '160px',
    left: 'calc(100vw / 2 - 65px)',
    transition: 'all 0.3s, opacity 0.5s 0.5s',
    zIndex: 2,
    opacity: 1,
    transform: 'scale(1)',
  },
  {
    top: '100px',
    left: '25%',
    transition: 'all 0.33s',
    opacity: 0,
    transform: 'scale(0.97)',
    zIndex: 1,
  },
  {
    top: '300px',
    left: '10%',
    transition: 'all 0.35s',
    opacity: 0,
    transform: 'scale(0.96)',
    zIndex: 1,
  },
  {
    top: '700px',
    left: '30%',
    transition: 'all 0.4s',
    opacity: 0,
    transform: 'scale(0.9)',
    zIndex: 1,
  },
  {
    top: '500px',
    left: '80%',
    transition: 'all 0.45s',
    opacity: 0,
    transform: 'scale(0.96)',
    zIndex: 1,
  },
  {
    top: '200px',
    left: '90%',
    transition: 'all 0.6s',
    opacity: 0,
    transform: 'scale(0.98)',
    zIndex: 1,
  },
];

const onPressNext = () =>
{
  const avatars = [];
  const tmp = document.getElementsByClassName( `testimonial-avatar` );
  for ( let i = 0; i < tmp.length; i += 1 )
  {
    avatars[Number( tmp[i].getAttribute( 'data-current-style' ) || '0' )] =
      tmp[i];
  }

  avatars.forEach( ( avatar ) =>
  {
    const nextStyle = Number( avatar.getAttribute( 'data-next-style' ) || '0' );
    const index = Number( avatar.getAttribute( 'index' ) || '0' );

    avatar.style.top = positions[nextStyle].top;
    avatar.style['z-index'] = positions[nextStyle].zIndex;
    avatar.style.transform = positions[nextStyle].transform;
    if ( positions[nextStyle].left )
    {
      avatar.style.left = positions[nextStyle].left;
      avatar.style.right = 'auto';
    } else
    {
      avatar.style.left = 'auto';
      avatar.style.right = positions[nextStyle].right;
    }

    document.getElementById( `testimonial-${ index }` ).style.transition =
      positions[nextStyle].transition;
    document.getElementById( `testimonial-${ index }` ).style.opacity =
      positions[nextStyle].opacity;
    avatar.style.transition = positions[nextStyle].transition;
    avatar.setAttribute( 'data-current-style', nextStyle );
    avatar.setAttribute(
      'data-next-style',
      nextStyle === 5 ? 0 : nextStyle + 1,
    );
  } );
};

const onPressPrev = () =>
{
  const avatars = [];
  const tmp = document.getElementsByClassName( `testimonial-avatar` );
  for ( let i = 0; i < tmp.length; i += 1 )
  {
    avatars[Number( tmp[i].getAttribute( 'data-current-style' ) || '0' )] =
      tmp[i];
  }

  avatars.forEach( ( avatar ) =>
  {
    const prevStyle =
      Number( avatar.getAttribute( 'data-current-style' ) || '0' ) === 0
        ? 5
        : Number( avatar.getAttribute( 'data-current-style' ) || '0' ) - 1;
    const index = Number( avatar.getAttribute( 'index' ) || '0' );

    avatar.style.top = positions[prevStyle].top;
    avatar.style['z-index'] = positions[prevStyle].zIndex;
    avatar.style.transform = positions[prevStyle].transform;
    if ( positions[prevStyle].left )
    {
      avatar.style.left = positions[prevStyle].left;
      avatar.style.right = 'auto';
    } else
    {
      avatar.style.left = 'auto';
      avatar.style.right = positions[prevStyle].right;
    }

    document.getElementById( `testimonial-${ index }` ).style.transition =
      positions[prevStyle].transition;
    document.getElementById( `testimonial-${ index }` ).style.opacity =
      positions[prevStyle].opacity;
    avatar.style.transition = positions[prevStyle].transition;
    avatar.setAttribute( 'data-current-style', prevStyle );
    avatar.setAttribute(
      'data-next-style',
      prevStyle === 5 ? 0 : prevStyle + 1,
    );
  } );
};
class ChiaSeCamNghi extends Component
{
  testimonials = [
    {
      image: 'assets/images/testimonial/t-5.png',
      author: 'Nguyễn Thị Mỹ Trang',
      subAuthor: 'Sinh viên khoá PNV20',
      content:
        'Tôi cảm thấy thật hạnh phúc và đầy may mắn khi có cơ hội được tập tại một môi trường chuyên nghiệp và đầy sự quan tâm của mọi người trong đại gia đình PNV thân thương. Trong khoảng thời gian 3 năm học tập, chương trình đào tạo chuyên môn IT và tiếng Anh nâng cánh cho tôi trong con đường sự nghiệp IT. Tôi sẽ cố gắng và phát triển bản thân và Xin hân thành cảm ơn ngôi nhà PNV.',
    },
    {
      image: 'assets/images/testimonial/t-1.png',
      author: 'Ngô Thị Mỹ Hoài',
      subAuthor: 'Sinh viên, khóa 2023, PN Việt Nam',
      content:
        'Nhiều người đã hỏi em rằng “Tại sao là con gái mà mà lại chọn nghề IT này cho cực, sao không đi theo ngành giáo viên hay du lịch cho khỏe”, rồi “Con gái theo ngành này thì không bao giờ bằng con trai đâu”. Khi ấy em cũng không biết phải trả lời thế nào, chỉ biết rằng mình nhất định phải theo đuổi ước mơ này dù có chuyện gì. Em tin rằng nếu cố gắng thì em sẽ làm được. Và em đã chọn PN là nơi nuôi dưỡng ước mơ ấy.',
    },
    {
      image: 'assets/images/testimonial/t-2.png',
      author: 'Lucas SINROD',
      subAuthor: 'Giáo đốc Đào tạo & IT, PN Việt Nam',
      content:
        'Người ta luôn nghĩ rằng thế giới CNTT rất lạnh lẽo vì chỉ toàn máy móc và AI. Nhưng thông qua PN, tôi đã khám phá lại khía cạnh nhân văn của công nghệ. Những nụ cười tươi tắn hay hay những gương mặt tò mò của sinh viên đã gợi nhớ cho tôi về lí do mà mình bắt đầu học code. Chính là vì thế giới trong máy tính và những tiến bộ công nghệ tràn đầy sức hấp dẫn ấy! Ở PN Việt Nam, chúng tôi đang đào tạo ra những kỹ sư công nghệ từ những sinh viên lớn lên cùng việc đồng áng – nhiều em thậm chí còn chưa từng chạm vào máy tính trước đây. Và chúng tôi rất tận hưởng điều đó, bởi tại sao không chứ?',
    },
    {
      image: 'assets/images/testimonial/t-4.png',
      author: 'Nguyễn Hữu Tuấn',
      subAuthor: 'Sinh viên khoá PNV20',
      content:
        'Thành công không đến từ may mắn, nó đến nhờ sự nỗ lực và không ngừng nỗ lực mỗi ngày. Vì vậy, điều quan trọng không phải đường xa bao nhiêu mà là bạn nhìn thấy đích đến gần trước mắt như nào. PNV mang đến cho tôi cơ hội để thực hiện ước định thành công đích thực của tôi.',
    },
    {
      image: 'assets/images/testimonial/t-6.png',
      author: 'Hồ Thị Hươu',
      subAuthor: 'Sinh viên khoá PNV22',
      content:
        'Em muốn xây nhà cho bố mẹ. Em muốn đưa bố mẹ đi du lịch ở Đà Nẵng, bố mẹ em chưa được thấy biển bao giờ. Em sẽ mua cho bố mẹ một cái bánh kem thật to, vì bố mẹ cũng chưa bao giờ được ăn thử. Và em muốn chia sẻ với cộng đồng nơi em ở về những điều tuyệt vời PNV đã đem lại cho em.',
    },
    {
      image: 'assets/images/testimonial/t-3.png',
      author: 'Cường NGUYỄN HỮU',
      subAuthor: 'Cựu sinh viên PNV, khóa 2019, Lập trình viên full stack, mgm technology partners',
      content:
        'PN Việt Nam đến như một phép màu. Chúng em là khóa đâu tiên của chương trình đào tạo mới kéo dài 3 năm. Chúng em đã có nhiều thời gian hơn để tìm hiểu các công nghệ tiên tiến mà các công ty cần, cũng như cải thiện khả năng tiếng Anh và kĩ năng mềm của mình – những hành trang cần thiết trên con đường sự nghiệp. Chúng em được học cách trở thành một thành viên có giá trị trong nhóm, một nhà lãnh đạo tài tình, hoặc thậm chí là một doanh nhân thành công. Và hơn hết, học phần Chuyên môn hóa và kỳ thực tập cuối cùng chính là cơ hội để em tăng khả năng được tuyển dụng của mình một cách đáng kinh ngạc. Bây giờ, em rất tự hào khi nói rằng em đã có thể chăm sóc cho bản thân và gia đình. Em cảm thấy có thêm động lực để cống hiến cho cộng đồng bằng cách tham gia Hội Cựu sinh viên PN Việt Nam và các hoạt động xã hội khác.',
    },
  ];

  render()
  {
    return (
      <>
        {/* <div className="container slide-section">
          <p style={{fontSize: 48, fontWeight: 'bold', margin: '20px 0px', color: 'black'}}>Sharing</p>
        </div> */}
        <TestimonialStyles>
          <div className="relative">
            <img src={map} className="img-map" alt="" />
            <div className="testimonial-content">
              <div className="container">
                {this.testimonials.map( ( e, index ) => (
                  <img
                    id={`avatar${ index }`}
                    className={`avatar${ index } testimonial-avatar`}
                    alt=""
                    key={String( index )}
                    data-next-style={index === this.testimonials.length - 1 ? '0' : index + 1}
                    data-current-style={index}
                    index={index}
                    src={e.image}
                  />
                ) )}

                <div className="center testimonial-current">
                  {this.testimonials.map( ( e, index ) => (
                    <div
                      key={`testimonial-${ String( index ) }`}
                      id={`testimonial-${ index }`}
                      className="absolute"
                    >
                      <img className="img-quote" src={quote} alt="" />
                      <p id="testimonial-quote" className="testimonial-quote">
                        {e.content}
                      </p>
                      <div id="testimonial-author" className="testimonial-author">
                        {`- ${ e.author } -`}
                      </div>
                      <div id="testimonial-author" className="testimonial-description">
                        {`${ e.subAuthor }`}
                      </div>
                    </div>
                  ) )}
                  <div
                    role="presentation"
                    onClick={onPressPrev}
                    className="btn-prev pointer center"
                  >
                    <LeftOutlined />
                  </div>
                  <div
                    role="presentation"
                    onClick={onPressNext}
                    className="btn-next pointer  center"
                  >
                    <RightOutlined />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TestimonialStyles>
      </>
    );
  }
}

export default ChiaSeCamNghi;
