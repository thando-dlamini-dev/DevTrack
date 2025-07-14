import React from 'react'
import { Github, Code, ArrowLeft, Shield, Zap } from 'lucide-react'
import usesAuthStore from '../stores/authStore.js'

const LoginPage = () => {
    const { loginWithGitHub } = usesAuthStore();

  return (
    <div className='flex min-h-screen'>
      {/* Left Side - Login Form */}
      <div className='flex flex-col justify-center w-full px-6 py-12 bg-white lg:w-1/2 sm:px-12 lg:px-20'>
        <div className='w-full max-w-md mx-auto'>
          {/* Back Link */}
          <a 
            href="/" 
            className='inline-flex items-center gap-2 mb-8 transition-colors duration-300 text-slate-600 hover:text-purple-600'
          >
            <ArrowLeft className='w-4 h-4' />
            <span className='text-sm font-medium'>Back to home</span>
          </a>

          {/* Header */}
          <div className='mb-8'>
            <div className='flex items-center gap-3 mb-6'>
              <div className='flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl'>
                <Code className='w-6 h-6 text-white' />
              </div>
              <h1 className='text-2xl font-bold text-slate-800'>GitContribute</h1>
            </div>
            <h2 className='mb-2 text-3xl font-bold text-slate-800'>Welcome back!</h2>
            <p className='text-slate-600'>Sign in to continue your open source journey</p>
          </div>

          {/* GitHub Login Button */}
          <button onClick={loginWithGitHub} className='flex items-center justify-center w-full gap-3 px-6 py-4 mb-6 font-semibold text-white transition-all duration-300 shadow-lg bg-slate-900 hover:bg-slate-800 rounded-xl hover:shadow-xl'>
            <Github className='w-5 h-5' />
            <span>Continue with GitHub</span>
          </button>

          {/* Benefits */}
          <div className='mb-8 space-y-4'>
            <div className='flex items-start gap-3 p-4 border border-purple-100 rounded-lg bg-purple-50'>
              <Shield className='w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0' />
              <div>
                <h3 className='text-sm font-semibold text-slate-800'>Secure & Private</h3>
                <p className='text-sm text-slate-600'>We only access public repository data to provide personalized recommendations</p>
              </div>
            </div>
            <div className='flex items-start gap-3 p-4 border border-blue-100 rounded-lg bg-blue-50'>
              <Zap className='w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0' />
              <div>
                <h3 className='text-sm font-semibold text-slate-800'>Instant Setup</h3>
                <p className='text-sm text-slate-600'>Get AI-powered project recommendations immediately after connecting</p>
              </div>
            </div>
          </div>

          {/* Terms */}
          <p className='text-xs text-center text-slate-500'>
            By continuing, you agree to our{' '}
            <a href="/terms" className='text-purple-600 hover:underline'>Terms of Service</a>{' '}
            and{' '}
            <a href="/privacy" className='text-purple-600 hover:underline'>Privacy Policy</a>
          </p>
        </div>
      </div>

      {/* Right Side - Visual */}
      <div className='items-center justify-center hidden p-12 lg:flex lg:w-1/2 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'>
        <div className='max-w-md text-center'>
          {/* Hero Visual */}
          <div className='relative mb-8'>
            <div className='p-6 border bg-white/10 backdrop-blur-sm rounded-2xl border-white/20'>
              <div className='flex items-center gap-3 mb-4'>
                <Github className='w-8 h-8 text-white' />
                <div className='text-left'>
                  <h3 className='font-semibold text-white'>awesome-react-hooks</h3>
                  <p className='text-sm text-slate-400'>JavaScript • React</p>
                </div>
              </div>
              <p className='mb-4 text-sm text-left text-slate-300'>
                Collection of reusable React hooks for common use cases
              </p>
              <div className='flex items-center justify-between'>
                <span className='px-2 py-1 text-xs text-green-400 rounded-full bg-green-400/20'>
                  98% Match
                </span>
                <span className='text-xs text-blue-400'>Good First Issue</span>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className='absolute p-3 border rounded-full -top-4 -right-4 bg-purple-500/20 backdrop-blur-sm border-purple-500/30'>
              <Code className='w-5 h-5 text-purple-400' />
            </div>
            <div className='absolute p-3 border rounded-full -bottom-4 -left-4 bg-blue-500/20 backdrop-blur-sm border-blue-500/30'>
              <Zap className='w-5 h-5 text-blue-400' />
            </div>
          </div>

          {/* Text Content */}
          <h2 className='mb-4 text-3xl font-bold text-white'>
            Find Your Perfect 
            <span className='text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text'> Match</span>
          </h2>
          <p className='leading-relaxed text-slate-400'>
            Connect your GitHub account and let our AI find open-source projects that match your skills, interests, and career goals.
          </p>

          {/* Stats */}
          <div className='flex justify-center gap-8 mt-8'>
            <div className='text-center'>
              <div className='text-2xl font-bold text-white'>10k+</div>
              <div className='text-sm text-slate-400'>Developers</div>
            </div>
            <div className='text-center'>
              <div className='text-2xl font-bold text-white'>50k+</div>
              <div className='text-sm text-slate-400'>Projects</div>
            </div>
            <div className='text-center'>
              <div className='text-2xl font-bold text-white'>95%</div>
              <div className='text-sm text-slate-400'>Match Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage