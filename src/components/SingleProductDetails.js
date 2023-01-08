import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { useLoaderData, useNavigation } from 'react-router-dom';
import { TfiWorld } from "react-icons/tfi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { PhotoProvider, PhotoView } from 'react-photo-view';


const SingleProductDetails = () => {

    const data = useLoaderData()
    const { details, gitHubClient, gitHubServer, imgURL, liveURl, technology } = data;

    const navigation = useNavigation()
    if (navigation.state === "loading") {
        return <div class="flex items-center justify-center ">
            <div class="w-24 h-24 border-l-2 border-gray-900 rounded-full animate-spin"></div>
        </div>
    }



    return (
        <div data-aos="zoom-in" className='lg:w-[1000px] w-full mx-auto px-3 lg:py-16 py-6'>
            <h2 className='text-3xl font-bold text-center text-gray-600'>Project-Details</h2>
            <h2 className='text-2xl font-semibold py-1.5'>Project Links</h2>
            <div className='lg:w-[420px] w-full flex justify-between items-enter'>
                <a className='flex items-center gap-1 bg-gradient-to-r from-cyan-500 to-blue-500 lg:px-5 px-3 py-1.5 rounded-full text-white font-medium' href={gitHubClient} target="blank"> <FaGithub className='text-xl' /> <span className='mt-1'>Client Code</span>  </a>
                <a className='flex items-center gap-1 bg-gradient-to-r from-cyan-500 to-blue-500 lg:px-5 px-3 py-1.5 rounded-full text-white font-medium' href={gitHubServer} target="blank"> <FaGithub className='text-xl' /> <span className='mt-1'>Server Code</span>  </a>
                <a className='flex items-center gap-1 bg-gradient-to-r from-cyan-500 to-blue-500 lg:px-5 px-3 py-1.5 rounded-full text-white font-medium' href={liveURl} target="blank" ><TfiWorld className='text-xl' /> <span className='mt-1'>Visit</span></a>
            </div>
            <div className='py-6'>
                <h3 className='text-2xl font-semibold text-gray-700'>Image Gallery</h3>

                <div data-aos="zoom-in">
                    <Swiper
                        slidesPerView={"auto"}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {
                            imgURL.map(img => <>
                                <SwiperSlide>
                                    <PhotoProvider>
                                        <PhotoView src={img}>
                                            <img className='w-full lg:h-[400px] h-64 object-cover object-top cursor-pointer' src={img} alt="" />
                                        </PhotoView>
                                    </PhotoProvider>
                                </SwiperSlide>
                            </>)
                        }
                    </Swiper>
                </div>

            </div>
            <div data-aos="zoom-in">
                <h2 className='lg:text-4xl text-2xl font-semibold text-gray-700 pt-6 pb-2'>Application features</h2>
                <hr className='border border-gray-300' />
                <div className='mt-6'>
                    {
                        details.map((single, index) =>
                            <li data-aos="zoom-in" className='py-1 font-medium' key={index}>{single}</li>
                        )
                    }
                </div>
            </div>
            <div data-aos="zoom-in">
                <h2 className='lg:text-4xl text-2xl font-semibold text-gray-700 pt-6 pb-2'>Technology used.</h2>
                <hr className='border border-gray-300' />
                <div className='mt-6'>
                    {
                        technology.map((tech, index) => <li data-aos="zoom-in" className='py-1 font-medium' key={index}>{tech}</li>)
                    }
                </div>
            </div>



        </div>
    );
};

export default SingleProductDetails;