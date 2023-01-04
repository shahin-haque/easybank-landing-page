import Image from 'next/image';

import desktopBgIntro from '../public/bg-intro-desktop.svg';
import mockups from '../public/image-mockups.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="illustration-mockups">
        <picture className="illustration">
          <source media="(max-width:46rem)" srcSet="/bg-intro-mobile.svg" />
          <source media="(min-width:47rem)" srcSet="/bg-intro-desktop.svg" />
          <Image src={desktopBgIntro} alt="illustration" />
        </picture>
        <Image className="mockups" src={mockups} alt="mockups" />
      </div>
      <article className="hero-info">
        <h1>Next generation digital banking</h1>
        <p>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <button className="btn">Request Invite</button>
      </article>
    </section>
  );
};

export default Hero;
