// src/utils/exportToPdf.js
import { toPng } from 'html-to-image';
import jsPDF from 'jspdf';

export const exportElementToPDF = async (element, fileName = 'export.pdf') => {
  if (!element) return;

  try {
    // Use html-to-image to create PNG
    const dataUrl = await toPng(element, {
      cacheBust: true,
      backgroundColor: '#ffffff', // Ensures background is white (not transparent)
    });

    const img = new Image();
    img.src = dataUrl;

    await new Promise((resolve) => {
      img.onload = resolve;
    });

    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    // Convert pixels to mm (1px = 0.264583 mm)
    const pxToMm = (px) => px * 0.264583;
    const imgProps = {
      width: img.width,
      height: img.height,
    };
    const imgRatio = imgProps.width / imgProps.height;
    const pdfWidth = pageWidth;
    const pdfHeight = pageWidth / imgRatio;

    let y = 0;
    if (pdfHeight > pageHeight) {
      // Image spans across multiple pages
      const totalPages = Math.ceil(pdfHeight / pageHeight);

      for (let i = 0; i < totalPages; i++) {
        if (i > 0) pdf.addPage();
        const sY = (i * pageHeight * imgProps.height) / pdfHeight;
        const sH = (pageHeight * imgProps.height) / pdfHeight;

        pdf.addImage({
          imageData: dataUrl,
          format: 'PNG',
          x: 0,
          y: 0,
          width: pdfWidth,
          height: pdfHeight,
        });
      }
    } else {
      // Single page fit
      pdf.addImage(dataUrl, 'PNG', 0, y, pdfWidth, pdfHeight);
    }

    pdf.save(fileName);
  } catch (error) {
    console.error('PDF Export failed:', error);
  }
};