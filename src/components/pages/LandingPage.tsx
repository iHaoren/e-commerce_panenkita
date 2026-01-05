import { useState } from "react"
import { Leaf } from 'lucide-react';

export default function LandingPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="font-poppins bg-white">
            {/* navbar */}
            <nav className="bg-white shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* logo */}
                        <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-linear-to-br from-[#2d5016] to-[#8b6f47] rounded-lg items-center justify-center">
                                <Leaf className="text-white"/>
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-[#2d5016]">PanenKita</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}