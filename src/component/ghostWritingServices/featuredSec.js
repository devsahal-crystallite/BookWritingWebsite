import React from 'react';
import Link from 'next/link';

const GhostwritingBanner = (props) => {
  return (
    <section className={` ${props.banneraffordable} bg-cover lg:py-[100px]` } alt="affordable ghostwriting services">
      <div className="container max-w-7xl">
        <div className="row grid grid-cols-2 text-white">
          <div className="col-md-6">
            <h1 className="lg:text-4xl font-bold lg:max-w-[82%] lg:leading-10">
              {props.title}
            </h1>
            <p className="mt-4 lg:max-w-[70%] lg:text-[16px] font-normal">
             {props.dec}
            </p>
            <div className="mt-6">
              {props.href1}
              {props.href2}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GhostwritingBanner;
