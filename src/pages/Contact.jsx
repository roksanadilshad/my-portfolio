import { useEffect, useRef, useState } from 'react'
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaDiscord, FaPaperPlane } from 'react-icons/fa'

const Contact = () => {
  const contactRef = useRef(null)
  const formRef = useRef(null)
  const infoRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (formRef.current) observer.observe(formRef.current)
    if (infoRef.current) observer.observe(infoRef.current)

    return () => observer.disconnect()
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your form submission logic here (EmailJS, etc.)
    console.log('Form submitted:', formData)
    alert('Message sent! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  const contactMethods = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'roksanadilshad@gmail.com',
      link: 'mailto:roksanadilshad@gmail.com',
      color: 'text-red-500',
    },
    {
      icon: FaDiscord,
      label: 'Discord',
      value: 'roksanadilshad',
      link: 'https://discord.com/users/roksanadilshad',
      color: 'text-indigo-500',
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: '@roksanadilshad',
      link: 'https://github.com/roksanadilshad',
      color: 'text-slate-700 dark:text-slate-300',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'Roksana Dilshad',
      link: 'https://linkedin.com/in/roksanadilshad',
      color: 'text-blue-600',
    },
  ]

  return (
    <div id="contact" className="py-20 bg-slate-50 dark:bg-slate-900/50" ref={contactRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Get In Touch</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            I'm currently looking for new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Contact Info */}
          <div ref={infoRef} className="opacity-0 space-y-8">
            {/* Contact Methods */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon
                  return (
                    <a
                      key={index}
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center space-x-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all duration-300"
                    >
                      <div className={`${method.color} text-2xl group-hover:scale-110 transition-transform`}>
                        <Icon />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          {method.label}
                        </p>
                        <p className="text-slate-800 dark:text-white font-medium group-hover:text-primary transition-colors">
                          {method.value}
                        </p>
                      </div>
                      <span className="material-symbols-outlined text-slate-400 group-hover:text-primary group-hover:translate-x-1 transition-all">
                        arrow_forward
                      </span>
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">
                Let's Connect
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Follow me on social media for updates and more content
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: FaGithub, link: 'https://github.com/roksanadilshad' },
                  { icon: FaLinkedin, link: 'https://linkedin.com/in/roksanadilshad' },
                  { icon: FaTwitter, link: 'https://twitter.com/roksanadilshad' },
                  { icon: FaDiscord, link: 'https://discord.com/users/roksanadilshad' },
                ].map((social, index) => {
                  const SocialIcon = social.icon
                  return (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300 shadow-md"
                    >
                      <SocialIcon className="text-xl" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div ref={formRef} className="opacity-0">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6">
                Send Me a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-800 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-800 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-800 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none"
                    placeholder="Tell me about your project or just say hi..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full group flex items-center justify-center space-x-2 px-6 py-4 bg-primary text-white rounded-lg hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-medium"
                >
                  <span>Send Message</span>
                  <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
