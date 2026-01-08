import React from 'react'
import Header from '../components/Header'
import LandingPage from '../components/LandingPage'
import TopDestinations from '../components/TopDestinations'
import LatestStories from '../components/LatestStories'
import ReviewsCarousel from '../components/ReviewsCarousel'
import Subscribe from '../components/Subscribe'
import Footer from '../components/Footer'

function Home() {
    return (
        <div>
            <div className='w-full h-screen'><Header /><LandingPage/><TopDestinations/><LatestStories/><ReviewsCarousel/>
            <Subscribe/>
            <Footer/></div>
            
        </div>
    )
}

export default Home