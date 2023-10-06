import React from 'react';
import Link from 'next/link';

const GhostwritingBanner = (props) => {
  return (
    <section className={` ${props.banneraffordable} bg-cover py-[100px] xs:py-8` } alt="affordable ghostwriting services">
      <div className="container max-w-7xl">
        <div className="row grid grid-cols-2 xs:grid-cols-1 text-white">
          <div className="col-md-6">
            <h1 className="text-4xl font-bold max-w-[82%] leading-10 xs:max-w-[100%]">
              {props.title}
            </h1>
            <p className="mt-4 max-w-[70%] text-[16px] font-normal xs:max-w-[100%]">
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
