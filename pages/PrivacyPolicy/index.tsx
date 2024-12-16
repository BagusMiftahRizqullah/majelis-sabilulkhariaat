import Navbar from '@/components/navbar';
import React from 'react';

function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar Component */}
      <Navbar />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Privacy Policy</h1>
        <p className="text-gray-600 italic mb-8 text-center">Last Updated: 16 December 2024</p>

        <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
        <p className="text-gray-700 mb-6">
          We <span className="font-bold">do not collect, store, or process</span> any personal data through this application.
          You can use the application without providing any information.
        </p>

        <h2 className="text-2xl font-semibold mb-4">2. Permissions Required</h2>
        <p className="text-gray-700 mb-4">
          The application requires the following permission to function properly:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li>
            <span className="font-semibold">Background Audio Playback:</span> This permission is necessary to allow you to play 
            <em> Kitab Aurod Thariqah Fahamiyah </em> audio files even when the application is running in the background. We do not use this permission for any other purposes.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">3. Security</h2>
        <p className="text-gray-700 mb-6">
          Since we do not collect any data, no information is stored or processed. Therefore, there is minimal risk of any security breach involving your personal data.
        </p>

        <h2 className="text-2xl font-semibold mb-4">4. Third Parties</h2>
        <p className="text-gray-700 mb-6">
          This application does not use third-party services that can access or process your data.
        </p>

        <h2 className="text-2xl font-semibold mb-4">5. Changes to the Privacy Policy</h2>
        <p className="text-gray-700 mb-6">
         {`We may update this Privacy Policy if there are changes to the application's features or additional permissions required. Updates will be communicated through the application. Please review this Privacy Policy periodically for any changes.`}
        </p>

        <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
        <p className="text-gray-700 mb-4">
          If you have any questions about this Privacy Policy, you can contact us at:
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li><span className="font-semibold">Email:</span> [bagusmiftah9@gmail.com]</li>
          <li><span className="font-semibold">Phone:</span> [+62 895-3294-17452]</li>
        </ul>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
