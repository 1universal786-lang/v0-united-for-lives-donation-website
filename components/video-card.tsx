'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Heart, MessageCircle, Share2, User, Volume2, VolumeX } from 'lucide-react'

interface VideoCardProps {
  id: number
  creator: string
  handle: string
  avatar: string
  title: string
  duration: string
  videoUrl: string
  likes: number
  comments: number
  shares: number
  isLiked: boolean
  isFollowing: boolean
  category: string
  onLike: () => void
  onFollow: () => void
}

export function VideoCard({
  creator,
  handle,
  avatar,
  title,
  duration,
  videoUrl,
  likes,
  comments,
  shares,
  isLiked,
  isFollowing,
  category,
  onLike,
  onFollow,
}: VideoCardProps) {
  const [isMuted, setIsMuted] = useState(false)
  const [showComment, setShowComment] = useState(false)

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`
    return num.toString()
  }

  return (
    <div className="w-full h-full max-w-md mx-auto flex items-center justify-center">
      <div className="relative w-full h-full bg-black rounded-2xl overflow-hidden group">
        {/* Video Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80">
          <img 
            src={videoUrl || "/placeholder.svg"} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Duration Badge */}
        <div className="absolute top-4 right-4 z-10 bg-black/50 backdrop-blur px-2 py-1 rounded-full text-xs text-white">
          {duration}
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-cyan-500/80 to-purple-600/80 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-white">
          {category}
        </div>

        {/* Volume Control */}
        <button 
          onClick={() => setIsMuted(!isMuted)}
          className="absolute bottom-4 left-4 z-20 p-2 rounded-full bg-white/20 backdrop-blur hover:bg-white/30 transition-all text-white"
        >
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>

        {/* Right Side Interactions */}
        <div className="absolute bottom-20 right-4 z-20 flex flex-col gap-6">
          {/* Like Button */}
          <button 
            onClick={onLike}
            className={`flex flex-col items-center gap-2 transition-all duration-200 ${
              isLiked ? 'scale-110' : 'hover:scale-110'
            }`}
          >
            <div className={`p-3 rounded-full backdrop-blur transition-all ${
              isLiked 
                ? 'bg-red-500/80 neon-glow-blue' 
                : 'bg-white/20 hover:bg-white/30'
            }`}>
              <Heart className={`w-6 h-6 ${isLiked ? 'fill-white' : 'text-white'}`} />
            </div>
            <span className="text-xs text-white font-semibold">{formatNumber(isLiked ? likes + 1 : likes)}</span>
          </button>

          {/* Comment Button */}
          <button 
            onClick={() => setShowComment(!showComment)}
            className="flex flex-col items-center gap-2 hover:scale-110 transition-all"
          >
            <div className="p-3 rounded-full bg-white/20 backdrop-blur hover:bg-white/30 transition-all">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <span className="text-xs text-white font-semibold">{formatNumber(comments)}</span>
          </button>

          {/* Share Button */}
          <button className="flex flex-col items-center gap-2 hover:scale-110 transition-all">
            <div className="p-3 rounded-full bg-white/20 backdrop-blur hover:bg-white/30 transition-all">
              <Share2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-xs text-white font-semibold">{formatNumber(shares)}</span>
          </button>

          {/* Follow Button */}
          <button 
            onClick={onFollow}
            className={`flex flex-col items-center gap-2 transition-all ${
              isFollowing ? 'scale-110' : 'hover:scale-110'
            }`}
          >
            <div className={`p-3 rounded-full backdrop-blur transition-all ${
              isFollowing
                ? 'bg-gradient-to-r from-cyan-500 to-purple-600 neon-glow-purple'
                : 'bg-white/20 hover:bg-white/30'
            }`}>
              <User className="w-6 h-6 text-white" />
            </div>
          </button>
        </div>

        {/* Bottom Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
          {/* Creator Info */}
          <div className="flex items-center gap-3 mb-4">
            <div className="relative">
              <img 
                src={avatar || "/placeholder.svg"} 
                alt={creator}
                className="w-10 h-10 rounded-full border-2 border-cyan-500/50"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-bold text-sm">{creator}</h3>
              <p className="text-white/60 text-xs">{handle}</p>
            </div>
            <button 
              onClick={onFollow}
              className={`px-4 py-1.5 rounded-full font-medium text-xs transition-all ${
                isFollowing
                  ? 'bg-white/20 text-white'
                  : 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
              }`}
            >
              {isFollowing ? 'Following' : 'Follow'}
            </button>
          </div>

          {/* Video Title */}
          <h2 className="text-white font-semibold text-sm line-clamp-2">{title}</h2>
        </div>

        {/* Comment Box (Optional) */}
        {showComment && (
          <div className="absolute inset-0 bg-black/50 backdrop-blur z-30 flex items-end justify-center p-4 rounded-2xl">
            <div className="w-full bg-card border border-border rounded-2xl p-4 flex gap-2">
              <input 
                type="text"
                placeholder="Add a comment..."
                className="flex-1 bg-background border border-border rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium hover:shadow-lg transition-all text-sm">
                Post
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
