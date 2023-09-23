import { Metaupdata } from './types/Metaupdata'

export const metaupdata: Metaupdata = {
  city: {
    name: 'Phoenix',
    position: 'left',
  },
  description:
    'The Phoenix BitDevs is a place for free and open Bitcoin education in Phoenix. Discussions will be technical but are open to people of all skill levels. Join the community and #LearnBitcoinTogether!',
  colors: {
    primary: {
      hex: '#FFFFFF',
      rgb: 'rgb(255, 153, 0)',
    },
    secondary: {
      hex: '#333333',
      rgb: 'rgb(51, 51, 51)',
    },
    tertiary: {
      hex: '#FF9900',
      rgb: 'rgb(255, 255, 255)',
    },
  },
  mainNav: [
    {
      text: 'Home',
      link: '/',
    },
    {
      text: 'About',
      link: '/page/about',
    },
    {
      text: 'Meetup',
      link: 'https://www.meetup.com/azbitcoin',
    },
    {
      text: 'Contact',
      link: '/page/contact',
    },
  ],
  image: '/phoenix-bitdevs-poster.jpg',
}
