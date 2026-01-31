import { jsPDF } from 'jspdf'
import { Offering } from '../data/offerings'

// Brand colors
const BRAND_DARK = '#2B1810'
const BRAND_ACCENT = '#8B4513'
const BRAND_SECONDARY = '#D2691E'
const GRAY_600 = '#4B5563'
const GRAY_400 = '#9CA3AF'

export const generateProductPDF = (product: Offering) => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  })

  const pageWidth = doc.internal.pageSize.getWidth()
  const pageHeight = doc.internal.pageSize.getHeight()
  const margin = 20

  // Header background
  doc.setFillColor(BRAND_DARK)
  doc.rect(0, 0, pageWidth, 50, 'F')

  // Company Name/Logo
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(24)
  doc.setFont('helvetica', 'bold')
  doc.text('ETHIO COFFEE', margin, 20)

  doc.setFontSize(10)
  doc.setFont('helvetica', 'normal')
  doc.text('Ethiopian Specialty Coffee', margin, 28)

  // Date
  doc.setFontSize(9)
  const today = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
  doc.text(today, pageWidth - margin, 20, { align: 'right' })

  // Product Name
  doc.setTextColor(BRAND_DARK)
  doc.setFontSize(28)
  doc.setFont('helvetica', 'bold')
  doc.text(product.name, margin, 65)

  // Region
  doc.setFontSize(12)
  doc.setTextColor(GRAY_600)
  doc.setFont('helvetica', 'normal')
  doc.text(product.region, margin, 73)

  let yPos = 85

  // Flavor Notes
  if (product.flavorNotes.length > 0) {
    doc.setFontSize(10)
    doc.setTextColor(BRAND_ACCENT)
    doc.setFont('helvetica', 'bold')
    doc.text('FLAVOR NOTES', margin, yPos)
    
    doc.setFontSize(10)
    doc.setTextColor(GRAY_600)
    doc.setFont('helvetica', 'normal')
    doc.text(product.flavorNotes.join(' • '), margin, yPos + 6)
    yPos += 18
  }

  // Description
  doc.setFontSize(10)
  doc.setTextColor(BRAND_DARK)
  doc.setFont('helvetica', 'bold')
  doc.text('DESCRIPTION', margin, yPos)
  
  doc.setFontSize(10)
  doc.setTextColor(GRAY_600)
  doc.setFont('helvetica', 'normal')
  const descLines = doc.splitTextToSize(product.desc, pageWidth - 2 * margin)
  doc.text(descLines, margin, yPos + 6)
  yPos += 6 + (descLines.length * 5) + 8

  // Pricing Box
  doc.setFillColor(248, 247, 245)
  doc.roundedRect(margin, yPos, pageWidth - 2 * margin, 28, 3, 3, 'F')
  
  doc.setFontSize(22)
  doc.setTextColor(BRAND_DARK)
  doc.setFont('helvetica', 'bold')
  doc.text(`$${product.pricing.fobPricePerLb.toFixed(2)}`, margin + 5, yPos + 12)
  
  doc.setFontSize(10)
  doc.setTextColor(GRAY_600)
  doc.setFont('helvetica', 'normal')
  doc.text('USD per pound', margin + 5, yPos + 19)
  
  doc.setFontSize(9)
  doc.text(`$${product.pricing.fobPricePerKg.toFixed(2)} USD/kg • FOB Ethiopia`, margin + 5, yPos + 25)
  
  yPos += 36

  // Availability
  const availStatus = product.isSoldOut ? 'SOLD OUT' : 'IN STOCK'
  const availColor: [number, number, number] = product.isSoldOut ? [185, 28, 28] : [21, 128, 61]
  
  doc.setFillColor(availColor[0], availColor[1], availColor[2])
  doc.roundedRect(margin, yPos, 30, 7, 2, 2, 'F')
  doc.setFontSize(9)
  doc.setTextColor(255, 255, 255)
  doc.setFont('helvetica', 'bold')
  doc.text(availStatus, margin + 15, yPos + 5, { align: 'center' })
  
  doc.setFontSize(9)
  doc.setTextColor(GRAY_600)
  doc.setFont('helvetica', 'normal')
  const availText = product.isSoldOut 
    ? 'Now accepting inquiries for 2026 crop' 
    : product.availableBags !== null 
      ? `${product.availableBags} bags available • ${product.bagSize}` 
      : `Contact for availability • ${product.bagSize}`
  doc.text(availText, margin + 35, yPos + 5)
  
  yPos += 15

  // Technical Specifications
  doc.setFontSize(12)
  doc.setTextColor(BRAND_DARK)
  doc.setFont('helvetica', 'bold')
  doc.text('TECHNICAL SPECIFICATIONS', margin, yPos)
  yPos += 8

  const specs = [
    { label: 'Grade', value: product.specifications.grade },
    { label: 'Processing Method', value: product.specifications.processingMethod },
    { label: 'Crop Year', value: product.specifications.cropYear },
    { label: 'Cup Score', value: product.specifications.cupScore },
    { label: 'Harvest Period', value: product.specifications.harvestPeriod },
    { label: 'Washing Station', value: product.specifications.washingStation },
    { label: 'Mill Name', value: product.specifications.millName },
    { label: 'Drying Method', value: product.specifications.dryingMethod },
    { label: 'Fermentation Time', value: product.specifications.fermentationTime },
    { label: 'Moisture Content', value: product.specifications.moisture },
    { label: 'Water Activity', value: product.specifications.waterActivity },
    { label: 'Density', value: product.specifications.density },
    { label: 'Defect Count', value: product.specifications.defectCount },
    { label: 'Altitude', value: product.altitude },
    { label: 'Variety', value: product.variety },
    { label: 'Producer', value: product.producer },
    { label: 'Farm/Coop ID', value: product.specifications.farmCoopId },
    { label: 'ICO Number', value: product.specifications.icoNumber },
    { label: 'Lot Number', value: product.lotNumber },
    { label: 'Warehouse Location', value: product.warehouseLocation },
  ]

  doc.setFontSize(9)
  let col1X = margin
  let col2X = pageWidth / 2 + 5
  let specYPos = yPos

  specs.filter(spec => spec.value).forEach((spec, index) => {
    const isLeftColumn = index % 2 === 0
    const xPos = isLeftColumn ? col1X : col2X
    
    if (!isLeftColumn) {
      specYPos = yPos + Math.floor(index / 2) * 7
    } else {
      specYPos = yPos + Math.floor(index / 2) * 7
    }

    // Check if we need a new page
    if (specYPos > pageHeight - 40) {
      doc.addPage()
      yPos = 20
      specYPos = yPos
    }

    doc.setTextColor(BRAND_DARK)
    doc.setFont('helvetica', 'bold')
    doc.text(`${spec.label}:`, xPos, specYPos)
    
    doc.setTextColor(GRAY_600)
    doc.setFont('helvetica', 'normal')
    const labelWidth = doc.getTextWidth(`${spec.label}:`) + 2
    const valueLines = doc.splitTextToSize(spec.value || '', (pageWidth / 2) - margin - labelWidth - 10)
    doc.text(valueLines, xPos + labelWidth, specYPos)
  })

  yPos = specYPos + 15

  // Cupping Notes if available
  if (product.specifications.cuppingNotes && yPos < pageHeight - 50) {
    doc.setFontSize(10)
    doc.setTextColor(BRAND_DARK)
    doc.setFont('helvetica', 'bold')
    doc.text('CUPPING NOTES', margin, yPos)
    
    doc.setFontSize(9)
    doc.setTextColor(GRAY_600)
    doc.setFont('helvetica', 'normal')
    const cuppingLines = doc.splitTextToSize(product.specifications.cuppingNotes, pageWidth - 2 * margin)
    doc.text(cuppingLines, margin, yPos + 6)
    yPos += 6 + (cuppingLines.length * 5) + 10
  }

  // Footer
  doc.setDrawColor(GRAY_400)
  doc.line(margin, pageHeight - 25, pageWidth - margin, pageHeight - 25)
  
  doc.setFontSize(8)
  doc.setTextColor(GRAY_600)
  doc.setFont('helvetica', 'normal')
  doc.text('ETHIO COFFEE - Ethiopian Specialty Coffee', margin, pageHeight - 18)
  doc.text('Contact: info@ETHIO COFFEE.com • www.ETHIO COFFEE.com', margin, pageHeight - 13)
  doc.text(`Generated on ${today}`, pageWidth - margin, pageHeight - 18, { align: 'right' })

  // Save the PDF
  const fileName = `${product.name.replace(/\s+/g, '_')}_Product_Sheet.pdf`
  doc.save(fileName)
}

export const generateMultipleProductsPDF = (products: Offering[], title: string = 'Product Catalog') => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  })

  const pageWidth = doc.internal.pageSize.getWidth()
  const pageHeight = doc.internal.pageSize.getHeight()
  const margin = 20

  // Header background
  doc.setFillColor(BRAND_DARK)
  doc.rect(0, 0, pageWidth, 45, 'F')

  // Company Name/Logo
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(24)
  doc.setFont('helvetica', 'bold')
  doc.text('ETHIO COFFEE', margin, 18)

  doc.setFontSize(10)
  doc.setFont('helvetica', 'normal')
  doc.text('Ethiopian Specialty Coffee', margin, 26)

  // Date
  doc.setFontSize(9)
  const today = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
  doc.text(today, pageWidth - margin, 18, { align: 'right' })

  // Title
  doc.setFontSize(16)
  doc.setFont('helvetica', 'bold')
  doc.text(title, margin, 38)

  let yPos = 55

  products.forEach((product, index) => {
    // Check if we need a new page
    if (yPos > pageHeight - 80) {
      doc.addPage()
      yPos = 20
    }

    // Product box with border
    doc.setDrawColor(BRAND_ACCENT)
    doc.setLineWidth(0.5)
    doc.roundedRect(margin, yPos, pageWidth - 2 * margin, 65, 2, 2, 'S')

    // Product name
    doc.setFontSize(16)
    doc.setTextColor(BRAND_DARK)
    doc.setFont('helvetica', 'bold')
    doc.text(product.name, margin + 5, yPos + 8)

    // Region
    doc.setFontSize(9)
    doc.setTextColor(GRAY_600)
    doc.setFont('helvetica', 'normal')
    doc.text(product.region, margin + 5, yPos + 14)

    // Flavor notes
    if (product.flavorNotes.length > 0) {
      doc.setFontSize(8)
      doc.setTextColor(BRAND_ACCENT)
      const flavors = product.flavorNotes.slice(0, 5).join(' • ')
      doc.text(flavors, margin + 5, yPos + 20)
    }

    // Key specs in two columns
    const leftColX = margin + 5
    const rightColX = pageWidth / 2 + 5
    let infoY = yPos + 28

    doc.setFontSize(8)
    
    // Left column
    doc.setTextColor(BRAND_DARK)
    doc.setFont('helvetica', 'bold')
    doc.text('Processing:', leftColX, infoY)
    doc.setTextColor(GRAY_600)
    doc.setFont('helvetica', 'normal')
    doc.text(product.specifications.processingMethod || 'N/A', leftColX + 20, infoY)

    infoY += 5
    doc.setTextColor(BRAND_DARK)
    doc.setFont('helvetica', 'bold')
    doc.text('Grade:', leftColX, infoY)
    doc.setTextColor(GRAY_600)
    doc.setFont('helvetica', 'normal')
    doc.text(product.specifications.grade || 'N/A', leftColX + 20, infoY)

    infoY += 5
    doc.setTextColor(BRAND_DARK)
    doc.setFont('helvetica', 'bold')
    doc.text('Cup Score:', leftColX, infoY)
    doc.setTextColor(GRAY_600)
    doc.setFont('helvetica', 'normal')
    doc.text(product.specifications.cupScore || 'N/A', leftColX + 20, infoY)

    infoY += 5
    doc.setTextColor(BRAND_DARK)
    doc.setFont('helvetica', 'bold')
    doc.text('Altitude:', leftColX, infoY)
    doc.setTextColor(GRAY_600)
    doc.setFont('helvetica', 'normal')
    doc.text(product.altitude || 'N/A', leftColX + 20, infoY)

    // Right column
    infoY = yPos + 28
    
    doc.setTextColor(BRAND_DARK)
    doc.setFont('helvetica', 'bold')
    doc.text('Price/lb:', rightColX, infoY)
    doc.setTextColor(BRAND_ACCENT)
    doc.setFont('helvetica', 'bold')
    doc.text(`$${product.pricing.fobPricePerLb.toFixed(2)}`, rightColX + 15, infoY)

    infoY += 5
    doc.setTextColor(BRAND_DARK)
    doc.setFont('helvetica', 'bold')
    doc.text('Crop Year:', rightColX, infoY)
    doc.setTextColor(GRAY_600)
    doc.setFont('helvetica', 'normal')
    doc.text(product.specifications.cropYear || 'N/A', rightColX + 18, infoY)

    infoY += 5
    doc.setTextColor(BRAND_DARK)
    doc.setFont('helvetica', 'bold')
    doc.text('Status:', rightColX, infoY)
    doc.setTextColor(product.isSoldOut ? '#B91C1C' : '#15803D')
    doc.setFont('helvetica', 'bold')
    doc.text(product.isSoldOut ? 'SOLD OUT' : 'IN STOCK', rightColX + 14, infoY)

    infoY += 5
    doc.setTextColor(BRAND_DARK)
    doc.setFont('helvetica', 'bold')
    doc.text('Lot #:', rightColX, infoY)
    doc.setTextColor(GRAY_600)
    doc.setFont('helvetica', 'normal')
    doc.text(product.lotNumber || 'N/A', rightColX + 12, infoY)

    // Description
    doc.setFontSize(8)
    doc.setTextColor(GRAY_600)
    doc.setFont('helvetica', 'normal')
    const descLines = doc.splitTextToSize(product.desc, pageWidth - 2 * margin - 10)
    doc.text(descLines.slice(0, 2), margin + 5, yPos + 52) // Limit to 2 lines

    yPos += 72
  })

  // Footer on last page
  const currentPage = doc.getCurrentPageInfo().pageNumber
  doc.setPage(currentPage)
  
  doc.setDrawColor(GRAY_400)
  doc.line(margin, pageHeight - 25, pageWidth - margin, pageHeight - 25)
  
  doc.setFontSize(8)
  doc.setTextColor(GRAY_600)
  doc.setFont('helvetica', 'normal')
  doc.text('ETHIO COFFEE - Ethiopian Specialty Coffee', margin, pageHeight - 18)
  doc.text('Contact: info@ETHIO COFFEE.com • www.ETHIO COFFEE.com', margin, pageHeight - 13)
  doc.text(`Generated on ${today}`, pageWidth - margin, pageHeight - 18, { align: 'right' })

  // Save the PDF
  const fileName = `${title.replace(/\s+/g, '_')}_${today.replace(/\s+/g, '_')}.pdf`
  doc.save(fileName)
}
