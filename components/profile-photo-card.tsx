"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"

interface ProfilePhotoCardProps {
  src?: string
  alt?: string
  name?: string
  title?: string
}

export function ProfilePhotoCard({ 
  src = "/screen.png",
  alt = "Muhammad Dawam Amru Bittaqwa",
  name = "Muhammad Dawam Amru Bittaqwa",
  title = "junior Developer"
}: ProfilePhotoCardProps) {
  return (
    <Card className="overflow-hidden max-w-sm mx-auto bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
      <div className="relative">
        {/* Photo Container */}
        <div className="relative h-64 w-full md:h-80 overflow-hidden rounded-lg m-6 mb-0">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover rounded-lg hover:scale-105 transition-transform duration-300"
            priority
          />
        </div>

        {/* Info Section */}
        {(name || title) && (
          <div className="p-6 text-center">
            {name && (
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                {name}
              </h3>
            )}
            {title && (
              <p className="text-sm md:text-base text-primary font-medium">
                {title}
              </p>
            )}
          </div>
        )}
      </div>
    </Card>
  )
}
