// src/services/exactPdfExport.js
export const exportExactPDF = async (element) => {
  try {
    // Create an exact clone in a new window
    const newWindow = window.open('', '_blank', 'width=1200,height=800');
    
    // Get ALL styles from the current document
    const allStyles = [];
    
    // Get inline styles
    const styleElements = document.querySelectorAll('style');
    styleElements.forEach(style => {
      allStyles.push(style.innerHTML);
    });
    
    // Get linked stylesheets content
    const linkElements = document.querySelectorAll('link[rel="stylesheet"]');
    const stylesheetPromises = Array.from(linkElements).map(async (link) => {
      try {
        const response = await fetch(link.href);
        const css = await response.text();
        return css;
      } catch (e) {
        return `@import url("${link.href}");`;
      }
    });
    
    const stylesheetContents = await Promise.all(stylesheetPromises);
    allStyles.push(...stylesheetContents);
    
    // Force all backgrounds and colors to be visible
    const forceBackgroundsCSS = `
      /* Force all backgrounds to be visible */
      * {
        -webkit-print-color-adjust: exact !important;
        color-adjust: exact !important;
        print-color-adjust: exact !important;
      }
      
      /* Override any print media queries that hide backgrounds */
      @media print {
        * {
          -webkit-print-color-adjust: exact !important;
          color-adjust: exact !important;
          print-color-adjust: exact !important;
        }
        
        /* Force specific background colors */
        .bg-black, [class*="bg-black"] { background-color: #000000 !important; }
        .bg-white, [class*="bg-white"] { background-color: #ffffff !important; }
        .bg-gray-50, [class*="bg-gray-50"] { background-color: #f9fafb !important; }
        .bg-gray-100, [class*="bg-gray-100"] { background-color: #f3f4f6 !important; }
        .bg-gray-900, [class*="bg-gray-900"] { background-color: #111827 !important; }
        .bg-blue-600, [class*="bg-blue-600"] { background-color: #2563eb !important; }
        
        /* Force gradients */
        [class*="bg-gradient"] {
          background-image: inherit !important;
        }
        
        /* Force all elements with background colors */
        [style*="background-color"] {
          background-color: inherit !important;
        }
        
        [style*="background:"] {
          background: inherit !important;
        }
      }
      
      body {
        margin: 0;
        padding: 20px;
        background: white !important;
        -webkit-print-color-adjust: exact !important;
        color-adjust: exact !important;
      }
    `;
    
    // Create exact HTML replica
    const exactHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Exact Export</title>
          
          <!-- Include Tailwind if you're using it -->
          <script src="https://cdn.tailwindcss.com"></script>
          
          <style>
            ${allStyles.join('\n')}
            ${forceBackgroundsCSS}
          </style>
        </head>
        <body>
          <div class="exact-export-container">
            ${element.innerHTML}
          </div>
          
          <script>
            window.onload = function() {
              setTimeout(() => {
                // Show detailed instructions
                const instructions = \`
IMPORTANT: To see backgrounds in PDF:

1. In the print dialog, click "More settings"
2. Check "Background graphics" ✓
3. Set margins to "None" or "Minimum"
4. Choose "Save as PDF"
5. Click Save

If backgrounds still don't show, try the Screenshot method instead.
                \`;
                alert(instructions);
                window.print();
              }, 2000);
            };
            
            window.onafterprint = function() {
              window.close();
            };
          </script>
        </body>
      </html>
    `;
    
    newWindow.document.write(exactHtml);
    newWindow.document.close();
    
    return true;
  } catch (error) {
    console.error('Exact PDF export failed:', error);
    throw error;
  }
};

// Improved Screenshot method with better background handling
export const exportScreenshotPDF = async (element) => {
  try {
    const html2canvas = (await import('html2canvas')).default;
    const jsPDF = (await import('jspdf')).default;
    
    // Create a temporary container with white background
    const tempContainer = document.createElement('div');
    tempContainer.style.position = 'fixed';
    tempContainer.style.top = '0';
    tempContainer.style.left = '0';
    tempContainer.style.width = '1200px';
    tempContainer.style.background = 'white';
    tempContainer.style.zIndex = '10000';
    tempContainer.style.padding = '20px';
    tempContainer.style.boxSizing = 'border-box';
    
    // Clone the element
    const clone = element.cloneNode(true);
    tempContainer.appendChild(clone);
    document.body.appendChild(tempContainer);
    
    // Wait for rendering
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const canvas = await html2canvas(tempContainer, {
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      scale: 2,
      logging: false,
      width: 1200,
      height: tempContainer.scrollHeight,
      scrollX: 0,
      scrollY: 0,
      // Force background rendering
      foreignObjectRendering: true,
      removeContainer: false
    });
    
    // Clean up
    document.body.removeChild(tempContainer);
    
    const imgData = canvas.toDataURL('image/png', 1.0);
    const pdf = new jsPDF('p', 'mm', 'a4');
    
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    
    // Calculate to fit page
    const ratio = Math.min(
      (pdfWidth - 10) / (imgWidth * 0.264583), 
      (pdfHeight - 10) / (imgHeight * 0.264583)
    );
    
    const finalWidth = imgWidth * 0.264583 * ratio;
    const finalHeight = imgHeight * 0.264583 * ratio;
    
    const x = (pdfWidth - finalWidth) / 2;
    const y = (pdfHeight - finalHeight) / 2;
    
    pdf.addImage(imgData, 'PNG', x, y, finalWidth, finalHeight);
    pdf.save('homepage-design.pdf');
    
    return true;
  } catch (error) {
    console.error('Screenshot PDF export failed:', error);
    throw error;
  }
};

// New method: Direct download with all backgrounds forced
export const exportWithForcedBackgrounds = async (element) => {
  try {
    // Create a full-page capture
    const tempDiv = document.createElement('div');
    tempDiv.style.position = 'absolute';
    tempDiv.style.top = '-10000px';
    tempDiv.style.left = '0';
    tempDiv.style.width = '1200px';
    tempDiv.style.background = 'white';
    tempDiv.style.padding = '20px';
    
    // Clone and force all backgrounds
    const clone = element.cloneNode(true);
    
    // Force backgrounds on all elements
    const allElements = clone.querySelectorAll('*');
    allElements.forEach(el => {
      const computedStyle = window.getComputedStyle(el);
      if (computedStyle.backgroundColor && computedStyle.backgroundColor !== 'rgba(0, 0, 0, 0)') {
        el.style.backgroundColor = computedStyle.backgroundColor;
      }
      if (computedStyle.background && computedStyle.background !== 'rgba(0, 0, 0, 0)') {
        el.style.background = computedStyle.background;
      }
      if (computedStyle.color) {
        el.style.color = computedStyle.color;
      }
    });
    
    tempDiv.appendChild(clone);
    document.body.appendChild(tempDiv);
    
    // Use html2canvas
    const html2canvas = (await import('html2canvas')).default;
    const jsPDF = (await import('jspdf')).default;
    
    const canvas = await html2canvas(tempDiv, {
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      scale: 2,
      logging: false,
      removeContainer: false,
      foreignObjectRendering: true
    });
    
    document.body.removeChild(tempDiv);
    
    const imgData = canvas.toDataURL('image/png', 1.0);
    const pdf = new jsPDF('p', 'mm', 'a4');
    
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    
    const ratio = Math.min(
      (pdfWidth - 10) / (imgWidth * 0.264583), 
      (pdfHeight - 10) / (imgHeight * 0.264583)
    );
    
    const finalWidth = imgWidth * 0.264583 * ratio;
    const finalHeight = imgHeight * 0.264583 * ratio;
    
    const x = (pdfWidth - finalWidth) / 2;
    const y = (pdfHeight - finalHeight) / 2;
    
    pdf.addImage(imgData, 'PNG', x, y, finalWidth, finalHeight);
    pdf.save('homepage-design.pdf');
    
    return true;
  } catch (error) {
    console.error('Forced backgrounds export failed:', error);
    throw error;
  }
};