// src/pages/builder/Preview.jsx
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useBuilderStore from "@/store/useBuilderStore";
import { toPng, toJpeg } from "html-to-image";
import jsPDF from 'jspdf';
import {
  ArrowLeftIcon,
  DocumentArrowDownIcon,
  PhotoIcon,
  ExclamationTriangleIcon,
  EyeIcon,
  EllipsisVerticalIcon
} from '@heroicons/react/24/outline';

const Preview = () => {
  const navigate = useNavigate();
  const exportRef = useRef();
  const [isExporting, setIsExporting] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const [exportProgress, setExportProgress] = useState('');
  const [exportType, setExportType] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const sections = useBuilderStore((s) => s.sections);
  const loadFromLocalStorage = useBuilderStore((s) => s.loadFromLocalStorage);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    loadFromLocalStorage();
    setTimeout(() => setIsHydrated(true), 100);
  }, []);

  const hasContent = isHydrated && sections.length > 0;

  const preloadImages = async () => {
    setExportProgress('🔍 Checking images...');
    const images = exportRef.current?.querySelectorAll('img') || [];
    const imagePromises = Array.from(images).map(img =>
      new Promise(resolve => {
        if (img.complete && img.naturalWidth > 0) return resolve(true);
        const temp = new Image();
        temp.onload = () => resolve(true);
        temp.onerror = () => {
          img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzlDQTNBRiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIE5vdCBBdmFpbGFibGU8L3RleHQ+PC9zdmc+'; // placeholder
          resolve(false);
        };
        temp.src = img.src;
        setTimeout(() => resolve(false), 2000);
      })
    );
    await Promise.all(imagePromises);
    if (document.fonts) await document.fonts.ready;
    await new Promise(res => setTimeout(res, 1500));
  };

  const handleExport = async (type) => {
    if (!exportRef.current || !hasContent) return;
    setIsExporting(true);
    setExportType(type);
    setShowMobileMenu(false);
    
    try {
      await preloadImages();
      setExportProgress(`🎨 Generating ${type}...`);
      const dataUrl = await toPng(exportRef.current, {
        cacheBust: true,
        backgroundColor: '#ffffff',
        pixelRatio: 2,
        useCORS: true,
        filter: (node) => node.tagName !== 'SCRIPT',
        onclone: (doc) => {
          const imgs = doc.querySelectorAll('img');
          imgs.forEach(img => {
            if (!img.src || img.src.includes('404')) {
              img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzlDQTNBRiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIE5vdCBBdmFpbGFibGU8L3RleHQ+PC9zdmc+'; // fallback image
            }
          });
        }
      });

      if (type === 'PNG') {
        const a = document.createElement('a');
        a.download = 'homepage-preview.png';
        a.href = dataUrl;
        a.click();
      } else if (type === 'PDF') {
        const pdf = new jsPDF('p', 'mm', 'a4');
        const img = new Image();
        img.src = dataUrl;
        await new Promise(res => { img.onload = res; img.onerror = res; });
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();
        const pxToMm = px => px * 0.264583;
        const ratio = pageWidth / pxToMm(img.width);
        const scaledHeight = pxToMm(img.height) * ratio;
        if (scaledHeight <= pageHeight) {
          pdf.addImage(dataUrl, 'PNG', 0, 0, pageWidth, scaledHeight);
        } else {
          let position = 0, remaining = scaledHeight;
          while (remaining > 0) {
            pdf.addImage(dataUrl, 'PNG', 0, position * -1, pageWidth, scaledHeight);
            remaining -= pageHeight;
            position += pageHeight;
            if (remaining > 0) pdf.addPage();
          }
        }
        pdf.save('homepage-preview.pdf');
      }

      setExportProgress(`✅ ${type} Downloaded Successfully!`);
    } catch (err) {
      console.error(`${type} Export failed`, err);
      setExportProgress(`❌ ${type} Export Failed - Try again`);
    } finally {
      setTimeout(() => {
        setExportProgress('');
        setExportType('');
        setIsExporting(false);
      }, 3000);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Background and animation */}
      <div className="absolute inset-0">
        <div className="absolute rounded-full top-20 left-10 w-72 h-72 bg-blue-500/10 blur-3xl animate-pulse"></div>
        <div className="absolute rounded-full bottom-20 right-10 w-96 h-96 bg-blue-600/5 blur-3xl animate-pulse"></div>
      </div>
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="absolute w-1 h-1 rounded-full bg-blue-400/30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Mobile Header - Compact and Fixed */}
      {isMobile ? (
        <div className="fixed top-0 left-0 right-0 z-50 border-b border-blue-500/20 bg-gradient-to-r from-gray-900 via-black to-gray-900 backdrop-blur-xl">
          <div className="flex items-center justify-between px-4 py-3">
            {/* Left - Back Button */}
            <button 
              onClick={() => navigate('/builder/editor')}
              className="flex items-center justify-center w-10 h-10 text-blue-400 transition-colors rounded-full hover:bg-blue-500/10"
            >
              <ArrowLeftIcon className="w-5 h-5" />
            </button>

            {/* Center - Preview Badge */}
            <div className="flex items-center gap-2 px-3 py-1 border rounded-full bg-blue-500/10 border-blue-500/20">
              <EyeIcon className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">Preview</span>
            </div>

            {/* Right - Menu Button */}
            <div className="relative">
              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                disabled={!hasContent}
                className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors ${
                  !hasContent
                    ? 'text-gray-600 cursor-not-allowed'
                    : 'text-white hover:bg-blue-500/10'
                }`}
              >
                <EllipsisVerticalIcon className="w-5 h-5" />
              </button>

              {/* Mobile Export Menu */}
              {showMobileMenu && hasContent && (
                <div className="absolute right-0 z-50 w-48 mt-2 overflow-hidden border border-gray-700 shadow-2xl top-full bg-gray-900/95 backdrop-blur-md rounded-xl">
                  <div className="py-2">
                    <button
                      onClick={() => handleExport('PNG')}
                      disabled={isExporting}
                      className={`w-full flex items-center space-x-3 px-4 py-3 text-sm transition-colors ${
                        isExporting && exportType === 'PNG'
                          ? 'text-gray-400 cursor-wait bg-gray-800'
                          : 'text-white hover:bg-gray-800'
                      }`}
                    >
                      <PhotoIcon className="w-4 h-4" />
                      <span>{isExporting && exportType === 'PNG' ? 'Exporting PNG...' : 'Export as PNG'}</span>
                    </button>
                    
                    <button
                      onClick={() => handleExport('PDF')}
                      disabled={isExporting}
                      className={`w-full flex items-center space-x-3 px-4 py-3 text-sm transition-colors ${
                        isExporting && exportType === 'PDF'
                          ? 'text-gray-400 cursor-wait bg-gray-800'
                          : 'text-white hover:bg-gray-800'
                      }`}
                    >
                      <DocumentArrowDownIcon className="w-4 h-4" />
                      <span>{isExporting && exportType === 'PDF' ? 'Exporting PDF...' : 'Export as PDF'}</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Export Progress - Only show when exporting */}
          {exportProgress && (
            <div className="px-4 pb-3">
              <div className={`p-2 rounded-lg border backdrop-blur-sm ${
                exportProgress.includes('✅') ? 'bg-green-500/10 border-green-500/20 text-green-400' :
                exportProgress.includes('❌') ? 'bg-red-500/10 border-red-500/20 text-red-400' :
                'bg-blue-500/10 border-blue-500/20 text-blue-400'
              }`}>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-xs font-medium">{exportProgress}</span>
                  {isExporting && !exportProgress.includes('✅') && !exportProgress.includes('❌') && (
                    <div className="w-3 h-3 border-2 border-current rounded-full border-t-transparent animate-spin"></div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Desktop Header */
        <div className="sticky top-0 z-50 border-b border-blue-500/20 bg-gradient-to-r from-gray-900 via-black to-gray-900 backdrop-blur-xl">
          <div className="flex flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Left */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 border rounded-full bg-blue-500/10 border-blue-500/20 backdrop-blur-sm">
                <EyeIcon className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-blue-300">Preview Mode</span>
              </div>
              <h2 className="text-xl font-bold text-transparent bg-gradient-to-r from-white to-blue-200 bg-clip-text">Live Preview</h2>
              <p className="text-sm text-gray-400">
                {!isHydrated ? "Loading..." : !hasContent ? "No content to preview" : `${sections.length} section${sections.length !== 1 ? 's' : ''}`}
              </p>
            </div>

            {/* Right buttons */}
            <div className="flex flex-wrap justify-start gap-3 sm:justify-end">
              <button onClick={() => handleExport('PNG')} disabled={!hasContent || isExporting}
                className={`flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-all duration-300 ${
                  isExporting && exportType === 'PNG' ? 'bg-gray-600 text-gray-300 cursor-wait' :
                  !hasContent ? 'bg-gray-800 text-gray-600 cursor-not-allowed' :
                                    'bg-gradient-to-r from-green-500 to-green-600 text-white hover:scale-105'
                }`}>
                <PhotoIcon className="w-4 h-4" />
                <span>{isExporting && exportType === 'PNG' ? 'Exporting...' : 'Export PNG'}</span>
              </button>

              <button onClick={() => handleExport('PDF')} disabled={!hasContent || isExporting}
                className={`flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-all duration-300 ${
                  isExporting && exportType === 'PDF' ? 'bg-gray-600 text-gray-300 cursor-wait' :
                  !hasContent ? 'bg-gray-800 text-gray-600 cursor-not-allowed' :
                  'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:scale-105'
                }`}>
                <DocumentArrowDownIcon className="w-4 h-4" />
                <span>{isExporting && exportType === 'PDF' ? 'Exporting...' : 'Export PDF'}</span>
              </button>

              <button onClick={() => navigate('/builder/editor')}
                className="flex items-center gap-2 px-4 py-2 text-blue-400 transition-all duration-300 border rounded-lg border-blue-500/30 hover:bg-blue-500/10">
                <ArrowLeftIcon className="w-4 h-4" />
                <span>Back to Editor</span>
              </button>
            </div>
          </div>

          {/* Desktop Export progress */}
          {exportProgress && (
            <div className="px-6 pb-4">
              <div className={`p-3 rounded-lg border backdrop-blur-sm ${
                exportProgress.includes('✅') ? 'bg-green-500/10 border-green-500/20 text-green-400' :
                exportProgress.includes('❌') ? 'bg-red-500/10 border-red-500/20 text-red-400' :
                'bg-blue-500/10 border-blue-500/20 text-blue-400'
              }`}>
                <div className="flex items-center space-x-3">
                  <span className="font-medium">{exportProgress}</span>
                  {isExporting && !exportProgress.includes('✅') && !exportProgress.includes('❌') && (
                    <div className="w-4 h-4 border-2 border-current rounded-full border-t-transparent animate-spin"></div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Main Preview Area */}
      <div className={`relative z-10 ${isMobile ? 'pt-16' : ''}`}>
        <div ref={exportRef} className="w-full bg-white">
          {!isHydrated ? (
            <div className="flex flex-col items-center justify-center py-12 text-gray-500 bg-white sm:py-20">
              <div className="w-8 h-8 mb-4 border-4 rounded-full sm:w-12 sm:h-12 border-blue-500/20 border-t-blue-500 animate-spin"></div>
              <h3 className="mb-2 text-base font-semibold text-gray-700 sm:text-lg">Loading Preview...</h3>
              <p className="text-sm text-gray-500 sm:text-base">Please wait while we prepare your homepage</p>
            </div>
          ) : !hasContent ? (
            <div className="flex flex-col items-center justify-center py-12 text-gray-500 bg-white sm:py-20">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full sm:w-16 sm:h-16 sm:mb-6 bg-gradient-to-r from-blue-500/20 to-blue-600/20">
                <ExclamationTriangleIcon className="w-6 h-6 text-blue-400 sm:w-8 sm:h-8" />
              </div>
              <h3 className="mb-3 text-lg font-bold text-gray-700 sm:text-xl sm:mb-4">Nothing to Preview</h3>
              <p className="max-w-md px-4 mb-4 text-sm text-center text-gray-500 sm:text-base sm:px-0 sm:mb-6">
                Your canvas is empty. Go back to the editor and add some sections.
              </p>
              <button 
                onClick={() => navigate('/builder/editor')}
                className="px-4 py-2 text-sm font-semibold text-white transition-all duration-300 rounded-lg sm:px-6 sm:py-3 sm:text-base bg-gradient-to-r from-blue-500 to-blue-600 hover:scale-105"
              >
                Start Building
              </button>
            </div>
          ) : (
            sections.map(section => {
              const Component = section.component;
              if (!Component) return null;
              return (
                <div key={section.id} className="w-full">
                  <Component {...section.props} />
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {showMobileMenu && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={() => setShowMobileMenu(false)}
        />
      )}

      {/* Mobile Export Status - Fixed at bottom when exporting */}
      {isMobile && isExporting && exportProgress && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 border-t bg-gray-900/95 backdrop-blur-xl border-blue-500/20">
          <div className={`p-3 rounded-lg border backdrop-blur-sm ${
            exportProgress.includes('✅') ? 'bg-green-500/10 border-green-500/20 text-green-400' :
            exportProgress.includes('❌') ? 'bg-red-500/10 border-red-500/20 text-red-400' :
            'bg-blue-500/10 border-blue-500/20 text-blue-400'
          }`}>
            <div className="flex items-center justify-center space-x-3">
              <span className="text-sm font-medium">{exportProgress}</span>
              {!exportProgress.includes('✅') && !exportProgress.includes('❌') && (
                <div className="w-4 h-4 border-2 border-current rounded-full border-t-transparent animate-spin"></div>
              )}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Preview;