import { Carousel } from '@sefailyasoz/react-carousel'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
const MyApp = () => {

const CarouselData = [
  {
    headerText: null,
    subText: 'Arrow',
    image: 'https://flxt.tmsimg.com/assets/p9263605_ce_h10_aa.jpg',
  },
  {
    headerText: null,
    subText: 'Snowpiercer',
    image: 'https://flxt.tmsimg.com/assets/p16954802_b_h10_aa.jpg',
  },
  {
    headerText: null,
    subText: 'FRIENDS',
    image: 'https://www.scarletthinking.com/wp-content/uploads/2016/10/friends-tv-show-wallpapers-1280x1024.jpg',
  },
  {
    headerText: null,
    subText: 'Euphoria',
    image: 'https://cdn.wallpapersafari.com/16/93/f57Ck1.jpg',
  },
  {
    headerText: null,
    subText: 'Agents of S.H.I.E.L.D',
    image: 'https://images5.alphacoders.com/468/468535.jpg',
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