import React, { useState, useEffect, useCallback } from 'react';
import davidImage from '../assets/david-patel.jpg';

const useCursorEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updatePosition);

    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return position;
};

const CursorEffect = () => {
  const { x, y } = useCursorEffect();

  return (
    <div
      className="fixed w-64 h-64 rounded-full pointer-events-none mix-blend-multiply filter blur-xl opacity-30 bg-gradient-to-r from-purple-300 to-indigo-300"
      style={{
        left: `${x - 128}px`,
        top: `${y - 128}px`,
        transition: 'left 0.1s, top 0.1s',
      }}
    ></div>
  );
};

const useScrollAnimation = (threshold = 0.1) => {
  const [elements, setElements] = useState([]);
  const [isIntersecting, setIsIntersecting] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsIntersecting((prev) => ({
            ...prev,
            [entry.target.dataset.animateId]: entry.isIntersecting,
          }));
        });
      },
      { threshold }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [elements, threshold]);

  const animateOnScroll = useCallback((id) => (el) => {
    if (el && !elements.includes(el)) {
      el.dataset.animateId = id;
      setElements((prev) => [...prev, el]);
    }
    return isIntersecting[id] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4';
  }, [elements, isIntersecting]);

  return animateOnScroll;
};

const HeroSection = () => (
  <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white min-h-screen flex items-center relative overflow-hidden">
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-700 opacity-75"></div>
      <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
    </div>
    <div className="container mx-auto px-4 py-16 md:py-32 relative z-10">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Revolutionize Your Learning with AI
          </h1>
          <p className="text-xl mb-8 text-indigo-200">
            Experience personalized education powered by cutting-edge artificial intelligence.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
            <button className="bg-white text-indigo-600 font-bold py-3 px-8 rounded-full hover:bg-indigo-100 transition duration-300 transform hover:scale-105">
              Start Learning
            </button>
            <button className="border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-indigo-600 transition duration-300 transform hover:scale-105">
              Watch Demo
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-indigo-300 rounded-full animate-pulse"></div>
            <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center">
              <div className="text-9xl animate-bounce">🤖</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FeaturesSection = () => {
  const animateOnScroll = useScrollAnimation();

  const features = [
    {
      icon: '🧠',
      title: 'AI-Powered Learning',
      description: 'Our advanced AI algorithms create personalized learning paths tailored to your unique needs and goals.',
    },
    {
      icon: '📊',
      title: 'Progress Tracking',
      description: 'Visualize your learning journey with detailed analytics and progress reports.',
    },
    {
      icon: '🌐',
      title: 'Global Community',
      description: 'Connect with learners worldwide, share insights, and participate in collaborative projects.',
    },
    {
      icon: '🏆',
      title: 'Gamified Experience',
      description: 'Earn badges, climb leaderboards, and unlock achievements as you master new skills.',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Cutting-Edge Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center bg-indigo-800 bg-opacity-50 p-6 rounded-lg shadow-lg hover:bg-opacity-70 transition duration-300 transform hover:scale-105 ${animateOnScroll(`feature-${index}`)}`}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-indigo-200">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const animateOnScroll = useScrollAnimation();

  const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Data Science Student',
    image: davidImage,
    quote: 'The AI-powered recommendations have accelerated my learning journey. I\'ve achieved more in months than I did in years of traditional study.',
  },
  {
    name: 'Michael Chen',
    role: 'Software Engineer',
    image: davidImage,
    quote: 'The interactive coding challenges and real-time feedback have significantly improved my problem-solving skills. This platform is a game-changer!',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Professional',
    image: davidImage,
    quote: 'As a busy professional, the flexibility of this platform has been invaluable. The personalized learning paths ensure I\'m always progressing, even with limited time.',
  },
  {
    name: 'David Patel',
    role: 'High School Teacher',
    image: davidImage,
    quote: 'I\'ve integrated this platform into my classroom, and the results have been astounding. My students are more engaged and showing remarkable progress.',
  },
];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className={`py-16 bg-gradient-to-r from-purple-800 to-indigo-800 text-white ${animateOnScroll('testimonials')}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Success Stories</h2>
        <div className="relative h-96">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center transition-opacity duration-500 ${
                index === currentTestimonial ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mb-4 border-4 border-indigo-300"
              />
              <p className="text-xl text-center mb-4 max-w-2xl italic">{testimonial.quote}</p>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-indigo-300">{testimonial.role}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
                index === currentTestimonial ? 'bg-indigo-300 w-6' : 'bg-indigo-600 hover:bg-indigo-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorksSection = () => {
  const animateOnScroll = useScrollAnimation();

  const steps = [
    {
      icon: '🎯',
      title: 'Set Your Goals',
      description: 'Define your learning objectives and career aspirations to get a tailored experience.',
    },
    {
      icon: '📝',
      title: 'Take the Assessment',
      description: 'Complete a comprehensive evaluation to determine your current skill level and learning style.',
    },
    {
      icon: '🧭',
      title: 'Follow Your Path',
      description: 'Engage with AI-curated content and interactive lessons designed specifically for you.',
    },
    {
      icon: '📊',
      title: 'Track Progress',
      description: 'Monitor your advancement with detailed analytics and adjust your learning strategy as needed.',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Your Learning Journey</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center bg-purple-800 bg-opacity-50 p-6 rounded-lg shadow-lg hover:bg-opacity-70 transition duration-300 transform hover:scale-105 ${animateOnScroll(`step-${index}`)}`}
            >
              <div className="text-5xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-purple-200">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CallToActionSection = () => {
  const animateOnScroll = useScrollAnimation();

  return (
    <section className={`py-16 bg-gradient-to-r from-indigo-600 to-purple-600 ${animateOnScroll('cta')}`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Unlock Your Potential Today</h2>
        <p className="text-lg text-indigo-200 mb-8 max-w-2xl mx-auto">
          Join thousands of learners who have transformed their lives through our AI-powered education platform. Your journey to success starts here.
        </p>
        <button className="bg-white text-indigo-600 font-bold py-3 px-8 rounded-full hover:bg-indigo-100 transition duration-300 transform hover:scale-105 shadow-lg">
          Start Your Free Trial
        </button>
      </div>
    </section>
  );
};

const HomePage = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

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
    <div className="relative">
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 z-50"
        style={{ width: `${scrollProgress}%` }}
      ></div>
      <CursorEffect />
      <main>
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <HowItWorksSection />
        <CallToActionSection />
      </main>
    </div>
  );
};

export default HomePage;

