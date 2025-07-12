// src/pages/builder/Export.jsx
import React, { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useBuilderStore from '@/store/useBuilderStore'
import { toPng, toJpeg } from 'html-to-image'
import jsPDF from 'jspdf'
import getAvailableSectionsByNiche from '@/lib/getAvailableSectionsByNiche'
import {
  ArrowLeftIcon,
  DocumentArrowDownIcon,
  PhotoIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline'

const ExportPage = () => {
  const navigate = useNavigate()
  const exportRef = useRef()
  const { sections, niche } = useBuilderStore()
  const [hydratedSections, setHydratedSections] = useState([])
  const [isExporting, setIsExporting] = useState(false)
  const [exportProgress, setExportProgress] = useState('')
  const [exportType, setExportType] = useState('')
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const actualNiche = niche || JSON.parse(localStorage.getItem('homepage_builder_layout'))?.niche || 'real-estate'
  const availableSections = getAvailableSectionsByNiche(actualNiche)

  useEffect(() => {
    const resolved = sections.map((s) => {
      const match = availableSections.flatMap((cat) => cat.variations).find(v => v.id === s.componentKey)
      return {
        ...s,
        component: match?.component || null
      }
    })
    setHydratedSections(resolved)
  }, [sections, actualNiche])

  const preloadImages = async () => {
    setExportProgress('Checking images...')
    const images = exportRef.current?.querySelectorAll('img') || []
    await Promise.all(Array.from(images).map(img => new Promise(resolve => {
      if (img.complete && img.naturalWidth > 0) return resolve(true)
      const testImg = new Image()
      testImg.onload = () => resolve(true)
      testImg.onerror = () => resolve(false)
      testImg.src = img.src
    })))
  }

  const handleExport = async (type = 'PNG') => {
    if (!exportRef.current || hydratedSections.length === 0) return
    setIsExporting(true)
    setExportType(type)

    try {
      await preloadImages()
      setExportProgress(`Generating ${type}...`)

      const dataUrl = await toPng(exportRef.current, {
        backgroundColor: '#ffffff',
        pixelRatio: 1.5,
        skipFonts: true,
        useCORS: false,
        filter: node => !['SCRIPT', 'STYLE'].includes(node.tagName),
      })

      if (type === 'PDF') {
        const img = new Image()
        img.src = dataUrl
        await new Promise(resolve => { img.onload = resolve; img.onerror = resolve })
        const pdf = new jsPDF('p', 'mm', 'a4')
        const pageWidth = pdf.internal.pageSize.getWidth()
        const pxToMm = px => px * 0.264583
        const ratio = pageWidth / pxToMm(img.width)
        const scaledHeight = pxToMm(img.height) * ratio
        if (scaledHeight <= pdf.internal.pageSize.getHeight()) {
          pdf.addImage(dataUrl, 'PNG', 0, 0, pageWidth, scaledHeight)
        } else {
          let position = 0
          let remainingHeight = scaledHeight
          while (remainingHeight > 0) {
            pdf.addImage(dataUrl, 'PNG', 0, position * -1, pageWidth, scaledHeight)
            remainingHeight -= pdf.internal.pageSize.getHeight()
            position += pdf.internal.pageSize.getHeight()
            if (remainingHeight > 0) pdf.addPage()
          }
        }
        pdf.save('homepage-preview.pdf')
      } else {
        const link = document.createElement('a')
        link.download = 'homepage-preview.png'
        link.href = dataUrl
        link.click()
      }

      setExportProgress(`✅ ${type} Exported!`)
    } catch (e) {
      console.error(`${type} export failed`, e)
      setExportProgress(`❌ ${type} Export Failed`)
    } finally {
      setTimeout(() => {
        setExportProgress('')
        setExportType('')
        setIsExporting(false)
      }, 3000)
    }
  }

  const MobileHeader = () => (
    <div className="fixed top-0 left-0 right-0 z-50 border-b bg-gradient-to-r from-gray-900 via-black to-gray-900 backdrop-blur-xl border-blue-500/20">
      <div className="flex items-center justify-between px-4 py-3">
        <button
          onClick={() => navigate('/builder/editor')}
          className="flex items-center justify-center w-10 h-10 text-blue-400 rounded-full hover:bg-blue-500/10"
        >
          <ArrowLeftIcon className="w-5 h-5" />
        </button>

        <div className="flex flex-col items-center space-y-1 text-center">
          <h1 className="text-sm font-semibold text-white">Export Preview</h1>
          <div className="flex space-x-2">
            <button
              onClick={() => handleExport('PNG')}
              disabled={isExporting}
              className="p-2 text-white bg-green-500 rounded-lg hover:bg-green-600"
            >
              <PhotoIcon className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleExport('PDF')}
              disabled={isExporting}
              className="p-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
            >
              <DocumentArrowDownIcon className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="w-10 h-10"></div>
      </div>
    </div>
  )

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {isMobile && <MobileHeader />}

      <div className={`relative z-10 max-w-6xl px-4 mx-auto sm:px-6 lg:px-8 ${isMobile ? 'pt-20 pb-4' : 'py-8'}`}>
        <div ref={exportRef} className="bg-white shadow-md rounded-xl">
          {hydratedSections.length === 0 ? (
            <div className="p-10 text-center text-gray-500">
              <ExclamationTriangleIcon className="w-8 h-8 mx-auto mb-4" />
              <p>No sections to preview.</p>
            </div>
          ) : (
            hydratedSections.map(section => {
              const Component = section.component
              return Component ? (
                <Component key={section.id} {...section.props} />
              ) : (
                <div key={section.id} className="p-4 text-red-600">
                  ⚠️ Failed to load section: {section.name}
                </div>
              )
            })
          )}
        </div>

        {exportProgress && (
          <div className="mt-4 text-sm text-center text-white">
            {exportProgress}
          </div>
        )}
      </div>
    </div>
  )
}

export default ExportPage
