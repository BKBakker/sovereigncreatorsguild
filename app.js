const { useState, useEffect } = React;
const { Heart, Users, Sparkles, CheckCircle, Send, Sun, Waves } = lucide;

function HumanityOasisWebsite() {
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    website: '',
    description: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Netlify form handling
    const form = e.target;
    const formData = new FormData(form);
    
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString()
    })
    .then(() => {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    })
    .catch((error) => {
      alert('Error submitting form. Please try again.');
      console.error('Form submission error:', error);
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-stone-50 to-stone-100" style={{ fontFamily: "'Crimson Pro', 'Georgia', serif" }}>
      
      {/* Floating particles effect */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-amber-200 opacity-20"
            style={{
              width: Math.random() * 60 + 20 + 'px',
              height: Math.random() * 60 + 20 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              transform: `translateY(${scrollY * (Math.random() * 0.3 - 0.15)}px)`,
              transition: 'transform 0.1s ease-out',
              filter: 'blur(20px)'
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Nature background with photo */}
        <div className="absolute inset-0" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
          <img 
            src="oct25_2015_25_of_39.jpg" 
            alt="Natural forest oasis with autumn colors"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-amber-900/60 via-stone-900/50 to-amber-900/70" />
        </div>
        
        <div className="absolute inset-0 opacity-30" 
             style={{ transform: `translateY(${scrollY * 0.3}px)`, 
                      background: 'radial-gradient(circle at 50% 50%, rgba(251, 191, 36, 0.4) 0%, transparent 50%)' }} />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Animated Badge Container */}
          <div className="mb-12 relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-300/30 to-emerald-300/30 rounded-full blur-3xl" 
                 style={{ animation: 'pulse 4s ease-in-out infinite' }} />
            <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-amber-200/50">
              <img 
                src="HUMANITYOASIS.png" 
                alt="Humanity Oasis Certified Badge" 
                className="w-80 h-auto mx-auto drop-shadow-lg"
                style={{ animation: 'float 6s ease-in-out infinite' }}
              />
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-white mb-6 leading-tight drop-shadow-2xl"
              style={{ 
                fontFamily: "'Playfair Display', serif",
                textShadow: '0 4px 20px rgba(0,0,0,0.5)'
              }}>
            You've Found<br />
            <span className="text-amber-300 font-normal">The Oasis</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-amber-50 max-w-3xl mx-auto leading-relaxed mb-8 drop-shadow-lg"
             style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
            A sanctuary in the digital desert. Where people come first,
            connection is real, and humanity matters.
          </p>

          <div className="flex gap-3 justify-center items-center text-amber-200">
            <Waves className="w-5 h-5 animate-pulse drop-shadow-lg" />
            <span className="text-sm tracking-widest uppercase font-light drop-shadow-lg">Verified Reality</span>
            <Waves className="w-5 h-5 animate-pulse drop-shadow-lg" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-amber-200 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-amber-200 rounded-full" />
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/60 backdrop-blur-md rounded-3xl p-12 md:p-16 shadow-xl border border-stone-200/50">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-gradient-to-br from-amber-100 to-emerald-100 p-4 rounded-full">
                <Heart className="w-12 h-12 text-amber-700" />
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light text-center text-stone-800 mb-8"
                style={{ fontFamily: "'Playfair Display', serif" }}>
              People Come First Here
            </h2>
            
            <p className="text-xl text-stone-700 leading-relaxed text-center max-w-2xl mx-auto">
              Welcome to the Humanity Oasis — a badge you can display with pride that says: 
              "Yep. People come first here." In an era when chatbots can write anything and 
              marketing agents can sell anything, we recognize organizations who make real 
              efforts to stay human for humans.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="relative py-32 px-6 bg-gradient-to-br from-stone-100 to-amber-50/50">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="oct25_2015_25_of_39.jpg" 
            alt="Natural forest scene"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-100/90 via-stone-100/70 to-stone-100/90" />
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light text-stone-800 mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}>
              The Desert We're Lost In
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-10 shadow-lg border border-stone-200/50 hover:scale-105 transition-transform duration-500">
              <div className="w-16 h-16 bg-gradient-to-br from-stone-400 to-stone-600 rounded-full flex items-center justify-center mb-6 mx-auto opacity-70">
                <span className="text-3xl">🤖</span>
              </div>
              <h3 className="text-2xl font-normal text-stone-800 mb-4 text-center">
                AI-Driven Isolation
              </h3>
              <p className="text-stone-600 leading-relaxed text-center">
                As time goes on, it's getting increasingly harder to tell the difference 
                between who, or what, you're talking to online. The line between human and 
                machine blurs more each day.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-10 shadow-lg border border-stone-200/50 hover:scale-105 transition-transform duration-500">
              <div className="w-16 h-16 bg-gradient-to-br from-stone-400 to-stone-600 rounded-full flex items-center justify-center mb-6 mx-auto opacity-70">
                <span className="text-3xl">😔</span>
              </div>
              <h3 className="text-2xl font-normal text-stone-800 mb-4 text-center">
                The Loneliness Epidemic
              </h3>
              <p className="text-stone-600 leading-relaxed text-center">
                More people retreat into online worlds and digital relationships. 
                The things that make us human—fun, exercise, laughter, real connection—
                are becoming harder to find.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-emerald-100/60 px-6 py-3 rounded-full mb-6">
              <Sparkles className="w-5 h-5 text-emerald-700" />
              <span className="text-emerald-800 font-light tracking-wide">The Answer</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-light text-stone-800 mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}>
              A Badge of Humanity
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
              The Humanity Oasis certification is a visible symbol that tells your customers: 
              this is a human-first space.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Heart, title: "Real Connection", desc: "Bringing people together in meaningful ways" },
              { icon: Users, title: "Fight Loneliness", desc: "Creating spaces where community thrives" },
              { icon: Sparkles, title: "Fun & Laughter", desc: "Prioritizing joy and human experience" },
              { icon: Sun, title: "Exercise & Play", desc: "Honoring our evolutionary needs" }
            ].map((item, i) => (
              <div key={i} 
                   className="bg-gradient-to-br from-white to-amber-50/50 rounded-2xl p-8 text-center border border-amber-200/50 shadow-md hover:shadow-xl transition-shadow duration-500">
                <div className="bg-gradient-to-br from-amber-200 to-emerald-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-amber-900" />
                </div>
                <h3 className="text-lg font-normal text-stone-800 mb-2">{item.title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-amber-50 rounded-3xl p-12 border-2 border-emerald-200/50 shadow-xl">
            <h3 className="text-3xl font-light text-center text-stone-800 mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}>
              What This Badge Means
            </h3>
            <div className="space-y-4 max-w-3xl mx-auto">
              {[
                "This business is human-driven and transparent about AI use",
                "They provide products or services good for humans based on our evolutionary past",
                "They fight loneliness and prioritize real-world connection",
                "They offer fun, exercise, laughter—the things we should get more of"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-white/60 backdrop-blur-sm rounded-xl p-4">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <p className="text-stone-700 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action / Application Form */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-white via-amber-50/30 to-emerald-50/30 rounded-3xl p-12 md:p-16 shadow-2xl border border-amber-200/50">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-amber-100/80 px-6 py-3 rounded-full mb-6">
                <Sun className="w-5 h-5 text-amber-700 animate-pulse" />
                <span className="text-amber-900 font-light tracking-wide">Join the Oasis</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-6"
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                Become a Sanctuary
              </h2>
              <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
                Ready to show the world that people come first at your business? 
                Apply for your free Humanity Oasis certification today.
              </p>
            </div>

            {isSubmitted ? (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                  <CheckCircle className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-3xl font-light text-stone-800 mb-4">Welcome to the Oasis!</h3>
                <p className="text-stone-600 text-lg">
                  We'll be in touch soon with your certification details.
                </p>
              </div>
            ) : (
              <form name="certification" method="POST" data-netlify="true" onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="form-name" value="certification" />
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-stone-700 mb-2 font-light">Business Name</label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-white/80 backdrop-blur-sm focus:border-amber-400 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                      placeholder="Your business name"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-700 mb-2 font-light">Contact Name</label>
                    <input
                      type="text"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-white/80 backdrop-blur-sm focus:border-amber-400 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-stone-700 mb-2 font-light">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-white/80 backdrop-blur-sm focus:border-amber-400 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                      placeholder="you@business.com"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-700 mb-2 font-light">Website (Optional)</label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-white/80 backdrop-blur-sm focus:border-amber-400 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                      placeholder="https://yourbusiness.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-stone-700 mb-2 font-light">
                    How does your business prioritize human connection?
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-white/80 backdrop-blur-sm focus:border-amber-400 focus:ring-2 focus:ring-amber-200 outline-none transition-all resize-none"
                    placeholder="Tell us about your commitment to fighting loneliness and fostering real human connection..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white py-4 rounded-xl font-light text-lg tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group"
                >
                  <span>Submit Application</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-center text-sm text-stone-500 mt-4">
                  By applying, you're committing to transparent, human-first values. 
                  Certification is free and reviewed within 48 hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Nature Showcase Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <div className="relative h-96 md:h-[600px]">
              <img 
                src="oct25_2015_25_of_39.jpg" 
                alt="Autumn forest oasis"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-6">
                  <h3 className="text-4xl md:text-6xl font-light text-white mb-4 drop-shadow-2xl"
                      style={{ 
                        fontFamily: "'Playfair Display', serif",
                        textShadow: '0 4px 20px rgba(0,0,0,0.7)'
                      }}>
                    Find Your Sanctuary
                  </h3>
                  <p className="text-xl md:text-2xl text-amber-100 drop-shadow-lg"
                     style={{ textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}>
                    Where nature reminds us what truly matters
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-6 bg-gradient-to-br from-stone-800 to-stone-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-light mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Humanity Oasis
              </h3>
              <p className="text-stone-400 leading-relaxed">
                Certifying businesses that put people first in an increasingly AI-driven world.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-light mb-4">Quick Links</h4>
              <ul className="space-y-2 text-stone-400">
                <li><a href="#mission" className="hover:text-amber-400 transition-colors">Mission</a></li>
                <li><a href="#problem" className="hover:text-amber-400 transition-colors">The Problem</a></li>
                <li><a href="#solution" className="hover:text-amber-400 transition-colors">The Solution</a></li>
                <li><a href="#apply" className="hover:text-amber-400 transition-colors">Get Certified</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-light mb-4">Contact</h4>
              <p className="text-stone-400 mb-2">
                <a href="mailto:bryan@newsload.ca" className="hover:text-amber-400 transition-colors">
                  bryan@newsload.ca
                </a>
              </p>
              <p className="text-stone-400">
                A project by <a href="https://www.newsload.ca" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">Newsload</a>
              </p>
            </div>
          </div>

          <div className="border-t border-stone-700 pt-8 text-center">
            <p className="text-stone-500 text-sm">
              © 2026 Humanity Oasis. Fighting isolation, one certification at a time.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HumanityOasisWebsite />);

// Initialize Lucide icons after render
lucide.createIcons();
