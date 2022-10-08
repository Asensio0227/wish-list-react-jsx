import {Link} from 'react-router-dom'
import Wrapper from '../assets/Wrappers/About'

const AboutPage = () => {
  return (
    <Wrapper className='section-center'>
      <article>
        <h2>about us</h2>
        <p>
          Hoodie praxis photo booth shoreditch. Asymmetrical shabby chic +1 kogi, poutine mukbang air plant jean shorts. 3 wolf moon distillery drinking vinegar humblebrag sustainable. Vinyl photo booth la croix, put a bird on it artisan beard next level readymade. YOLO glossier ascot vibecession cornhole, art party coloring book.
          Air plant ascot knausgaard four loko, cliche raw denim beard. Lumbersexual hot chicken tumblr, put a bird on it art party fingerstache copper mug drinking vinegar palo santo humblebrag bicycle rights portland glossier sustainable. Schlitz try-hard drinking vinegar, synth selvage brunch church-key chia. DIY stumptown four loko, craft beer occupy lomo disrupt taiyaki activated charcoal big mood jean shorts kogi locavore flannel. Fanny pack helvetica yes plz four dollar toast flexitarian, echo park scenester vinyl tonx post-ironic waistcoat everyday carry lo-fi four loko. Wayfarers normcore sartorial distillery man bun meditation, heirloom meh green juice.
        </p>
        <Link
          className='btn-primary'
          to='/'
        >
          back home
        </Link>
      </article>
    </Wrapper>
  )
}

export default AboutPage