'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { CheckIcon, XMarkIcon, StarIcon, SparklesIcon } from '@heroicons/react/24/solid'

const Pricing = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: "Free",
      description: "Perfect for getting started with lead generation",
      price: { monthly: 0, annual: 0 },
      badge: "Most Popular",
      badgeColor: "bg-green-500",
      features: [
        "Google Maps Business Scraper",
        "Extract business names & categories",
        "Get website URLs & phone numbers",
        "Export up to 100 leads/month",
        "Basic CSV export",
        "Community support"
      ],
      limitations: [
        "No email finding",
        "No AI outreach",
        "No automation",
        "No integrations"
      ],
      cta: "Start Free",
      ctaStyle: "bg-green-500 hover:bg-green-600 text-white",
      popular: true
    },
    {
      name: "Premium",
      description: "Complete lead generation & outreach automation",
      price: { monthly: 49, annual: 39 },
      badge: "Best Value",
      badgeColor: "bg-gradient-to-r from-primary-500 to-accent-500",
      features: [
        "Everything in Free",
        "Auto Google Sheets upload",
        "Gmail address extractor",
        "AI-powered personalized outreach",
        "LinkedIn Easy Apply automation",
        "Automated cold email sender",
        "Domain deliverability protection",
        "Anti-detection safeguards",
        "Unlimited leads",
        "Priority support",
        "Advanced analytics",
        "Custom integrations"
      ],
      limitations: [],
      cta: "Start 14-Day Free Trial",
      ctaStyle: "bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white",
      popular: false
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

  const cardVariants = {
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

  // Placeholder for Stripe integration
  const handleSubscribe = (planName: string) => {
    console.log(`Subscribe to ${planName} plan`)
    // TODO: Integrate with Stripe
    // Example: redirect to Stripe checkout or open Stripe modal
    alert(`Stripe integration placeholder for ${planName} plan`)
  }

  return (
    <section id="pricing" className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Choose Your{' '}
            <span className="gradient-text">Growth Plan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Start free and upgrade when you're ready to scale your lead generation and outreach campaigns.
          </p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center space-x-4 mb-8"
          >
            <span className={`font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <motion.button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-14 h-8 rounded-full transition-colors duration-300 ${
                isAnnual ? 'bg-primary-500' : 'bg-gray-300'
              }`}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md"
                animate={{ x: isAnnual ? 24 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </motion.button>
            <span className={`font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual
            </span>
            {isAnnual && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold"
              >
                Save 20%
              </motion.span>
            )}
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                y: -10
              }}
              className={`relative bg-white rounded-2xl shadow-lg border-2 overflow-hidden ${
                plan.popular ? 'border-green-500' : 'border-gray-200'
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className={`${plan.badgeColor} text-white text-center py-2 px-4 text-sm font-semibold`}>
                  <div className="flex items-center justify-center space-x-1">
                    {plan.popular ? (
                      <StarIcon className="w-4 h-4" />
                    ) : (
                      <SparklesIcon className="w-4 h-4" />
                    )}
                    <span>{plan.badge}</span>
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-gray-900">
                        ${isAnnual ? plan.price.annual : plan.price.monthly}
                      </span>
                      {plan.price.monthly > 0 && (
                        <span className="text-gray-500 ml-2">
                          /{isAnnual ? 'year' : 'month'}
                        </span>
                      )}
                    </div>
                    {isAnnual && plan.price.monthly > 0 && (
                      <div className="text-sm text-gray-500 mt-1">
                        ${plan.price.monthly}/month billed annually
                      </div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSubscribe(plan.name)}
                    className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${plan.ctaStyle}`}
                  >
                    {plan.cta}
                  </motion.button>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 mb-4">What's included:</h4>
                  {plan.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.1 * featureIndex }}
                      className="flex items-start space-x-3"
                    >
                      <CheckIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}

                  {/* Limitations */}
                  {plan.limitations.length > 0 && (
                    <div className="pt-4 border-t border-gray-200">
                      <h5 className="font-medium text-gray-500 mb-3 text-sm">Not included:</h5>
                      {plan.limitations.map((limitation, limitIndex) => (
                        <motion.div
                          key={limitIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: 0.1 * (plan.features.length + limitIndex) }}
                          className="flex items-start space-x-3 mb-2"
                        >
                          <XMarkIcon className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-500 text-sm">{limitation}</span>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Can I cancel anytime?</h4>
              <p className="text-gray-600">Yes, you can cancel your subscription at any time. No long-term contracts or cancellation fees.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Is there a free trial?</h4>
              <p className="text-gray-600">Yes! Premium plan comes with a 14-day free trial. No credit card required to start.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">What payment methods do you accept?</h4>
              <p className="text-gray-600">We accept all major credit cards, PayPal, and bank transfers for annual plans.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Do you offer refunds?</h4>
              <p className="text-gray-600">Yes, we offer a 30-day money-back guarantee if you're not satisfied with our service.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing 