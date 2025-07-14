import { Bell, Code, Trophy, Users, Star, Calendar, ArrowRight, Github, Filter, Search } from "lucide-react";

const DashboardSection = () => {
  return (
    <div className="py-20 bg-white">
      <div className="px-6 mx-auto max-w-7xl sm:px-12">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl text-slate-800">
            Your Personal 
            <span className="text-purple-600"> Contribution Dashboard</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-600">
            Track your progress, discover new opportunities, and manage your open-source journey all in one place
          </p>
        </div>

        <div className="relative">
          {/* Main Dashboard Mockup */}
          <div className="p-8 shadow-2xl bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-600 rounded-xl">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Welcome back, Alex!</h3>
                  <p className="text-sm text-slate-400">Ready to contribute today?</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-slate-400" />
                <div className="w-8 h-8 rounded-full bg-slate-700"></div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid gap-6 mb-8 md:grid-cols-4">
              <div className="p-4 border bg-slate-800 rounded-xl border-slate-700">
                <div className="flex items-center gap-3">
                  <Trophy className="w-6 h-6 text-yellow-500" />
                  <div>
                    <p className="text-sm text-slate-400">Total PRs</p>
                    <p className="text-xl font-semibold text-white">47</p>
                  </div>
                </div>
              </div>
              <div className="p-4 border bg-slate-800 rounded-xl border-slate-700">
                <div className="flex items-center gap-3">
                  <Star className="w-6 h-6 text-blue-500" />
                  <div>
                    <p className="text-sm text-slate-400">Stars Earned</p>
                    <p className="text-xl font-semibold text-white">1.2k</p>
                  </div>
                </div>
              </div>
              <div className="p-4 border bg-slate-800 rounded-xl border-slate-700">
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-green-500" />
                  <div>
                    <p className="text-sm text-slate-400">Projects</p>
                    <p className="text-xl font-semibold text-white">12</p>
                  </div>
                </div>
              </div>
              <div className="p-4 border bg-slate-800 rounded-xl border-slate-700">
                <div className="flex items-center gap-3">
                  <Calendar className="w-6 h-6 text-purple-500" />
                  <div>
                    <p className="text-sm text-slate-400">Streak</p>
                    <p className="text-xl font-semibold text-white">15 days</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Recommendations */}
            <div className="p-6 border bg-slate-800 rounded-xl border-slate-700">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-white">Recommended for You</h4>
                <button className="flex items-center gap-1 text-sm text-purple-400 hover:text-purple-300">
                  View All <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-4">
                {[
                  { name: "react-table", lang: "TypeScript", match: "98%", difficulty: "Intermediate" },
                  { name: "next-auth", lang: "JavaScript", match: "94%", difficulty: "Beginner" },
                  { name: "tailwind-ui", lang: "CSS", match: "91%", difficulty: "Advanced" }
                ].map((project, i) => (
                  <div key={i} className="flex items-center justify-between p-4 border rounded-lg bg-slate-900 border-slate-600">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-700">
                        <Github className="w-5 h-5 text-slate-400" />
                      </div>
                      <div>
                        <h5 className="font-medium text-white">{project.name}</h5>
                        <p className="text-sm text-slate-400">{project.lang} • {project.difficulty}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-green-400">{project.match} match</span>
                      <button className="px-4 py-2 text-sm text-white transition-colors bg-purple-600 rounded-lg hover:bg-purple-700">
                        View
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute hidden p-4 bg-white border shadow-lg -top-6 -right-6 rounded-xl border-slate-200 lg:block">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-purple-600" />
              <div>
                <p className="text-xs text-slate-500">Smart Filtering</p>
                <p className="font-semibold text-slate-800">Active</p>
              </div>
            </div>
          </div>

          <div className="absolute hidden p-4 bg-white border shadow-lg -bottom-6 -left-6 rounded-xl border-slate-200 lg:block">
            <div className="flex items-center gap-2">
              <Search className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-xs text-slate-500">AI Search</p>
                <p className="font-semibold text-slate-800">Enabled</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardSection