import { Brain, Target, Mail, BarChart3 } from "lucide-react"

const FeaturesSection = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-purple-600" />,
      title: "AI-Powered Matching",
      description: "Our advanced AI analyzes your GitHub profile, skills, and preferences to find the perfect open-source projects for you.",
      gradient: "from-purple-100 to-blue-100"
    },
    {
      icon: <Target className="w-8 h-8 text-green-600" />,
      title: "Skill-Based Recommendations",
      description: "Get personalized project suggestions that match your experience level and help you grow your technical skills.",
      gradient: "from-green-100 to-teal-100"
    },
    {
      icon: <Mail className="w-8 h-8 text-blue-600" />,
      title: "Daily Email Digests",
      description: "Receive curated opportunities directly in your inbox with detailed project breakdowns and contribution guidelines.",
      gradient: "from-blue-100 to-indigo-100"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-orange-600" />,
      title: "Progress Tracking",
      description: "Monitor your open-source journey with detailed analytics, contribution metrics, and skill development insights.",
      gradient: "from-orange-100 to-red-100"
    }
  ]

  return (
    <div className="py-20 bg-white">
      <div className="px-6 mx-auto max-w-7xl sm:px-12">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl text-slate-800">
            Intelligent Features for 
            <span className="text-purple-600"> Smarter Contributing</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-600">
            GitContribute combines AI technology with community insights to make open-source contribution accessible and rewarding for developers at every level.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="transition-all duration-300 group hover:transform hover:scale-105">
              <div className="h-full p-6 bg-white border shadow-lg rounded-2xl hover:shadow-2xl border-slate-100">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-slate-800">{feature.title}</h3>
                <p className="leading-relaxed text-slate-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeaturesSection