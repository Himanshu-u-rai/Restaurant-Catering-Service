import React, { useEffect, useState, useRef } from 'react';
import { FaArrowRight, FaPlay } from 'react-icons/fa';
import heroVideo1 from '../assets/Cozy_Tea_Shop_Video_Generation.mp4';
import heroVideo2 from '../assets/Video_Generation_Successful.mp4';

const Hero = () => {
    const [currentVideo, setCurrentVideo] = useState(0);
    const videos = [heroVideo1, heroVideo2];
    const video1Ref = useRef(null);
    const video2Ref = useRef(null);

    useEffect(() => {
        // Preload both videos
        if (video1Ref.current) {
            video1Ref.current.load();
        }
        if (video2Ref.current) {
            video2Ref.current.load();
        }
    }, []);

    // Handle video end with smooth transition
    const handleVideoEnd = (videoIndex) => {
        const nextIndex = (videoIndex + 1) % videos.length;
        const nextVideo = nextIndex === 0 ? video1Ref.current : video2Ref.current;

        // Start playing the next video
        if (nextVideo) {
            nextVideo.currentTime = 0;
            nextVideo.play();
        }

        // Switch the active video after a brief delay for crossfade
        setTimeout(() => {
            setCurrentVideo(nextIndex);
        }, 100);
    };

    return (
        <section id="home" className="hero-modern">
            <div className="hero-background">
                <div className="hero-image-overlay"></div>

                {/* Video 1 */}
                <video
                    ref={video1Ref}
                    autoPlay
                    muted
                    playsInline
                    className={`hero-video ${currentVideo === 0 ? 'active' : ''}`}
                    onEnded={() => handleVideoEnd(0)}
                >
                    <source src={videos[0]} type="video/mp4" />
                </video>

                {/* Video 2 */}
                <video
                    ref={video2Ref}
                    muted
                    playsInline
                    className={`hero-video ${currentVideo === 1 ? 'active' : ''}`}
                    onEnded={() => handleVideoEnd(1)}
                >
                    <source src={videos[1]} type="video/mp4" />
                </video>
            </div>

            <div className="hero-content-modern">
                <div className="hero-badge">
                    <span>✨ Artisan Coffee & Authentic Flavors</span>
                </div>

                <h1 className="hero-title-modern">
                    Where Every Sip
                    <span className="title-highlight"> Tells a Story</span>
                </h1>

                <p className="hero-description">
                    Step into our warm embrace of aromatic spices, handcrafted beverages,
                    and the gentle hum of conversations that turn strangers into friends.
                </p>

                <div className="hero-stats">
                    <div className="stat-item">
                        <span className="stat-number">15k+</span>
                        <span className="stat-label">Happy Customers</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">50+</span>
                        <span className="stat-label">Signature Blends</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">5★</span>
                        <span className="stat-label">Average Rating</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
