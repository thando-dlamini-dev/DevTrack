import { Play, CheckCircle, Github, Code, Star, TrendingUp } from "lucide-react";

const CTASection = () => {
  return (
    <div className="py-20 bg-purple-600 ">
      <div className="max-w-4xl px-6 mx-auto text-center sm:px-12">
        <div className="mb-8">
          <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Ready to Start Your 
            <br />
            <span className="text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text">
              Open Source Journey?
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed text-purple-100">
            Join thousands of developers who have accelerated their careers through meaningful open-source contributions. 
            Get started today and discover your next opportunity.
          </p>
        </div>

        {/* Stats Row */}
        <div className="flex flex-col items-center justify-center gap-8 mb-12 sm:flex-row">
          <div className="text-center">
            <div className="mb-1 text-3xl font-bold text-white">50,000+</div>
            <div className="text-sm text-purple-200">Projects Analyzed</div>
          </div>
          <div className="hidden w-px h-12 bg-purple-400 sm:block"></div>
          <div className="text-center">
            <div className="mb-1 text-3xl font-bold text-white">10,000+</div>
            <div className="text-sm text-purple-200">Active Developers</div>
          </div>
          <div className="hidden w-px h-12 bg-purple-400 sm:block"></div>
          <div className="text-center">
            <div className="mb-1 text-3xl font-bold text-white">95%</div>
            <div className="text-sm text-purple-200">Success Rate</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 mb-8 sm:flex-row">
          <button className="flex items-center gap-2 px-8 py-4 text-lg font-semibold text-purple-700 transition-all duration-300 bg-white rounded-full shadow-lg hover:bg-gray-50 hover:shadow-xl">
            <Play className="w-5 h-5" />
            Get Started Free
          </button>
          <button className="px-8 py-4 text-lg font-semibold text-white transition-all duration-300 border-2 border-white rounded-full hover:bg-white hover:text-purple-700">
            View Demo
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-col items-center justify-center gap-6 text-sm text-purple-200 sm:flex-row">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4" />
            <span>Free to start</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4" />
            <span>Setup in 2 minutes</span>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="relative mt-12">
          <div className="absolute hidden transform -translate-x-1/2 -top-4 left-1/4 lg:block">
            <div className="p-3 border rounded-full bg-white/10 backdrop-blur-sm border-white/20">
              <Github className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="absolute hidden transform translate-x-1/2 -top-4 right-1/4 lg:block">
            <div className="p-3 border rounded-full bg-white/10 backdrop-blur-sm border-white/20">
              <Code className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="absolute hidden transform -translate-x-1/2 top-8 left-1/6 lg:block">
            <div className="p-3 border rounded-full bg-white/10 backdrop-blur-sm border-white/20">
              <Star className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="absolute hidden transform translate-x-1/2 top-8 right-1/6 lg:block">
            <div className="p-3 border rounded-full bg-white/10 backdrop-blur-sm border-white/20">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CTASection;