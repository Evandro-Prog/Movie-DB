import { Container } from './styles'
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'
import Card from '../Card'




function Slider({ info, title }) {

    return (
        <Container>
            <h2>{title}</h2>
            <Swiper
                grabCursor={true}
                spaceBetween={30}
                slidesPerView={5}
                className="swiper"
            >
                {info.map((item, index) => (
                    <SwiperSlide key={index}>
                      <Card item={item}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    )
}

export default Slider