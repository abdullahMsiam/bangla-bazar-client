
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <div className="hero h-[400px] bannerImage" >
                        <div className=" bg-opacity-40"></div>
                        <div className="hero-content text-left md:max-w-[600px] ">
                            <div className="bg-gray-200 text-green-600 rounded-lg p-6 bg-opacity-50">
                                <h1 className="mb-5 text-5xl font-bold">Awesome 5%</h1>
                                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item2" className="carousel-item w-full">
                    <div className="hero h-[400px] bannerImage2" >
                        <div className=" bg-opacity-40"></div>
                        <div className="hero-content text-left md:max-w-[600px] ">
                            <div className="bg-slate-300 text-green-800 rounded-lg p-6 bg-opacity-50">
                                <h1 className="mb-5 text-5xl font-bold">Awesome 5%</h1>
                                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item3" className="carousel-item w-full">
                    <div className="hero h-[400px] bannerImage" >
                        <div className=" bg-opacity-40"></div>
                        <div className="hero-content text-left md:max-w-[600px] ">
                            <div className="bg-gray-200 text-green-600 rounded-lg p-6 bg-opacity-50">
                                <h1 className="mb-5 text-5xl font-bold">Awesome 7%</h1>
                                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item4" className="carousel-item w-full">
                    <div className="hero h-[400px] bannerImage" >
                        <div className=" bg-opacity-40"></div>
                        <div className="hero-content text-left md:max-w-[600px] ">
                            <div className="bg-gray-200 text-green-600 rounded-lg p-6 bg-opacity-50">
                                <h1 className="mb-5 text-5xl font-bold">Awesome 6%</h1>
                                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item1" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Banner;