'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

interface EmbeddedSheetsProps {
  sheetUrl: string
  title?: string
}

export function EmbeddedSheets({ 
  sheetUrl, 
  title = "Portfolio Data" 
}: EmbeddedSheetsProps) {
  // Extract the sheet ID from the Google Sheets URL
  const getSheetId = (url: string) => {
    const match = url.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/)
    return match ? match[1] : null
  }

  const sheetId = getSheetId(sheetUrl)
  
  if (!sheetId) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="text-center text-muted-foreground">
            <p>Invalid Google Sheets URL</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  // Create the embed URL
  const embedUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/edit?usp=sharing&rm=minimal&widget=true&headers=false`

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="flex items-center gap-2">
          <RefreshCw className="h-5 w-5" />
          {title}
        </CardTitle>
        <Button
          variant="outline"
          size="sm"
          onClick={() => window.open(sheetUrl, '_blank')}
          className="flex items-center gap-2"
        >
          <ExternalLink className="h-4 w-4" />
          Open in Sheets
        </Button>
      </CardHeader>
      <CardContent className="p-0">
        <div className="relative w-full" style={{ height: '600px' }}>
          <iframe
            src={embedUrl}
            width="100%"
            height="100%"
            frameBorder="0"
            className="rounded-b-lg"
            title={title}
            loading="lazy"
          />
        </div>
      </CardContent>
    </Card>
  )
}

// Alternative component for a more compact view
export function CompactEmbeddedSheets({ 
  sheetUrl, 
  title = "Portfolio Overview" 
}: EmbeddedSheetsProps) {
  const getSheetId = (url: string) => {
    const match = url.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/)
    return match ? match[1] : null
  }

  const sheetId = getSheetId(sheetUrl)
  
  if (!sheetId) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="text-center text-muted-foreground">
            <p>Invalid Google Sheets URL</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  const embedUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/edit?usp=sharing&rm=minimal&widget=true&headers=false`

  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="relative w-full" style={{ height: '400px' }}>
          <iframe
            src={embedUrl}
            width="100%"
            height="100%"
            frameBorder="0"
            className="rounded-b-lg"
            title={title}
            loading="lazy"
          />
        </div>
      </CardContent>
    </Card>
  )
}
