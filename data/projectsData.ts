export interface Project {
  title: string
  description: string
  href: string
  hrefLive?: string
  imgSrc: string
  imgSrcMobile: string
}

const projectsData: Project[] = [
  {
    title: 'CBS Executive',
    description: `What if you could look up any information in the world? Webpages, images, videos
    and more. Google has many features to help you find exactly what you're looking
    for.`,
    imgSrc: '/static/images/cbs-desktop.png',
    imgSrcMobile: '/static/images/cbs-mobile.png',
    href: '/blog/cbs-executive',
    hrefLive: 'https://cbs-executive.dk/',
  },
  {
    title: 'CIM Convention 2024',
    description: `Imagine being able to travel back in time or to the future. Simple turn the knob
    to the desired date and press "Go". No more worrying about lost keys or
    forgotten headphones with this simple yet affordable solution.`,
    imgSrc: '/static/images/time-machine.jpg',
    imgSrcMobile: '/static/images/time-machine.jpg',
    href: '/blog/the-time-machine',
  },
  {
    title: 'Curv Carbon',
    description: `Imagine being able to travel back in time or to the future. Simple turn the knob
    to the desired date and press "Go". No more worrying about lost keys or
    forgotten headphones with this simple yet affordable solution.`,
    imgSrc: '/static/images/time-machine.jpg',
    imgSrcMobile: '/static/images/time-machine.jpg',
    href: '/blog/the-time-machine',
  },
]

export default projectsData
