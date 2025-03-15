import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ErrorPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const errorMessage = state?.errorMessage || "An unexpected error occurred.";

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#03030a] text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Error</h1>
        <p className="text-lg mb-4">{errorMessage}</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-[#9dff13] text-[#03030a] rounded-lg hover:bg-[#8ae610] transition-colors"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;