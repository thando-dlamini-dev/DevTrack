import React from 'react'
import { Github, Code, Users, TrendingUp, Star, GitBranch } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <div className='flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 lg:flex-row'>
      {/* Left Content Section */}
      <div className='flex flex-col justify-center w-full px-6 py-12 lg:w-1/2 sm:px-12 lg:px-20 lg:py-0'>
        <div className='max-w-xl'>
          <motion.h1 initial={{opacity: 0, x:-50}} animate={{opacity: 1, x:0}} transition={{duration: 0.2, ease: 'easeInOut'}} className='mb-6 text-3xl font-bold leading-tight text-slate-800 sm:text-4xl lg:text-5xl'>
            Discover Open Source Projects That 
            <span className='text-gradient-to-br from-purple-600 to-blue-600'> Match Your Skills</span>
          </motion.h1>
          <motion.p initial={{opacity: 0, x:-50}} animate={{opacity: 1, x:0}} transition={{duration: 0.4, ease: 'easeInOut'}} className='mb-8 text-base leading-relaxed text-slate-600 sm:text-lg'>
            GitContribute uses AI to match developers with open-source projects that fit their skills. 
            Get personalized recommendations, track your progress, and receive daily emails with new opportunities. 
            Our platform is designed to help you contribute and grow.
          </motion.p>
          <motion.div initial={{opacity: 0, x:-50}} animate={{opacity: 1, x:0}} transition={{duration: 0.6, ease: 'easeInOut'}} className='flex flex-col gap-4 sm:flex-row sm:gap-6'>
            <button className='px-8 py-3 text-lg font-semibold text-center text-white transition-colors duration-200 bg-purple-600 rounded-full shadow-lg cursor-pointer hover:bg-purple-700 hover:shadow-xl'>
              Start Contributing Today
            </button>
            <button className='px-8 py-3 text-lg font-semibold text-center text-purple-600 transition-colors duration-200 border-2 border-purple-600 rounded-full cursor-pointer hover:bg-purple-50'>
              How It Works
            </button>
          </motion.div>
        </div>
      </div>

      {/* Right Visual Section */}
      <motion.div initial={{opacity: 0, x:50}} animate={{opacity: 1, x:0}} transition={{duration: 0.5, ease: 'easeInOut'}} className='flex items-center justify-center w-full p-6 lg:w-1/2 lg:p-12'>
        <div className='relative w-full max-w-md'>
          {/* Main GitHub Card */}
          <div className='p-6 mb-4 bg-white border shadow-2xl rounded-2xl border-slate-200'>
            <div className='flex items-center gap-3 mb-4'>
              <Github className='w-8 h-8 text-slate-700' />
              <div>
                <h3 className='font-semibold text-slate-800'>awesome-react-ui</h3>
                <p className='text-sm text-slate-500'>React • TypeScript</p>
              </div>
            </div>
            <p className='mb-4 text-sm text-slate-600'>
              A collection of beautiful React components with TypeScript support
            </p>
            <div className='flex items-center gap-4 text-sm text-slate-500'>
              <div className='flex items-center gap-1'>
                <Star className='w-4 h-4' />
                <span>2.1k</span>
              </div>
              <div className='flex items-center gap-1'>
                <GitBranch className='w-4 h-4' />
                <span>156</span>
              </div>
            </div>
            <div className='pt-4 mt-4 border-t border-slate-100'>
              <div className='flex items-center justify-between'>
                <span className='px-2 py-1 text-xs text-purple-600 rounded-full bg-purple-50'>
                  95% Match
                </span>
                <span className='text-xs text-green-600'>Good First Issue</span>
              </div>
            </div>
          </div>

          {/* Floating Stats Cards */}
          <div className='absolute p-4 bg-white border shadow-lg -top-4 -right-4 rounded-xl border-slate-200'>
            <div className='flex items-center gap-2'>
              <TrendingUp className='w-5 h-5 text-green-500' />
              <div>
                <p className='text-xs text-slate-500'>Weekly Progress</p>
                <p className='font-semibold text-slate-800'>+3 PRs</p>
              </div>
            </div>
          </div>

          <div className='absolute p-4 bg-white border shadow-lg -bottom-4 -left-4 rounded-xl border-slate-200'>
            <div className='flex items-center gap-2'>
              <Users className='w-5 h-5 text-blue-500' />
              <div>
                <p className='text-xs text-slate-500'>Contributors</p>
                <p className='font-semibold text-slate-800'>247</p>
              </div>
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className='flex flex-wrap justify-center gap-2 mt-6'>
            <span className='px-3 py-1 text-sm text-blue-800 bg-blue-100 rounded-full'>React</span>
            <span className='px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full'>Node.js</span>
            <span className='px-3 py-1 text-sm text-purple-800 bg-purple-100 rounded-full'>TypeScript</span>
            <span className='px-3 py-1 text-sm text-orange-800 bg-orange-100 rounded-full'>Python</span>
          </div>

          {/* AI Matching Indicator */}
          <div className='mt-6 text-center'>
            <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100'>
              <Code className='w-4 h-4 text-purple-600' />
              <span className='text-sm font-medium text-slate-700'>AI-Powered Matching</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default HeroSection