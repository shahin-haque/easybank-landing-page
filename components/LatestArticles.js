import Image from 'next/image';
import React from 'react';

const LatestArticles = () => {
  return (
    <section className="latest-article">
      <div className="container">
        <header>
          <h2>Latest Articles</h2>
        </header>
        <div className="article-list">
          <div className="articles">
            <figure>
              <Image
                src="/image-currency.jpg"
                alt="img"
                width={300}
                height={200}
              />
              <figcaption>By Claire Robinson</figcaption>
            </figure>
            <p className="bold-text">
              Receive money in any currency with no fees
            </p>
            <p>
              The world is getting smaller and we’re becoming more mobile. So
              why should you be forced to only receive money in a single …
            </p>
          </div>

          <div className="articles">
            <figure>
              <Image
                width={300}
                height={200}
                src="/image-restaurant.jpg"
                alt="img"
              />
              <figcaption>By Wilson Hutton</figcaption>
            </figure>
            <p className="bold-text">
              Treat yourself without worrying about money
            </p>
            <p>
              Our simple budgeting feature allows you to separate out your
              spending and set realistic limits each month. That means you …
            </p>
          </div>

          <div className="articles">
            <figure>
              <Image
                width={300}
                height={200}
                src="/image-plane.jpg"
                alt="img"
              />
              <figcaption>By Wilson Hutton</figcaption>
            </figure>
            <p className="bold-text">Take your Easybank card wherever you go</p>
            <p>
              We want you to enjoy your travels. This is why we don’t charge any
              fees on purchases while you’re abroad. We’ll even show you …
            </p>
          </div>

          <div className="articles">
            <figure>
              <Image
                width={300}
                height={200}
                src="/image-confetti.jpg"
                alt="img"
              />
              <figcaption>By Claire Robinson</figcaption>
            </figure>
            <p className="bold-text">
              Our invite-only Beta accounts are now live!
            </p>
            <p>
              After a lot of hard work by the whole team, we’re excited to
              launch our closed beta. It’s easy to request an invite through the
              site ...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;
