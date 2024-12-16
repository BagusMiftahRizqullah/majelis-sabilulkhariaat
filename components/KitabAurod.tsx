import { useState } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { pdfjs, version } from 'pdfjs-dist'; // Optional, if you need version info for pdf.js

const KitabAurod = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState(null);
  const [pagesPerView, setPagesPerView] = useState(1); // Define how many pages to show per view

  // Handling the PDF loading and error states
  const onLoadSuccess = ({ numPages }) => {
    setNumPages(numPages); // Set the number of pages once the PDF is loaded
    setPageNumber(1); // Reset to first page after PDF loads
  };

  const onPreviousPage = () => {
    setPageNumber(prevPage => Math.max(prevPage - pagesPerView, 1));
  };

  const onNextPage = () => {
    setPageNumber(prevPage => Math.min(prevPage + pagesPerView, numPages));
  };

  return (
    <div className="pdf-viewer">
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${version}/build/pdf.worker.min.js`}>
        <Viewer
          fileUrl="/pdf/kitabAurod.pdf"  // Corrected to reference the PDF from the public folder
          onLoadSuccess={onLoadSuccess}
          initialPage={pageNumber - 1} // Adjust the initial page display
        />
      </Worker>

    </div>
  );
};

export default KitabAurod;
