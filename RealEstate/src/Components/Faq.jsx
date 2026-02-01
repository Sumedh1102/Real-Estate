import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const FAQSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [result, setResult] = useState('');
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "How do I know the property listings are genuine?",
      answer:
        "All properties listed with BEST Deal Property are personally verified by our team. We check project approvals, pricing, availability, and legal status to ensure you receive accurate and up-to-date information."
    },
    {
      question: "Is there any charge to browse properties on your website?",
      answer:
        "No. Browsing property listings on our website is completely free. You can explore projects, compare options, and request site visits without any upfront charges."
    },
    {
      question: "Can you help me sell my property in Nalasopara or Palghar?",
      answer:
        "Yes. We assist property owners with pricing analysis, buyer shortlisting, negotiations, documentation, and registration support to ensure a smooth and profitable sale."
    },
    {
      question: "How can I schedule a site visit?",
      answer:
        "You can request a site visit directly through our website or contact us via phone or WhatsApp. Our team usually confirms site visits within a few hours based on your availability."
    },
    {
      question: "Do you deal with rental properties as well?",
      answer:
        "Yes, we handle both rental and resale properties. Our services include tenant verification, agreement assistance, and guidance on rental pricing in Nalasopara East and nearby areas."
    },
    {
      question: "What are your brokerage or service charges?",
      answer:
        "Our charges are transparent and discussed upfront. The exact brokerage depends on the type of service—buying, selling, or renting—and is clearly communicated before proceeding."
    },
    {
      question: "Do you help with home loans or financing?",
      answer:
        "While we don't provide loans directly, we work closely with trusted banks and financial institutions. We help you connect with loan advisors to get competitive interest rates and smooth approvals."
    },
    {
      question: "Can you assist first-time homebuyers?",
      answer:
        "Absolutely. We specialize in guiding first-time homebuyers through every step—from budgeting and shortlisting to documentation and possession—making the process simple and stress-free."
    },
    {
      question: "I'm buying property from another city. Can you help?",
      answer:
        "Yes. We frequently assist outstation buyers by offering virtual site visits, detailed project explanations, and end-to-end coordination so you can buy with confidence from anywhere."
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    setResult('Sending...');

    const data = new FormData();
    data.append('access_key', 'ece892b2-6349-43b0-9a7d-ebba06392780');

    Object.entries(formData).forEach(([key, value]) =>
      data.append(key, value)
    );

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data
      });

      const resData = await response.json();

      if (resData.success) {
        setResult('Message sent successfully!');
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        setResult('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setResult('Error submitting form. Please try again.');
    }
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen pb-10 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F5F1E9' }}>
      <div className="max-w-[1400px] mx-auto">

        {/* Header */}
        <div className="border-t border-black/10 mb-8"></div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-medium text-[#1a1a1a]">
            Answers to common property questions — clear, honest, and helpful
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid gap-12 lg:grid-cols-[40%_58%]">

          {/* Left: Contact Form */}
          <div className="lg:sticky lg:top-24">
            <div className="rounded-xl p-8 shadow-sm" style={{ backgroundColor: '#FAF8F0' }}>
              <p className="text-lg mb-6">
                Have a property-related question? Our experts are just a message away.
              </p>

              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="px-4 py-3 rounded-xl focus:ring-2 focus:ring-black outline-none"
                    style={{ backgroundColor: '#F0EDE5' }}
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone Number"
                    className="px-4 py-3 rounded-xl focus:ring-2 focus:ring-black outline-none"
                    style={{ backgroundColor: '#F0EDE5' }}
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email Address"
                  className="w-full px-4 py-3 rounded-xl focus:ring-2 focus:ring-black outline-none"
                  style={{ backgroundColor: '#F0EDE5' }}
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us what you're looking for..."
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl focus:ring-2 focus:ring-black outline-none resize-none"
                  style={{ backgroundColor: '#F0EDE5' }}
                />

                <button
                  onClick={handleSubmit}
                  className="w-full bg-black text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] transition"
                >
                  SEND MESSAGE
                  <ChevronRight size={18} />
                </button>

                {result && (
                  <p className="text-center text-sm text-gray-700 mt-2">
                    {result}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Right: FAQ Accordion */}
          <div>
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-300">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full py-6 flex gap-4 text-left hover:bg-black/5 px-4 rounded-lg"
                >
                  <div
                    className={`w-9 h-9 rounded-full border flex items-center justify-center transition-transform ${
                      openFaq === index ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </div>
                  <span className="text-lg font-medium">{faq.question}</span>
                </button>

                <div
                  className={`transition-all overflow-hidden ${
                    openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-14 pb-6 text-gray-600">{faq.answer}</p>
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