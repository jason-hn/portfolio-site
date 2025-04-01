import dashboardImg from './assets/cashflow-preview.png';
import ecommerceImg from './assets/ecommerce-preview.png';

export default function HomePage() {
  return (
    <div className="bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-indigo-900">Jason Han</span>
            </div>
            <div className="flex items-center space-x-8">
              <a href="#about" className="text-gray-600 hover:text-indigo-900">About</a>
              <a href="#projects" className="text-gray-600 hover:text-indigo-900">Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-indigo-900">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - White background */}
      <div className="bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center pt-32 pb-16">
            <h1 className="text-5xl font-bold text-indigo-900 mb-4">Jason Han</h1>
            <p className="text-xl text-gray-600 mb-3">SDET @ Scotiabank</p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Building scalable enterprise solutions with a focus on financial technology and distributed systems
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <a href="#projects" className="px-6 py-3 bg-indigo-900 text-white rounded-lg hover:bg-indigo-800 transition-colors">
                View Projects
              </a>
              <a href="#contact" className="px-6 py-3 border-2 border-indigo-900 text-indigo-900 rounded-lg hover:bg-indigo-50 transition-colors">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* About Section - Gray background */}
      <div className="bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <section id="about" className="py-16">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl font-bold text-indigo-900 mb-8 text-center">About Me</h2>
              <p className="text-lg leading-relaxed text-gray-600">
                I specialize in developing high-performance, enterprise-grade applications that process billions in transactions. 
                With experience at Scotiabank and National Bank of Canada, I bring a deep understanding of financial systems 
                and scalable architecture.
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                My engineering philosophy centers on building reliable, maintainable systems that stand the test of time and scale. 
                I believe in pragmatic solutions that deliver real business value while maintaining technical excellence.
              </p>
            </div>

            {/* Enhanced Achievements Section */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-indigo-900 mb-8 text-center">Professional Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">🚀</span>
                    <span className="text-indigo-900 font-bold">17% Improvement</span>
                  </div>
                  <h3 className="text-xl font-bold text-indigo-900 mb-4">DevOps Optimization</h3>
                  <p className="text-gray-600">Automated CI/CD pipelines at Scotiabank, reducing manual oversight by 17% and accelerating production releases.</p>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">💳</span>
                    <span className="text-indigo-900 font-bold">$10B Processed</span>
                  </div>
                  <h3 className="text-xl font-bold text-indigo-900 mb-4">Payment Systems</h3>
                  <p className="text-gray-600">Engineered a Java-based automation framework supporting OTT Pay's $10B in transactions, achieving 97%+ stability and cutting manual QA work by 70%</p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">📊</span>
                    <span className="text-indigo-900 font-bold">$1.5B Portfolio</span>
                  </div>
                  <h3 className="text-xl font-bold text-indigo-900 mb-4">Financial Analysis</h3>
                  <p className="text-gray-600">Developed microservices architecture for real-time securities pricing analysis, optimizing cloud resources and improving data accuracy.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Projects Section - White background */}
      <div className="bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <section id="projects" className="py-16">
            <h2 className="text-3xl font-bold text-indigo-900 mb-8">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <a 
                href="https://cashflow.jason-han.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform">
                  <div className="p-4 bg-gray-50">
                    <img
                      src={dashboardImg}
                      alt="CashFlow Dashboard"
                      className="w-full rounded-lg shadow-sm"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-indigo-900 mb-2">Cash Flow</h3>
                    <p className="text-gray-600 mb-4">
                      A modern personal finance tracker that helps users manage transactions, track budgets, and visualize spending patterns through interactive charts.
                    </p>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-indigo-100 text-indigo-900 rounded-full text-sm">React</span>
                        <span className="px-3 py-1 bg-indigo-100 text-indigo-900 rounded-full text-sm">Node.js</span>
                        <span className="px-3 py-1 bg-indigo-100 text-indigo-900 rounded-full text-sm">Express.js</span>
                        <span className="px-3 py-1 bg-indigo-100 text-indigo-900 rounded-full text-sm">MongoDB</span>
                        <span className="px-3 py-1 bg-indigo-100 text-indigo-900 rounded-full text-sm">TailwindCSS</span>
                      </div>
                      <ul className="text-gray-600 text-sm space-y-2">
                        <li>• Real-time balance calculations and transaction tracking</li>
                        <li>• Secure user authentication with Google OAuth 2.0 integration</li>
                        <li>• Interactive charts for expense analysis</li>
                        <li>• Budget management with progress tracking</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </a>

              <a 
                href="https://techstore.jason-han.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform">
                  <img
                    src={ecommerceImg}
                    alt="Tech Store Dashboard"
                    className="w-full rounded-lg shadow-sm"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-indigo-900 mb-2">Tech Store</h3>
                    <p className="text-gray-600 mb-4">
                      An electronics e-commerce platform featuring product discovery, advanced filtering, and streamlined checkout with persistent user preferences.
                    </p>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-indigo-100 text-indigo-900 rounded-full text-sm">React</span>
                        <span className="px-3 py-1 bg-indigo-100 text-indigo-900 rounded-full text-sm">Node.js</span>
                        <span className="px-3 py-1 bg-indigo-100 text-indigo-900 rounded-full text-sm">Express.js</span>
                        <span className="px-3 py-1 bg-indigo-100 text-indigo-900 rounded-full text-sm">MongoDB</span>
                        <span className="px-3 py-1 bg-indigo-100 text-indigo-900 rounded-full text-sm">Tailwind CSS</span>
                        <span className="px-3 py-1 bg-indigo-100 text-indigo-900 rounded-full text-sm">Redux</span>
                      </div>
                      <ul className="text-gray-600 text-sm space-y-2">
                        <li>• Product filtering by category and customer ratings</li>
                        <li>• Persistent shipping address storage across sessions</li>
                        <li>• User authentication and profile management</li>
                        <li>• Shopping cart with real-time total calculations</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </section>
        </div>
      </div>

      {/* Contact Section - Gray background */}
      <div className="bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <section id="contact" className="py-16">
            <div className="bg-white p-12 rounded-xl shadow-lg text-center">
              <h2 className="text-3xl font-bold text-indigo-900 mb-4">Let's Build Something Great</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                I'm always interested in challenging projects that push the boundaries of scalable system design. 
                Whether you're building the next big fintech solution or scaling an existing system, let's connect.
              </p>
              <div className="flex justify-center gap-8">
                <a href="mailto:jason.han.256@gmail.com" className="flex flex-col items-center text-indigo-900 hover:text-indigo-800 transition-colors">
                  <span className="text-3xl mb-2">📧</span>
                  <span className="text-sm">Email</span>
                </a>
                <a href="https://linkedin.com/in/jason-hn" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-indigo-900 hover:text-indigo-800 transition-colors">
                  <span className="text-3xl mb-2">💼</span>
                  <span className="text-sm">LinkedIn</span>
                </a>
                <a href="https://github.com/jason-hn" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-indigo-900 hover:text-indigo-800 transition-colors">
                  <span className="text-3xl mb-2">🐙</span>
                  <span className="text-sm">GitHub</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
