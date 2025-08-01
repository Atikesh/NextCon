import React from 'react';
import dynamic from 'next/dynamic';

const FeaturedSlider = dynamic(() => import('./components/sliders/FeaturedSlider'), { ssr: false });
const HeroSlider = dynamic(() => import('./components/sliders/HeroSlider'), { ssr: false });

import SectionsHead from './components/common/SectionsHead';
import TopProducts from './components/product/TopProducts';
import Services from './components/common/Services';

const Home = () => {
    return (
        <main>
            <section id="hero">
                <HeroSlider />
            </section>

            <section id="featured" className="section">
                <div className="container">
                    <SectionsHead heading="Featured Products" />
                    <FeaturedSlider />
                </div>
            </section>

            <section id="products" className="section">
                <div className="container">
                    <SectionsHead heading="Top Products" />
                    <TopProducts />
                </div>
            </section>

            <Services />
        </main>
    );
};

export default Home;
