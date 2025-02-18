import { useState } from "react";

export default function Layout() {
  const [showForm, setShowForm] = useState(false);
  const [showCookieConsent, setShowCookieConsent] = useState(true);

  const handleScrollToForm = () => {
    setShowForm(true);
    setTimeout(() => {
      document.getElementById("interview-form").scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="relative min-h-[200vh] w-full text-white flex flex-col bg-black">
      {/* Navigation Bar */}
      <nav className="relative flex justify-between items-center p-6 bg-gray-900 bg-opacity-75 w-full backdrop-blur-lg z-10">
        <div className="text-lg font-bold text-purple-400 flex items-center">
          <span className="text-white text-2xl">C</span>odeFury
        </div>
        <div className="space-x-6">
          <button className="hover:text-gray-400">Home</button>
          <button className="hover:text-gray-400">About Us</button>
          <button className="hover:text-gray-400">Contact Us</button>
          <button className="bg-purple-600 px-6 py-3 rounded-lg hover:bg-purple-700 backdrop-blur-md shadow-lg shadow-purple-500/50">Get Started</button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative flex flex-1 items-center justify-between p-24 w-full max-w-7xl mx-auto z-10">
        <div className="max-w-2xl">
          <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            AI-Based Interviews
          </h1>
          <p className="text-gray-400 mt-6 text-lg">
            Prepare for your interviews with real-time voice-to-voice interview sessions with the world's most advanced AI bot. Say goodbye to interview performance anxiety.
          </p>
          <button onClick={handleScrollToForm} className="mt-8 bg-purple-600 px-8 py-4 rounded-lg text-white hover:bg-purple-700 text-lg shadow-lg shadow-purple-500/50">
            Try a Free Mock Interview Now
          </button>
        </div>
      </div>

      {/* Interview Form */}
      {showForm && (
        <div id="interview-form" className="relative flex flex-col items-center bg-gray-800 p-10 rounded-lg shadow-xl shadow-blue-500/50 max-w-xl mx-auto mt-16 w-full backdrop-blur-md bg-opacity-75 z-10">
          <h2 className="text-2xl font-bold mb-6 text-blue-400">Enter Your Details</h2>
          <input type="text" placeholder="Name" className="w-full p-3 mb-3 bg-gray-700 bg-opacity-50 rounded text-lg text-white placeholder-gray-400 backdrop-blur-lg" />
          <input type="number" placeholder="Age" className="w-full p-3 mb-3 bg-gray-700 bg-opacity-50 rounded text-lg text-white placeholder-gray-400 backdrop-blur-lg" />
          <select className="w-full p-3 mb-3 bg-gray-700 bg-opacity-50 rounded text-lg text-white backdrop-blur-lg">
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          <input type="text" placeholder="Your Interview Domain" className="w-full p-3 mb-6 bg-gray-700 bg-opacity-50 rounded text-lg text-white placeholder-gray-400 backdrop-blur-lg" />
          <button className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded text-lg shadow-lg shadow-blue-500/50">
            Start Interview
          </button>
        </div>
      )}

      {/* Benefits Section */}
      <div className="relative flex flex-row items-center justify-center max-w-6xl mx-auto mt-16 p-10 bg-gray-900 bg-opacity-75 rounded-lg shadow-lg shadow-blue-500/50">
        <img src="/mnt/data/Screenshot (12).png" alt="AI Interview" className="w-1/3 rounded-lg shadow-lg" />
        <div className="ml-10 text-white">
          <h2 className="text-3xl font-bold text-blue-400 mb-4">Benefits of AI-Powered Interviews</h2>
          <ul className="list-disc pl-5 text-lg text-gray-300">
            <li>Get real-time feedback on your performance</li>
            <li>Improve confidence with AI-driven mock interviews</li>
            <li>Practice unlimited times at your convenience</li>
            <li>Receive AI-generated insights to enhance responses</li>
            <li>Access interviews tailored to your job domain</li>
          </ul>
        </div>
      </div>

      {/* Cookie Consent */}
      {showCookieConsent && (
        <div className="relative bg-gray-900 bg-opacity-75 text-gray-400 text-center p-6 flex justify-between items-center w-full backdrop-blur-md z-10">
          <span className="text-sm">This website uses cookies to improve your experience. By using our website you consent to all cookies in accordance with our Cookie Policy.</span>
          <button onClick={() => setShowCookieConsent(false)} className="bg-purple-600 px-6 py-3 rounded-lg hover:bg-purple-700 text-lg shadow-lg shadow-purple-500/50">
            Accept
          </button>
        </div>
      )}
    </div>
  );
}
