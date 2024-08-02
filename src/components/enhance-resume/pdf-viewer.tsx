'use client'
import React from 'react';
import { Viewer, Worker, SpecialZoomLevel } from '@react-pdf-viewer/core';
import { toolbarPlugin, ToolbarSlot, TransformToolbarSlot } from '@react-pdf-viewer/toolbar';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import '@react-pdf-viewer/toolbar/lib/styles/index.css';

interface PdfViewerProps {
  fileUrl: string;
}

const CustomToolbar: React.FC<{ toolbarPluginInstance: ReturnType<typeof toolbarPlugin> }> = ({ toolbarPluginInstance }) => {
  const { renderDefaultToolbar, Toolbar } = toolbarPluginInstance;

  const transform: TransformToolbarSlot = (slot: ToolbarSlot) => ({
    ...slot,
    Download: () => <></>,
    EnterFullScreen: () => <></>,
    SwitchTheme: () => <></>,
    Open: () => <></>,
    Print: () => <></>,
  });

  return (
    <Toolbar>{renderDefaultToolbar(transform)}</Toolbar>
  );
};

const PdfViewer: React.FC<PdfViewerProps> = ({ fileUrl }) => {
  const toolbarPluginInstance = toolbarPlugin();  

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
      <div className="w-full h-[800px] rounded-lg bg-gray-100">
        <CustomToolbar toolbarPluginInstance={toolbarPluginInstance} />
        <div className="w-full h-full">
          <Viewer
            fileUrl={fileUrl}
            defaultScale={SpecialZoomLevel.PageFit}
            plugins={[toolbarPluginInstance]}
          />
        </div>
      </div>
    </Worker>
  );
};

export default PdfViewer;
