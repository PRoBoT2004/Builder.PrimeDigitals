// src/services/perfectScreenshotPDF.js
export const exportPerfectScreenshotPDF = async (element) => {
  try {
    const html2canvas = (await import('html2canvas')).default;
    const jsPDF = (await import('jspdf')).default;
    
    // Step 1: Create a perfect clone environment
    const originalElement = element;
    const originalParent = originalElement.parentNode;
    const originalNextSibling = originalElement.nextSibling;
    
    // Create a temporary container that mimics the exact environment
    const tempContainer = document.createElement('div');
    tempContainer.style.position = 'fixed';
    tempContainer.style.top = '0';
    tempContainer.style.left = '0';
    tempContainer.style.width = '1200px';
    tempContainer.style.height = 'auto';
    tempContainer.style.backgroundColor = '#ffffff';
    tempContainer.style.zIndex = '999999';
    tempContainer.style.overflow = 'visible';
    tempContainer.style.padding = '0';
    tempContainer.style.margin = '0';
    tempContainer.style.border = 'none';
    tempContainer.style.boxShadow = 'none';
    
    // Step 2: Clone the element with all computed styles
    const clone = originalElement.cloneNode(true);
    
    // Step 3: Apply all computed styles to maintain exact appearance
    const applyComputedStyles = (original, cloned) => {
      const originalStyle = window.getComputedStyle(original);
      const clonedStyle = cloned.style;
      
      // Copy all computed styles
      for (let i = 0; i < originalStyle.length; i++) {
        const property = originalStyle[i];
        const value = originalStyle.getPropertyValue(property);
        clonedStyle.setProperty(property, value, 'important');
      }
      
      // Recursively apply to children
      const originalChildren = original.children;
      const clonedChildren = cloned.children;
      
      for (let i = 0; i < originalChildren.length; i++) {
        if (clonedChildren[i]) {
          applyComputedStyles(originalChildren[i], clonedChildren[i]);
        }
      }
    };
    
    // Apply computed styles to maintain exact appearance
    applyComputedStyles(originalElement, clone);
    
    // Step 4: Ensure the clone has the exact same dimensions
    const originalRect = originalElement.getBoundingClientRect();
    clone.style.width = originalRect.width + 'px';
    clone.style.height = 'auto';
    clone.style.minHeight = originalRect.height + 'px';
    clone.style.position = 'relative';
    clone.style.top = '0';
    clone.style.left = '0';
    clone.style.transform = 'none';
    clone.style.margin = '0';
    clone.style.padding = originalElement.style.padding || '24px';
    
    // Step 5: Add clone to temp container and to DOM
    tempContainer.appendChild(clone);
    document.body.appendChild(tempContainer);
    
    // Step 6: Wait for all images and fonts to load
    const images = tempContainer.querySelectorAll('img');
    const imagePromises = Array.from(images).map(img => {
      return new Promise((resolve) => {
        if (img.complete) {
          resolve();
        } else {
          img.onload = resolve;
          img.onerror = resolve;
          // Fallback timeout
          setTimeout(resolve, 3000);
        }
      });
    });
    
    await Promise.all(imagePromises);
    
    // Wait for fonts and any dynamic content
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Step 7: Capture with optimal settings
    const canvas = await html2canvas(tempContainer, {
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      scale: 3, // Higher quality
      logging: false,
      width: 1200,
      height: tempContainer.scrollHeight,
      scrollX: 0,
      scrollY: 0,
      windowWidth: 1200,
      windowHeight: tempContainer.scrollHeight,
      foreignObjectRendering: true,
      removeContainer: false,
      imageTimeout: 0,
      // Capture everything
      ignoreElements: () => false,
      // Better text rendering
      letterRendering: true,
      // Capture all CSS
      onclone: (clonedDoc) => {
        // Ensure all styles are preserved in the cloned document
        const clonedBody = clonedDoc.body;
        clonedBody.style.margin = '0';
        clonedBody.style.padding = '0';
        clonedBody.style.backgroundColor = '#ffffff';
        
        // Force all elements to render backgrounds
        const allElements = clonedDoc.querySelectorAll('*');
        allElements.forEach(el => {
          const computedStyle = window.getComputedStyle(el);
          if (computedStyle.backgroundColor !== 'rgba(0, 0, 0, 0)') {
            el.style.backgroundColor = computedStyle.backgroundColor;
          }
          if (computedStyle.background !== 'rgba(0, 0, 0, 0)') {
            el.style.background = computedStyle.background;
          }
        });
      }
    });
    
    // Step 8: Clean up
    document.body.removeChild(tempContainer);
    
    // Step 9: Create high-quality PDF
    const imgData = canvas.toDataURL('image/png', 1.0);
    
    // Calculate optimal PDF dimensions
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    const imgAspectRatio = imgWidth / imgHeight;
    
    // Use A4 dimensions but optimize for content
    const pdf = new jsPDF({
      orientation: imgAspectRatio > 1 ? 'landscape' : 'portrait',
      unit: 'mm',
      format: 'a4'
    });
    
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    
    // Calculate dimensions to fit perfectly with minimal margins
    const margin = 5; // 5mm margin
    const availableWidth = pdfWidth - (margin * 2);
    const availableHeight = pdfHeight - (margin * 2);
    
    let finalWidth, finalHeight;
    
    if (imgAspectRatio > availableWidth / availableHeight) {
      // Image is wider, fit to width
      finalWidth = availableWidth;
      finalHeight = availableWidth / imgAspectRatio;
    } else {
      // Image is taller, fit to height
      finalHeight = availableHeight;
      finalWidth = availableHeight * imgAspectRatio;
    }
    
    // Center the image
    const x = (pdfWidth - finalWidth) / 2;
    const y = (pdfHeight - finalHeight) / 2;
    
    // Add image to PDF
    pdf.addImage(imgData, 'PNG', x, y, finalWidth, finalHeight, '', 'FAST');
    
    // Step 10: Save with timestamp
    const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, '-');
    pdf.save(`homepage-design-${timestamp}.pdf`);
    
    return true;
  } catch (error) {
    console.error('Perfect screenshot PDF export failed:', error);
    throw error;
  }
};

// Alternative method with even higher quality
export const exportUltraHighQualityPDF = async (element) => {
  try {
    const html2canvas = (await import('html2canvas')).default;
    const jsPDF = (await import('jspdf')).default;
    
    // Temporarily modify the page for optimal capture
    const originalBodyStyle = document.body.style.cssText;
    const originalElementStyle = element.style.cssText;
    
    // Optimize for capture
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.backgroundColor = '#ffffff';
    
    element.style.position = 'relative';
    element.style.zIndex = '1';
    element.style.width = '1200px';
    element.style.margin = '0 auto';
    element.style.backgroundColor = '#ffffff';
    element.style.boxShadow = 'none';
    element.style.border = 'none';
    
    // Scroll to top
    window.scrollTo(0, 0);
    
    // Wait for layout
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const canvas = await html2canvas(element, {
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      scale: 4, // Ultra high quality
      logging: false,
      width: 1200,
      height: element.scrollHeight,
      scrollX: 0,
      scrollY: 0,
      windowWidth: 1200,
      windowHeight: window.innerHeight,
      foreignObjectRendering: true,
      removeContainer: false,
      imageTimeout: 5000,
      letterRendering: true,
      // Capture with maximum quality
      quality: 1.0
    });
    
    // Restore original styles
    document.body.style.cssText = originalBodyStyle;
    element.style.cssText = originalElementStyle;
    
    // Create PDF with ultra-high quality
    const imgData = canvas.toDataURL('image/png', 1.0);
    const pdf = new jsPDF('p', 'mm', 'a4');
    
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    
    // Fit to page with small margins
    const margin = 3;
    const availableWidth = pdfWidth - (margin * 2);
    const availableHeight = pdfHeight - (margin * 2);
    
    const ratio = Math.min(
      availableWidth / (imgWidth * 0.264583),
      availableHeight / (imgHeight * 0.264583)
    );
    
    const finalWidth = imgWidth * 0.264583 * ratio;
    const finalHeight = imgHeight * 0.264583 * ratio;
    
    const x = (pdfWidth - finalWidth) / 2;
    const y = (pdfHeight - finalHeight) / 2;
    
    pdf.addImage(imgData, 'PNG', x, y, finalWidth, finalHeight, '', 'SLOW');
    
    const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, '-');
    pdf.save(`ultra-quality-design-${timestamp}.pdf`);
    
    return true;
  } catch (error) {
    console.error('Ultra high quality PDF export failed:', error);
    throw error;
  }
};