'use client'
import React, { useState } from 'react'
import "react-pdf/dist/Page/AnnotationLayer.css"
import "react-pdf/dist/Page/TextLayer.css"

import {Document, Page, pdfjs} from 'react-pdf';
import { ZoomIn, ZoomOut } from 'lucide-react';

type Props = {
  resumeFile: File | null;
}

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;


const PdfViewer = ({ resumeFile }: Props) => {

  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1);

  const onDocumentLoadSuccess = ({numPages}: {numPages: number}): void => {
    setNumPages(numPages); 
  }


  return ( 
    <div className='flex flex-col items-center gap-4 h-full'>
      <div className='flex items-center md:text-sm text-xs w-full justify-center md:gap-4 gap-1'>
        <button
        className='bg-neutral-900 border-2 p-2 rounded-lg flex items-center hover:opacity-90 disabled:cursor-default disabled:opacity-50'
        disabled={pageNumber === 1}
        onClick={() => {
          if(pageNumber > 1){
            setPageNumber(pageNumber - 1);
          }
        }}
        >
          Prev
        </button>

        <p className='p-2 border-2 rounded-lg cursor-default'>
          {pageNumber} of {numPages}
        </p>

        <button
        className='bg-neutral-900 border-2 p-2 rounded-lg flex items-center hover:opacity-90 disabled:cursor-default disabled:opacity-50'
        disabled={pageNumber === numPages}
        onClick={() => {
          if(numPages){
            setPageNumber(pageNumber + 1);
          }
        }}
        >
          Next
        </button>

        <button
        className='bg-neutral-900 border-2 p-2 rounded-lg flex items-center hover:opacity-90 disabled:cursor-default disabled:opacity-50'
        disabled={scale >= 1.5}
        onClick={() => {
          setScale(scale * 1.2);
        }}
        >
          <ZoomIn className='h-5'/>
        </button>

        <button
        className='bg-neutral-900 border-2 p-2 rounded-lg flex items-center hover:opacity-90 disabled:cursor-default disabled:opacity-50'
        disabled={scale <= 0.75}
        onClick={() => {
          setScale(scale / 1.2);
        }}
        >
          <ZoomOut className='h-5'/>
        </button>
      </div>

      <div className='w-full max-h-full flex justify-center'>
        <div className='overflow-scroll rounded-lg shadow-lg shadow-gray-500'>
          <Document
            loading={null}
            file={resumeFile}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page scale={scale} pageNumber={pageNumber}/>
          </Document>
        </div>
      </div>
    </div>
  )
}

export default PdfViewer
