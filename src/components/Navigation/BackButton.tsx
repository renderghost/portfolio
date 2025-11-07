import { useNavigate } from 'react-router-dom';

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="inline-flex items-center px-4 py-2 rounded-full bg-bones-whitesmoke dark:bg-bones-dimgray text-bones-dimgray dark:text-bones-whitesmoke hover:bg-bones-blue/10 hover:text-bones-blue dark:hover:bg-bones-blue/20 dark:hover:text-bones-cyan transition-colors"
    >
      <svg
        className="w-4 h-4 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
      Back
    </button>
  );
}
