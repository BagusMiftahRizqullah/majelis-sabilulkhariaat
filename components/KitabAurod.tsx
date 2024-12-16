import { useState } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { pdfjs } from 'pdfjs-dist'; // Optional, if you need version info for pdf.js

const KitabAurod = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState(null);

  // Handling the PDF loading and error states
  const onLoadSuccess = ({ numPages }) => {
    setNumPages(numPages); // Set the number of pages once the PDF is loaded
    setPageNumber(1); // Reset to first page after PDF loads
  };

  const onPreviousPage = () => {
    setPageNumber(prevPage => Math.max(prevPage - 1, 1));
  };

  const onNextPage = () => {
    setPageNumber(prevPage => Math.min(prevPage + 1, numPages));
  };

  return (
    <div className="pdf-viewer">
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${1.13}/build/pdf.worker.min.js`}>
        <Viewer
          fileUrl="/pdf/kitabAurod.pdf"  // Corrected to reference the PDF from the public folder
          onLoadSuccess={onLoadSuccess}
        />
      </Worker>

      {/* Navigation buttons for pagination */}
      <div className="pdf-navigation flex justify-center mt-4">
        <button 
          onClick={onPreviousPage} 
          disabled={pageNumber <= 1}
          className="px-4 py-2 mr-2 bg-blue-500 text-white rounded"
        >
          Previous
        </button>
        <span className="text-xl">
          Page {pageNumber} of {numPages}
        </span>
        <button 
          onClick={onNextPage} 
          disabled={pageNumber >= numPages}
          className="px-4 py-2 ml-2 bg-blue-500 text-white rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default KitabAurod;
