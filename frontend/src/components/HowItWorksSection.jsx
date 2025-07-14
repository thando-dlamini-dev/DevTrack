import { useState } from "react"
import { Sparkles, Github, Target, TrendingUp } from "lucide-react"

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(0)
  
  const steps = [
    {
      number: "01",
      title: "Connect Your GitHub",
      description: "Link your GitHub account to analyze your coding patterns, preferred languages, and contribution history.",
      visual: <Github className="w-12 h-12 text-slate-700" />
    },
    {
      number: "02", 
      title: "AI Analysis & Matching",
      description: "Our AI examines thousands of repositories to find projects that perfectly match your skills and interests.",
      visual: <Sparkles className="w-12 h-12 text-purple-600" />
    },
    {
      number: "03",
      title: "Get Personalized Recommendations",
      description: "Receive curated project suggestions with detailed breakdowns of requirements and contribution opportunities.",
      visual: <Target className="w-12 h-12 text-green-600" />
    },
    {
      number: "04",
      title: "Start Contributing & Track Progress",
      description: "Begin contributing with confidence and monitor your growth through comprehensive analytics and insights.",
      visual: <TrendingUp className="w-12 h-12 text-blue-600" />
    }
  ]

  return (
    <div className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="px-6 mx-auto max-w-7xl sm:px-12">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl text-slate-800">
            How It Works
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-600">
            Get started in minutes and discover your next meaningful contribution opportunity
          </p>
        </div>

        <div className="flex flex-col items-center gap-12 lg:flex-row">
          {/* Steps Navigation */}
          <div className="space-y-6 lg:w-1/2">
            {steps.map((step, index) => (
              <div 
                key={index}
                onClick={() => setActiveStep(index)}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  activeStep === index 
                    ? 'bg-white shadow-lg border border-purple-200' 
                    : 'bg-white/50 hover:bg-white/80 border border-slate-200'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`text-2xl font-bold px-3 py-1 rounded-lg ${
                    activeStep === index ? 'bg-purple-100 text-purple-600' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-semibold mb-2 ${
                      activeStep === index ? 'text-slate-800' : 'text-slate-600'
                    }`}>
                      {step.title}
                    </h3>
                    <p className="text-slate-600">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Visual Display */}
          <div className="flex justify-center lg:w-1/2">
            <div className="w-full max-w-md p-8 bg-white border shadow-2xl rounded-3xl border-slate-200">
              <div className="mb-6 text-center">
                <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl">
                  {steps[activeStep].visual}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-slate-800">
                  {steps[activeStep].title}
                </h3>
                <p className="text-slate-600">
                  {steps[activeStep].description}
                </p>
              </div>
              
              {/* Mock Interface */}
              <div className="p-4 space-y-3 bg-slate-50 rounded-xl">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                </div>
                <div className="space-y-2">
                  <div className="w-3/4 h-2 rounded bg-slate-200"></div>
                  <div className="w-1/2 h-2 rounded bg-slate-200"></div>
                  <div className="w-2/3 h-2 bg-purple-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorksSection