import { useEffect, useState } from 'react'
import { FaCode } from 'react-icons/fa'

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => onLoadingComplete(), 500)
          return 100
        }
        return prev + 2
      })
    }, 30)

    return () => clearInterval(interval)
  }, [onLoadingComplete])

  return (
    <div className="fixed inset-0 z-[9999] bg-white dark:bg-[#0A0A0A] flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Loading Content */}
      <div className="relative z-10 text-center">
        {/* Logo Animation */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-2xl animate-bounce">
              <FaCode className="text-4xl text-white" />
            </div>
            <div className="absolute -inset-2 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur opacity-30 animate-pulse"></div>
          </div>
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2 animate-fade-in">
          Roksana
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Full Stack Developer
        </p>

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-purple-600 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-500 mt-3 font-mono">
            {progress}%
          </p>
        </div>

        {/* Loading Text */}
        <div className="mt-8 flex items-center justify-center space-x-2">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
          <span className="text-sm text-slate-600 dark:text-slate-400">Loading Portfolio</span>
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen
