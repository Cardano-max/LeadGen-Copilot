'use client'

import { motion } from 'framer-motion'
import { StarIcon, PlayIcon } from '@heroicons/react/24/solid'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20" />
      
      {/* Floating Background Shapes */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-primary-400/30 to-accent-400/30 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -150, 0],
            y: [0, 100, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-accent-400/30 to-primary-400/30 rounded-full blur-xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
            >
              <StarIcon className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-medium">Top Lead Generation Tool</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Automate Your{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Lead Generation
              </span>{' '}
              & Cold Outreach
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-white/90 mb-8 max-w-2xl"
            >
              Extract leads from Google Maps, find email addresses, and send AI-powered personalized outreach messages. 
              Proven to boost response rates by 54.7%!
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <StarIcon className="w-5 h-5" />
                <span>Start Creating Now</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <PlayIcon className="w-5 h-5" />
                <span>Watch Demo</span>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 grid grid-cols-3 gap-8 text-center lg:text-left"
            >
              <div>
                <div className="text-3xl font-bold text-white">1M+</div>
                <div className="text-white/70">Leads Generated</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">54.7%</div>
                <div className="text-white/70">Response Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">10K+</div>
                <div className="text-white/70">Happy Users</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Floating Mockups */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Dashboard Mockup */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 bg-white rounded-2xl shadow-2xl p-6 max-w-md mx-auto"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <div className="space-y-3">
                <div className="h-4 bg-gradient-to-r from-primary-200 to-primary-300 rounded"></div>
                <div className="h-4 bg-gradient-to-r from-accent-200 to-accent-300 rounded w-3/4"></div>
                <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-1/2"></div>
                <div className="grid grid-cols-2 gap-3 mt-6">
                  <div className="h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg"></div>
                  <div className="h-20 bg-gradient-to-br from-accent-100 to-accent-200 rounded-lg"></div>
                </div>
              </div>
            </motion.div>

            {/* Floating Email Card */}
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                x: [0, 10, 0] 
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 1 
              }}
              className="absolute -top-8 -left-8 bg-white rounded-xl shadow-lg p-4 w-48 z-20"
            >
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-6 h-6 bg-green-400 rounded-full"></div>
                <div className="text-sm font-medium">Email Found!</div>
              </div>
              <div className="text-xs text-gray-600">john@coffeeshop.com</div>
            </motion.div>

            {/* Floating Stats Card */}
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                x: [0, -15, 0] 
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 2 
              }}
              className="absolute -bottom-4 -right-8 bg-white rounded-xl shadow-lg p-4 w-40 z-20"
            >
              <div className="text-sm font-medium mb-1">Response Rate</div>
              <div className="text-2xl font-bold text-green-500">+54.7%</div>
              <div className="text-xs text-gray-600">vs industry avg</div>
            </motion.div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400/20 to-accent-400/20 rounded-3xl blur-3xl transform scale-110"></div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-white/70"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ArrowRightIcon className="w-5 h-5 transform rotate-90" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 