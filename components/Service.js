import Image from 'next/image';
import React from 'react';

const Service = () => {
  return (
    <section className="service">
      <div className="container">
        <header>
          <h2>Why choose Easybank?</h2>
          <p>
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </header>
        <article className="service-info">
          <div className="">
            <Image src="/icon-online.svg" alt="" width={50} height={50} />
            <h4> Online Banking</h4>
            <p>
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </p>
          </div>
          <div className="">
            <Image src="/icon-budgeting.svg" alt="" width={50} height={50} />

            <h4>Simple Budgeting</h4>
            <p>
              See exactly where your money goes each month. Receive
              notifications when you’re close to hitting your limits.
            </p>
          </div>
          <div className="">
            <Image src="/icon-onboarding.svg" alt="" width={50} height={50} />

            <h4>Fast Onboarding</h4>
            <p>
              We don’t do branches. Open your account in minutes online and
              start taking control of your finances right away.
            </p>
          </div>
          <div className="">
            <Image src="/icon-api.svg" alt="" width={50} height={50} />

            <h4>Open API</h4>
            <p>
              Manage your savings, investments, pension, and much more from one
              account. Tracking your money has never been easier.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Service;
