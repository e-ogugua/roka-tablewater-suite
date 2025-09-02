import { Droplets, BarChart3, Settings, Users, Shield, Zap } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Droplets className="w-12 h-12 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-800">Roka TableWater Suite</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Complete water management and purification system for commercial and residential use
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Droplets className="w-8 h-8 text-blue-500 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">Water Purification</h3>
            </div>
            <p className="text-gray-600">
              Advanced filtration and purification systems for clean, safe drinking water
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <BarChart3 className="w-8 h-8 text-cyan-500 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">Quality Monitoring</h3>
            </div>
            <p className="text-gray-600">
              Real-time water quality analysis and monitoring with detailed reporting
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Settings className="w-8 h-8 text-indigo-500 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">System Management</h3>
            </div>
            <p className="text-gray-600">
              Automated system controls and maintenance scheduling for optimal performance
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Users className="w-8 h-8 text-green-500 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">Multi-User Access</h3>
            </div>
            <p className="text-gray-600">
              Role-based access control for facility managers and maintenance teams
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-purple-500 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">Safety Compliance</h3>
            </div>
            <p className="text-gray-600">
              Regulatory compliance tracking and safety protocol management
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Zap className="w-8 h-8 text-yellow-500 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">Smart Automation</h3>
            </div>
            <p className="text-gray-600">
              IoT integration and smart automation for efficient water management
            </p>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
            Start Managing Water
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
