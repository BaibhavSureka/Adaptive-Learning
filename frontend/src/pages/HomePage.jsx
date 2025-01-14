import React, { useState, useEffect } from 'react';
import { FaCheck, FaStar, FaHeadset, FaBook } from 'react-icons/fa';
import image1 from "../assets/1st.svg";
import stripe from "../assets/stripe.svg";
import airbnb from "../assets/airbnb.svg";
import discord from "../assets/discord.svg";
import intercom from "../assets/intercom.svg";
import pinterest from "../assets/pin.svg";
import image2 from "../assets/2nd.svg";
import image3 from "../assets/3rd.svg";
import dropbox from "../assets/dropbox.svg";
import hubspot from "../assets/hubspot.svg";
import googleDrive from "../assets/drive.svg";
import slack from "../assets/slack.svg";
import zapier from "../assets/zapier.svg";
import hubspotnew from "../assets/hubspotnew.svg";
import slacknew from "../assets/slacknew.svg";

// PricingToggle component stays the same
const PricingToggle = ({ isYearly, setIsYearly }) => {
  return (
    <div className="flex items-center justify-center space-x-4 mb-8">
      <span className={`text-sm ${!isYearly ? 'text-white' : 'text-gray-400'}`}>Pay Monthly</span>
      <button
        onClick={() => setIsYearly(!isYearly)}
        className="relative w-16 h-8 rounded-full bg-gray-700 p-0.5 flex items-center justify-between"
      >
        <div
          className={`absolute w-7 h-7 bg-purple-600 rounded-full transition-transform duration-300 ${
            isYearly ? 'translate-x-8' : 'translate-x-0'
          }`}
        />
      </button>
      <span className={`text-sm ${isYearly ? 'text-white' : 'text-gray-400'}`}>Pay Yearly</span>
    </div>
  );
};

const PricingCard = ({ plan, monthlyPrice, yearlyPrice, features, isYearly, isPro }) => {
  // Correct price display based on isYearly state
  const currentPrice = isYearly ? yearlyPrice : monthlyPrice;

  return (
    <div
      className={`bg-gray-800/50 p-8 rounded-xl transform transition-all duration-300 hover:scale-105 ${
        isPro ? 'border-2 border-purple-600' : ''
      }`}
    >
      <h3 className="text-2xl font-bold text-white mb-4">{plan}</h3>
      <div className="relative h-20">
        {isPro ? (
          <>
            <p
              className={`absolute text-4xl font-bold text-white mb-6 transition-all duration-500 ${
                isYearly ? 'opacity-0 transform translate-y-2' : 'opacity-100 transform translate-y-0'
              }`}
            >
              ${monthlyPrice} {/* Monthly price */}
            </p>
            <p
              className={`absolute text-4xl font-bold text-white mb-6 transition-all duration-500 ${
                isYearly ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-2'
              }`}
            >
              ${yearlyPrice} {/* Yearly price */}
            </p>
          </>
        ) : (
          <p className="absolute text-4xl font-bold text-white mb-6">${currentPrice}</p>
        )}
      </div>
      <button
        className={`w-full bg-purple-600 text-white px-6 py-3 rounded-full mb-8 hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 ${
          isPro ? 'bg-gradient-to-r from-purple-600 to-purple-700' : ''
        }`}
      >
        {isPro ? 'Try free for 30 days' : 'Start designing'}
      </button>
      <ul className="space-y-4">
        {features.map((feature, index) => (
          <li
            key={index}
            className={`flex items-center ${feature.included ? 'text-gray-300' : 'text-gray-500'}`}
          >
            <FaCheck
              className={`mr-2 ${feature.included ? 'text-purple-500' : 'text-gray-600'}`}
            />
            {feature.text}
          </li>
        ))}
      </ul>
    </div>
  );
};



const HomePage = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isYearly, setIsYearly] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.pageYOffset;
      setScrollProgress((currentScroll / totalScroll) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-[#0D1117]">
      {/* Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-purple-600 transition-all duration-300 z-50"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      {/* Hero Section */}
      <section className="bg-[#0D1117] text-white py-20 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center max-w-7xl">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12 lg:pr-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Modern web apps shipped faster</h1>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center"><FaCheck className="text-purple-500 mr-2" /> Simple to use, beautiful UI design</li>
              <li className="flex items-center"><FaCheck className="text-purple-500 mr-2" /> Complete complex project with ease</li>
              <li className="flex items-center"><FaCheck className="text-purple-500 mr-2" /> An intuitive admin app for developers</li>
            </ul>
            <div className="space-x-4">
              <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition duration-300">Get started for Free</button>
              <button className="bg-transparent border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-purple-600 transition duration-300">Questions? Talk to an expert</button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src={image1} alt="App Interface" className="w-full rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="bg-[#0D1117] text-white py-12 px-6 border-t border-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">TRUSTED BY MILLIONS OF DEVELOPERS & THOUSANDS OF ENTERPRISE TEAMS</h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <img src={stripe} alt="Stripe" className="h-8" />
            <img src={airbnb} alt="Airbnb" className="h-8" />
            <img src={discord} alt="Discord" className="h-8" />
            <img src={intercom} alt="Intercom" className="h-8" />
            <img src={pinterest} alt="Pinterest" className="h-8" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#0D1117] text-white py-20 px-6 border-t border-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Easy Setup Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Easy Setup Process", description: "Vivamus sit amet eros facilisis, suscipit libero eget, elementum diam. Praesent quam." },
              { title: "Quality First", description: "Quality first. All projects are backed by our fanatic support & 100% satisfaction guarantee." },
              { title: "Customizable", description: "Mauris interdum leo vel eleifend fringilla, nibh elit interdum nisi nec porttitor nunc egestas." },
              { title: "Unlimited", description: "Excepteur sint occaecat cupidatat non proident, sunt in anim id est laborum velit esse cillum." },
            ].map((feature, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-gray-700/50">
                <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Build Fast Section */}
      <section className="bg-[#0D1117] py-20 px-6 border-t border-gray-800">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          {/* Left side: Image */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <img src={image2} alt="Dashboard" className="w-full rounded-lg shadow-lg" />
          </div>
          
          {/* Right side: Text and Points */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-white mb-6">Build the sites you want with Geeks UI you love</h2>
            <p className="text-gray-400 mb-6">Mauris interdum leo vel eleifend fringilla nibh elit interdum nunc elementum nisi.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* First column of points */}
              <ul className="space-y-4">
                <li className="flex items-center text-white"><FaCheck className="text-purple-500 mr-2" /> Earnings</li>
                <li className="flex items-center text-white"><FaCheck className="text-purple-500 mr-2" /> Conversion Rates</li>
                <li className="flex items-center text-white"><FaCheck className="text-purple-500 mr-2" /> Top security</li>
              </ul>
              
              {/* Second column of points */}
              <ul className="space-y-4">
                <li className="flex items-center text-white"><FaCheck className="text-purple-500 mr-2" /> High converting</li>
                <li className="flex items-center text-white"><FaCheck className="text-purple-500 mr-2" /> Easy to use</li>
                <li className="flex items-center text-white"><FaCheck className="text-purple-500 mr-2" /> 200+ Integrations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Powerful Design Section */}
      <section className="bg-[#0D1117] py-20 px-6 border-t border-gray-800">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Left side: Text */}
          <div className="md:w-1/2 mb-10 md:mb-0 md:pl-8 lg:pl-16">
            <div className="text-purple-500 font-semibold mb-4">BULLET POINT FEATURES</div>
            <h2 className="text-4xl font-bold text-white mb-4">
              The most powerful design for web projects
            </h2>
            <p className="text-gray-400 mb-12">
              Donec eget enim volutpat purus turpis at elementum neque.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <FaStar className="text-purple-500 text-2xl mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">5-Star Rating</h3>
                  <p className="text-gray-400">
                    Pellentesque ipsum nulla cursus sodales enim non interdum dignissim quam.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FaHeadset className="text-purple-500 text-2xl mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Dedicated Support</h3>
                  <p className="text-gray-400">
                    Nullam sagittis metus ut lorem efficitur in bibendum augue pharetra.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FaBook className="text-purple-500 text-2xl mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Quality Documentation
                    <span className="ml-2 text-xs bg-yellow-600 text-white px-2 py-1 rounded-full">
                      coming soon
                    </span>
                  </h3>
                  <p className="text-gray-400">
                    Nullam sagittis metus ut lorem efficitur in bibendum augue pharetra.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side: Image */}
          <div className="md:w-1/2">
            <img src={image3} alt="Features Interface" className="w-full rounded-lg shadow-xl" />
          </div>
        </div>
      </section>

      {/* App Integration Section */}
      <section className="bg-[#0D1117] py-20 px-6 border-t border-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Integrate with the Apps</h2>
          <p className="text-gray-400 mb-12">
            Build on your workflow with apps that integrate with Geeks UI.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { name: 'Dropbox', logo: dropbox, description: 'Bring your files and cloud content together.' },
              { name: 'HubSpot', logo: hubspot, description: 'Full platform of marketing, sales, other service.' },
              { name: 'Drive', logo: googleDrive, description: 'Integrates seamlessly with Docs, Sheets...' },
              { name: 'Slack', logo: slack, description: 'New way to communicate with your team.' },
              { name: 'Zapier', logo: zapier, description: 'Streamline work with automation today.' },
              { name: 'HubSpot', logo: hubspot, description: 'Full platform of marketing, sales, other service.' },
            ].map((app, index) => (
              <div key={index} className="bg-gray-800/50 p-4 rounded-lg text-center transform transition-all duration-300 hover:scale-105 hover:bg-gray-700/50">
                <img src={app.logo} alt={app.name} className="h-12 mx-auto mb-4" />
                <h3 className="text-white text-lg font-semibold">{app.name}</h3>
                <p className="text-gray-400 text-sm">{app.description}</p>
              </div>
            ))}
          </div>
          <button className="mt-12 bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition duration-300">
            View All Apps
          </button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#0D1117] py-20 px-6 border-t border-gray-800">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <img src={hubspotnew} alt="HubSpot" className="h-8 mb-4" />
              <p className="text-gray-300 mb-4">"I am very satisfied with my purchase. Your team helped me a lot with the new release for RLT version. I hope you are always successful. Thank you for your services and support."</p>
              <p className="font-semibold text-white">Ali</p>
              <p className="text-gray-400">Geeks UI Customer</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <img src={slacknew} alt="Slack" className="h-8 mb-4" />
              <p className="text-gray-300 mb-4">"This item has everything you need for creating a modern learning-platform. Really delighted by many details and the overall architecture. Support was superfast and helpful as well."</p>
              <p className="font-semibold text-white">Bernhar</p>
              <p className="text-gray-400">Geeks UI Customer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-[#0D1117] py-20 px-6 border-t border-gray-800">
  <div className="container mx-auto text-center max-w-6xl">
    <h2 className="text-4xl font-bold text-white mb-4">Simple plans for everyone</h2>
    <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
      Everything you need to design like a professional. Boost you and your team's creativity and supercharge your productivity with Geeks UI Pro.
    </p>
    
    <PricingToggle isYearly={isYearly} setIsYearly={setIsYearly} />
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <PricingCard
        plan="FREE"
        monthlyPrice={0}
        yearlyPrice={0}
        features={[
          { text: "20+ high quality design", included: true },
          { text: "Instant access to 2 icon library", included: true },
          { text: "24+ Free initial components", included: true },
          { text: "300+ beautiful design pages", included: false },
          { text: "Admin dashboard pages", included: false },
          { text: "Support 24/7 hours", included: false },
        ]}
        isYearly={isYearly}
        isPro={false}
      />
      <PricingCard
        plan="PRO"
        monthlyPrice={39}   // Monthly price
        yearlyPrice={49}    // Yearly price
        features={[
          { text: "120+ high quality design", included: true },
          { text: "Instant access to 2 icon library", included: true },
          { text: "24+ Free initial components", included: true },
          { text: "300+ beautiful design pages", included: true },
          { text: "Admin dashboard pages", included: true },
          { text: "Support 24/7 hours", included: true },
        ]}
        isYearly={isYearly}
        isPro={true}
      />
    </div>
  </div>
</section>


      {/* Call to Action Section */}
      <section className="relative bg-[#0D1117] py-20 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-purple-900/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(100,50,255,0.1),transparent_70%)]"></div>
        </div>
        <div className="container mx-auto text-center relative z-10 max-w-4xl">
          <h2 className="text-4xl font-bold text-white mb-6">Just try it out! You'll fall in love</h2>
          <p className="text-gray-300 mb-8 text-lg">
            Designed for modern companies looking to launch a simple, premium and modern website and apps.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="w-full sm:w-auto bg-white text-purple-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Try For Free
            </button>
            <button className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105">
              Buy Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

