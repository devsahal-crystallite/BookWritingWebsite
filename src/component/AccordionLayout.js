// components/AccordionLayout.js

import React, { useState } from 'react';


const AccordionLayout = () => {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleAccordion = (index) => {
        if (activeAccordion === index) {
            setActiveAccordion(null);
        } else {
            setActiveAccordion(index);
        }
    };

    const accordionData = [
        {
            title: 'What is the average cost of a ghostwriter?',
            content: 'Costs for ghostwriters vary quite a bit depending on the scope of the project and the length of the book as well.',
        },
        {
            title: 'What are the services of a ghost writer?',
            content: 'A ghostwriter writes your book and gets paid for it, you maintain all rights to the book whereas the ghostwriter simply gets paid for the service.'
        },
        {
            title: 'Do ghostwriters write whole book?',
            content: 'Usually yes sometimes an author might write a book with an author where both parties write the book together, again this varies a bit.'
        },
        {
            title: 'Is it worth hiring a ghost writer?',
            content: 'It’s absolutely worth it to hire a quality ghostwriter who has the expertise and knowledge to take your ideas to the next level.'
        },
        {
            title: 'Can a ghostwriter steal a book?',
            content: 'No, as it is illegal for a ghostwriter to claim the book as their own, a ghostwriter is only someone hired to write a book on the basis that they get paid for the words they wrote.'
        },
        {
            title: 'Do all authors use ghost writers?',
            content: 'Not all but many authors do even famous ones, often times authors have series and a high volume of books to complete which leads to them utilizing ghostwriters.'
        },
        {
            title: 'Do ghostwriters get royalties?',
            content: 'No, as a ghostwriter you are not entitled to any royalties, you’re simply entitled to being paid for the work you’ve done.'
        },
        {
            title: 'Is ghostwriting illegal?',
            content: 'No it is not, it’s a perfectly legal service and many authors have utilized ghostwriters and continue to do so.'
        },
    ];

    return (
        <>

            <section className='bg-[#F5F5F5]'>
                <div className="container max-w-7xl mx-auto py-8 px-10 ">
                    <div className="p-4 heading items-center justify-center mx-auto text-center">
                        <h6>FAQS</h6>
                        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
                        <p className='lg:max-w-[70%] mx-auto my-5 text-[#05193c] font-normal text-[17px]'>
                            Reach Out to us for any Asistance
                        </p>
                        <div className="space-y-3 grid grid-cols-2 grid-rows-1 space-x-3">
                            {accordionData.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-3"
                                >
                                    <button
                                        onClick={() => toggleAccordion(index)}
                                        className="w-full flex justify-between items-center"
                                    >
                                        <span className="text-lg font-semibold">{item.title}</span>
                                        <svg
                                            className={`w-5 h-5 ${activeAccordion === index ? 'transform rotate-180' : ''
                                                }`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M19 9l-7 7-7-7"
                                            ></path>
                                        </svg>
                                    </button>
                                    <div
                                        className={`${activeAccordion === index ? 'block' : 'hidden'
                                            } p-4`}
                                    >
                                        <p>{item.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>


        </>

    );
};

export default AccordionLayout;
