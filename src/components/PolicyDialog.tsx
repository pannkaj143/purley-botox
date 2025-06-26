import React from 'react';

interface PolicyDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
}

const PolicyDialog: React.FC<PolicyDialogProps> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl font-bold"
          aria-label="Close dialog"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold text-primary mb-4">{title}</h2>
        <div className="max-h-[60vh] overflow-y-auto text-gray-700">{content}</div>
      </div>
    </div>
  );
};

export default PolicyDialog;
