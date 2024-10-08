import React from 'react'
import { Headphones } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-6 flex items-center">
        <Headphones className="w-8 h-8 text-blue-600 mr-4" />
        <h1 className="text-2xl font-bold text-gray-800">Contact Center Dashboard</h1>
      </div>
    </header>
  )
}

export default Header