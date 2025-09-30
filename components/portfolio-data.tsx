'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, DollarSign, PieChart } from "lucide-react"

interface PortfolioData {
  stock: string
  sector: string
  invested: string
  total: string
  percentage: string
  cashBeginning: string
  investedAmount: string
  cashEnding: string
}

interface TeamMember {
  name: string
  cashBeginning: string
  investedAmount: string
  cashEnding: string
}

export function PortfolioData() {
  const [portfolioData, setPortfolioData] = useState<PortfolioData[]>([])
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulated data based on your Google Sheets
    // In a real implementation, you would fetch this from Google Sheets API
    const mockPortfolioData: PortfolioData[] = [
      {
        stock: "Cash at Hand",
        sector: "Cash",
        invested: "Rp1,042,074",
        total: "Rp5,000,000",
        percentage: "21%",
        cashBeginning: "",
        investedAmount: "",
        cashEnding: ""
      },
      {
        stock: "BMRI",
        sector: "Financials",
        invested: "Rp1,756,631",
        total: "",
        percentage: "35%",
        cashBeginning: "",
        investedAmount: "",
        cashEnding: ""
      },
      {
        stock: "TOBA",
        sector: "Energy",
        invested: "Rp236,353",
        total: "",
        percentage: "5%",
        cashBeginning: "",
        investedAmount: "",
        cashEnding: ""
      },
      {
        stock: "TLKM",
        sector: "Telecommunications",
        invested: "Rp932,396",
        total: "",
        percentage: "19%",
        cashBeginning: "",
        investedAmount: "",
        cashEnding: ""
      },
      {
        stock: "TINS",
        sector: "Basic materials",
        invested: "Rp543,814",
        total: "",
        percentage: "11%",
        cashBeginning: "",
        investedAmount: "",
        cashEnding: ""
      },
      {
        stock: "MIKA",
        sector: "Health",
        invested: "Rp488,732",
        total: "",
        percentage: "10%",
        cashBeginning: "",
        investedAmount: "",
        cashEnding: ""
      }
    ]

    const mockTeamMembers: TeamMember[] = [
      {
        name: "Atqiya",
        cashBeginning: "Rp1,000,000",
        investedAmount: "Rp620,930",
        cashEnding: "Rp379,070"
      },
      {
        name: "Ai",
        cashBeginning: "Rp1,000,000",
        investedAmount: "Rp762,142",
        cashEnding: "Rp237,858"
      },
      {
        name: "Jeremy",
        cashBeginning: "Rp1,000,000",
        investedAmount: "Rp881,320",
        cashEnding: "Rp118,680"
      },
      {
        name: "Natali",
        cashBeginning: "Rp1,000,000",
        investedAmount: "Rp818,223",
        cashEnding: "Rp181,777"
      },
      {
        name: "Nindya",
        cashBeginning: "Rp1,000,000",
        investedAmount: "Rp875,311",
        cashEnding: "Rp124,689"
      }
    ]

    setPortfolioData(mockPortfolioData)
    setTeamMembers(mockTeamMembers)
    setLoading(false)
  }, [])

  const getSectorColor = (sector: string) => {
    const colors: { [key: string]: string } = {
      'Financials': 'bg-blue-100 text-blue-800',
      'Energy': 'bg-orange-100 text-orange-800',
      'Telecommunications': 'bg-purple-100 text-purple-800',
      'Basic materials': 'bg-green-100 text-green-800',
      'Health': 'bg-pink-100 text-pink-800',
      'Cash': 'bg-gray-100 text-gray-800'
    }
    return colors[sector] || 'bg-gray-100 text-gray-800'
  }

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="animate-pulse">
              <CardContent className="p-6">
                <div className="h-4 bg-muted rounded w-3/4 mb-2" />
                <div className="h-8 bg-muted rounded w-1/2" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Portfolio Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Portfolio Value</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Rp5,000,000</div>
            <p className="text-xs text-muted-foreground">
              Week 1 Portfolio
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cash Allocation</CardTitle>
            <PieChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">21%</div>
            <p className="text-xs text-muted-foreground">
              Rp1,042,074 in cash
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Top Position</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">BMRI</div>
            <p className="text-xs text-muted-foreground">
              35% allocation
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Portfolio Holdings Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PieChart className="h-5 w-5" />
            Portfolio Holdings - Week 1
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium">Stock</th>
                  <th className="text-left py-3 px-4 font-medium">Sector</th>
                  <th className="text-right py-3 px-4 font-medium">Invested</th>
                  <th className="text-right py-3 px-4 font-medium">Percentage</th>
                </tr>
              </thead>
              <tbody>
                {portfolioData.map((holding, index) => (
                  <tr key={index} className="border-b hover:bg-muted/50 transition-colors">
                    <td className="py-3 px-4">
                      <div className="font-medium">{holding.stock}</div>
                    </td>
                    <td className="py-3 px-4">
                      <Badge className={getSectorColor(holding.sector)}>
                        {holding.sector}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-right font-mono">
                      {holding.invested}
                    </td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <div className="w-16 bg-muted rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full" 
                            style={{ width: holding.percentage }}
                          />
                        </div>
                        <span className="font-medium">{holding.percentage}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Team Members Performance */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Team Members Performance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <h4 className="font-medium mb-3">{member.name}</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Cash Beginning:</span>
                    <span className="font-mono">{member.cashBeginning}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Invested:</span>
                    <span className="font-mono">{member.investedAmount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Cash Ending:</span>
                    <span className="font-mono">{member.cashEnding}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
