'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  MapPinIcon, 
  EnvelopeIcon, 
  SparklesIcon, 
  DocumentArrowUpIcon,
  BoltIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'
import { 
  StarIcon,
  CheckCircleIcon
} from '@heroicons/react/24/solid'

const Features = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const freeFeatures = [
    {
      icon: MapPinIcon,
      title: "Google Maps Business Scraper",
      description: "Extract business names, categories, websites, and phone numbers from Google Maps with our powerful scraping engine.",
      color: "from-blue-500 to-cyan-500"
    }
  ]

  const premiumFeatures = [
    {
      icon: DocumentArrowUpIcon,
      title: "Auto Google Sheets Upload",
      description: "Automatically upload scraped leads directly to your Google Sheets for seamless workflow integration.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: EnvelopeIcon,
      title: "Gmail Address Extractor",
      description: "Find email addresses for each lead using advanced web crawling and email discovery algorithms.",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: SparklesIcon,
      title: "AI-Powered Personalized Outreach",
      description: "Generate ultra-natural cold outreach messages by analyzing prospect websites with advanced AI.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: BoltIcon,
      title: "LinkedIn Easy Apply Automation",
      description: "Automated job applications with anti-detection safeguards and intelligent rate limiting.",
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: ShieldCheckIcon,
      title: "Automated Cold Email Sender",
      description: "Send personalized emails with domain deliverability protection and advanced spam avoidance.",
      color: "from-indigo-500 to-blue-500"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="features" className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Generate Endless Possibilities with{' '}
            <span className="gradient-text">One Click</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Through seamlessly integrated AI capabilities, we empower businesses to significantly 
            enhance lead generation efficiency, creativity, and market competitiveness.
          </p>
        </motion.div>

        {/* Free Features Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold mb-4">
              <StarIcon className="w-5 h-5" />
              <span>Free Forever</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Start Your Lead Generation Journey</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get started with our powerful Google Maps scraper - completely free, no credit card required.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="max-w-2xl mx-auto"
          >
            {freeFeatures.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="feature-card bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
              >
                <div className="flex items-start space-x-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${feature.color} shadow-lg`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                    <p className="text-gray-600 text-lg leading-relaxed">{feature.description}</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-6 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                    >
                      Try Now Free
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Premium Features Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-100 to-accent-100 text-primary-800 px-4 py-2 rounded-full font-semibold mb-4">
              <SparklesIcon className="w-5 h-5" />
              <span>Premium Features</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Supercharge Your Outreach</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Unlock the full potential of AI-powered lead generation and automated outreach campaigns.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {premiumFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5
                }}
                className="feature-card bg-white rounded-2xl p-8 shadow-lg border border-gray-200 relative overflow-hidden group"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`p-4 rounded-xl bg-gradient-to-r ${feature.color} shadow-lg mb-6 w-fit`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h4>
                  <p className="text-gray-600 leading-relaxed mb-6">{feature.description}</p>
                  
                  <div className="flex items-center text-green-600 font-semibold">
                    <CheckCircleIcon className="w-5 h-5 mr-2" />
                    <span>Premium Feature</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-500 to-accent-500 text-white font-bold py-4 px-12 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Upgrade to Premium
            </motion.button>
            <p className="text-gray-500 mt-4">Start your 14-day free trial • No credit card required</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features 