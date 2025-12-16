import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const FAQSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "How do I know the listings are real and up to date?",
      answer: "All our listings are verified daily and directly connected to our database. We work with certified real estate agents and update property availability in real-time to ensure accuracy."
    },
    {
      question: "Do I have to pay to browse properties on your site?",
      answer: "No, browsing properties on our site is completely free. You can search, view photos, and explore neighborhoods without any charges. Fees only apply when you're ready to make an offer through our agents."
    },
    {
      question: "Can you help me sell my current home?",
      answer: "Yes! Our experienced agents specialize in both buying and selling. We offer comprehensive services including market analysis, staging advice, professional photography, and marketing strategies to get you the best price."
    },
    {
      question: "What's the process for booking a home tour?",
      answer: "Simply click the 'Schedule Tour' button on any listing, choose your preferred date and time, and one of our agents will confirm availability within 2 hours. You can also call us directly for same-day tours."
    },
    {
      question: "Do you also handle rentals or just sales?",
      answer: "We handle both! Our platform includes rental listings and our agents are experienced in lease agreements, tenant screening, and property management services."
    },
    {
      question: "How much commission do you charge?",
      answer: "Our commission structure is competitive and transparent. Typically, sellers pay 5-6% total commission (split between buyer's and seller's agents). We'll discuss specific rates during your consultation."
    },
    {
      question: "Can you help me get a mortgage or loan?",
      answer: "While we don't provide mortgages directly, we have partnerships with trusted lenders and can connect you with mortgage advisors who offer competitive rates and personalized financing options."
    },
    {
      question: "What if I'm moving from another city or state?",
      answer: "We specialize in relocation services! Our team can provide virtual tours, neighborhood guides, school information, and coordinate with agents in your current location to make your move seamless."
    },
    {
      question: "Do you work with first-time homebuyers?",
      answer: "Absolutely! First-time homebuyers are our passion. We offer educational resources, step-by-step guidance through the buying process, and can recommend first-time buyer programs and grants you may qualify for."
    }
  ];

  const handleSubmit = () => {
    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }
    console.log('Form submitted:', formData);
    alert('Message sent! We\'ll get back to you soon.');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen pb-10" style={{ backgroundColor: '#F5F1E9' }}>
      <div className="max-w-[1400px] mx-auto ">
          {/* Section Header */}
          <div className="border border-black/10 mb-3"></div>
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 rounded-sm bg-[#1a1a1a] mb-16" />
              <span className="text-[11px] uppercase tracking-widest text-[#1a1a1a] font-medium pb-16">FAQs</span>
            <h2 className="text-3xl md:text-[48px] font-medium text-[#1a1a1a] leading-tight tracking-tight translate ml-32">
              Everything you wanted to
              <br />
              ask (but didn’t know who to)
            </h2>
            </div>
          </div>

        {/* Two Column Layout */}
        <div className="grid gap-12 lg:gap-12 items-start lg:grid-cols-[37%_65%]">
          {/* Left Column - Sticky Contact Form */}
          <div className="lg:sticky lg:top-24">
            <div className="rounded-xl p-8 lg:p-10 shadow-sm" style={{ backgroundColor: '#FAF8F0' }}>
              <p className="text-lg lg:text-xl mb-8 leading-relaxed">
                We're just a form away—send us your<br />question, and we'll be happy to help!
              </p>

              <div className="space-y-5">
                {/* Name and Phone Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold mb-2 tracking-wide uppercase">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full px-4 py-3 rounded-xl border-0 focus:ring-2 focus:ring-black outline-none transition-all"
                      style={{ backgroundColor: '#F0EDE5' }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-2 tracking-wide uppercase">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(123) 456-7890"
                      className="w-full px-4 py-3 rounded-xl border-0 focus:ring-2 focus:ring-black outline-none transition-all"
                      style={{ backgroundColor: '#F0EDE5' }}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold mb-2 tracking-wide uppercase">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@framer.com"
                    className="w-full px-4 py-3 rounded-xl border-0 focus:ring-2 focus:ring-black outline-none transition-all"
                    style={{ backgroundColor: '#F0EDE5' }}
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold mb-2 tracking-wide uppercase">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here"
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl border-0 focus:ring-2 focus:ring-black outline-none transition-all resize-none"
                    style={{ backgroundColor: '#F0EDE5' }}
                  />
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="w-full bg-black text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
                >
                  SEND MESSAGE
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - FAQ Accordion */}
          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-300 transition-colors duration-200"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full py-6 flex items-start gap-4 text-left transition-all duration-200 px-4 -mx-4 rounded-lg group"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className={`w-9 h-9 rounded-full border border-slate-400 flex items-center justify-center transition-transform duration-300 ${openFaq === index ? 'rotate-45' : ''}`}>
                      <span className="text-black text-2xl font-thin leading-none -translate-y-[2px]">+</span>
                    </div>
                  </div>
                  <span className="text-lg lg:text-xl font-medium flex-1 leading-relaxed">
                    {faq.question}
                  </span>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pb-6 pl-14 pr-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;