import { Carousel } from '@sefailyasoz/react-carousel'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
const MyApp = () => {

const CarouselData = [
  {
    headerText: null,
    subText: 'Arrow',
    image: 'https://webvideo-402.s3.amazonaws.com/carousel-web/arrow.jpg',
  },
  {
    headerText: null,
    subText: 'Snowpiercer',
    image: 'https://webvideo-402.s3.amazonaws.com/carousel-web/snowpiercer.jpg',
  },
  {
    headerText: null,
    subText: 'FRIENDS',
    image: 'https://webvideo-402.s3.amazonaws.com/carousel-web/friends.jpg',
  },
  {
    headerText: null,
    subText: 'Euphoria',
    image: 'https://webvideo-402.s3.amazonaws.com/carousel-web/euphoria.jpg',
  },
  {
    headerText: null,
    subText: 'Agents of S.H.I.E.L.D',
    image: 'https://webvideo-402.s3.amazonaws.com/carousel-web/shield.jpg',
  },
]
  return    <Carousel
              data={CarouselData}
              autoPlay={true}
              rightItem={<FaArrowRight />}
              leftItem={<FaArrowLeft />}
              animationDuration={3000}
              headerTextType="black"
              subTextType="white"
              size="normal"
            />
}

export default MyApp