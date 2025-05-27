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
    title: 'Curv Carbon',
    description: `Simplifying the process of buying and selling carbon credits, enabling collective engagement from public and private sectors to address the global challenge of achieving net zero.`,
    imgSrc: '/static/images/curv-carbon-desktop.png',
    imgSrcMobile: '/static/images/curv-carbon-mobile.png',
    href: 'https://curvcarbon.com/',
    hrefLive: 'https://curvcarbon.com/',
  },
  {
    title: 'Chaud Devant!',
    description: `Blending the sophistication of fine dining with the spontaneity of pop-up culture, Chaud Devant! redefines Montreal’s catering scene.`,
    imgSrc: '/static/images/chaud-devant-desktop.png',
    imgSrcMobile: '/static/images/chaud-devant-mobile.png',
    href: 'https://www.chauddevant.ca/',
    hrefLive: 'https://www.chauddevant.ca/',
  },
  {
    title: 'CBS Executive',
    description: `Bridging academic rigor with real-world leadership, CBS Executive shapes the future of business through immersive, research-driven executive education.`,
    imgSrc: '/static/images/cbs-desktop.png',
    imgSrcMobile: '/static/images/cbs-mobile.png',
    href: 'https://cbs-executive.dk/',
    hrefLive: 'https://cbs-executive.dk/',
  },
  {
    title: 'CIM Convention 2024',
    description: `Uniting industry leaders, innovators, and changemakers, the CIM Convention is Canada’s premier stage for shaping the future of mining through technology, sustainability, and collaboration.`,
    imgSrc: '/static/images/cim-desktop.png',
    imgSrcMobile: '/static/images/cim-mobile.png',
    href: 'https://convention.cim.org/',
    hrefLive: 'https://convention.cim.org/',
  },
]

export default projectsData
