// src/services/browserPdfExport.js
export const exportToPDFBrowser = async (element) => {
  try {
    // Use the browser's built-in print functionality
    const printWindow = window.open('', '_blank');
    
    // Get all styles from the current page
    const styles = Array.from(document.styleSheets)
      .map(styleSheet => {
        try {
          return Array.from(styleSheet.cssRules)
            .map(rule => rule.cssText)
            .join('\n');
        } catch (e) {
          // Handle cross-origin stylesheets
          const link = styleSheet.href;
          if (link) {
            return `@import url("${link}");`;
          }
          return '';
        }
      })
      .join('\n');

    // Create complete HTML for printing
    const printHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <title>Homepage Design</title>
          <style>
            ${styles}
            
            /* Print-specific styles */
            @media print {
              * {
                -webkit-print-color-adjust: exact !important;
                color-adjust: exact !important;
              }
              
              body {
                margin: 0;
                padding: 0;
                background: white !important;
              }
              
              .export-container {
                width: 100% !important;
                max-width: none !important;
                margin: 0 !important;
                padding: 0 !important;
                box-shadow: none !important;
                border: none !important;
                border-radius: 0 !important;
              }
              
              /* Hide any elements that shouldn't be printed */
              .no-print {
                display: none !important;
              }
            }
            
            @page {
              margin: 0.5in;
              size: A4;
            }
            
            body {
              font-family: system-ui, -apple-system, sans-serif;
              line-height: 1.5;
              color: #000;
              background: white;
            }
          </style>
        </head>
        <body>
          <div class="export-container">
            ${element.innerHTML}
          </div>
          
          <script>
            window.onload = function() {
              // Auto-print when page loads
              setTimeout(() => {
                window.print();
              }, 1000);
            };
            
            // Close window after printing
            window.onafterprint = function() {
              window.close();
            };
          </script>
        </body>
      </html>
    `;
    
    printWindow.document.write(printHtml);
    printWindow.document.close();
    
    return true;
  } catch (error) {
    console.error('Browser PDF export failed:', error);
    throw error;
  }
};

// Alternative method using canvas and jsPDF (fallback)
export const exportToPDFCanvas = async (element) => {
  try {
    // Dynamic import to avoid loading if not needed
    const html2canvas = (await import('html2canvas')).default;
    const jsPDF = (await import('jspdf')).default;
    
    // Create a clone of the element to avoid modifying the original
    const clone = element.cloneNode(true);
    
    // Apply styles to make it PDF-friendly
    const tempContainer = document.createElement('div');
    tempContainer.style.position = 'absolute';
    tempContainer.style.left = '-9999px';
    tempContainer.style.top = '0';
    tempContainer.style.width = '1200px';
    tempContainer.style.background = 'white';
    tempContainer.appendChild(clone);
    document.body.appendChild(tempContainer);
    
    // Remove problematic classes temporarily
    const elementsWithClasses = [];
    const allElements = clone.querySelectorAll('*');
    
    allElements.forEach((el, index) => {
      const originalClasses = el.className;
      if (originalClasses) {
        elementsWithClasses.push({ element: el, originalClasses });
        // Keep only safe classes
        const safeClasses = originalClasses
          .split(' ')
          .filter(cls => 
            !cls.includes('hover:') && 
            !cls.includes('focus:') && 
            !cls.includes('active:') &&
            !cls.includes('group-hover:')
          )
          .join(' ');
        el.className = safeClasses;
      }
    });
    
    const canvas = await html2canvas(clone, {
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      scale: 2,
      logging: false,
      width: 1200,
      height: clone.scrollHeight
    });
    
    // Clean up
    document.body.removeChild(tempContainer);
    
    const imgData = canvas.toDataURL('image/png', 1.0);
    const pdf = new jsPDF('p', 'mm', 'a4');
    
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    
    const ratio = Math.min(pdfWidth / (imgWidth * 0.264583), pdfHeight / (imgHeight * 0.264583));
    const finalWidth = imgWidth * 0.264583 * ratio;
    const finalHeight = imgHeight * 0.264583 * ratio;
    
    const x = (pdfWidth - finalWidth) / 2;
    const y = (pdfHeight - finalHeight) / 2;
    
    pdf.addImage(imgData, 'PNG', x, y, finalWidth, finalHeight);
    pdf.save('homepage-design.pdf');
    
    return true;
  } catch (error) {
    console.error('Canvas PDF export failed:', error);
    throw error;
  }
};