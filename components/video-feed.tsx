'use client'

import { useState, useRef, useEffect } from 'react'
import { VideoCard } from './video-card'

const MOCK_VIDEOS = [
  {
    id: 1,
    creator: 'Alex Studios',
    handle: '@alexstudios',
    avatar: '/person-avatar-1.png',
    title: 'Amazing travel vlog from Tokyo',
    duration: '45s',
    videoUrl: '/video-thumbnail-1.png',
    likes: 12500,
    comments: 340,
    shares: 890,
    isLiked: false,
    isFollowing: false,
    category: 'Travel',
  },
  {
    id: 2,
    creator: 'Tech Guru',
    handle: '@techguru',
    avatar: '/diverse-person-avatar-2.png',
    title: 'Latest smartphone review',
    duration: '60s',
    videoUrl: '/video-thumbnail-2.png',
    likes: 8900,
    comments: 450,
    shares: 1200,
    isLiked: false,
    isFollowing: false,
    category: 'Tech',
  },
  {
    id: 3,
    creator: 'Fitness Coach',
    handle: '@fitnesscode',
    avatar: '/person-avatar-3.png',
    title: '10-minute home workout challenge',
    duration: '35s',
    videoUrl: '/video-thumbnail-abstract-design.png',
    likes: 15600,
    comments: 520,
    shares: 2300,
    isLiked: false,
    isFollowing: false,
    category: 'Fitness',
  },
  {
    id: 4,
    creator: 'Comedy Central',
    handle: '@comedycentral',
    avatar: '/person-avatar-4.png',
    title: 'Hilarious everyday situations',
    duration: '42s',
    videoUrl: '/video-thumbnail-4.png',
    likes: 22100,
    comments: 680,
    shares: 3100,
    isLiked: false,
    isFollowing: false,
    category: 'Comedy',
  },
  {
    id: 5,
    creator: 'Music Producer',
    handle: '@musicprod',
    avatar: '/diverse-person-avatars.png',
    title: 'Producing beats live',
    duration: '55s',
    videoUrl: '/video-thumbnail-abstract-design.png',
    likes: 19800,
    comments: 420,
    shares: 1850,
    isLiked: false,
    isFollowing: false,
    category: 'Music',
  },
]

export function VideoFeed() {
  const [videos, setVideos] = useState(MOCK_VIDEOS)
  const [likedVideos, setLikedVideos] = useState<Set<number>>(new Set())
  const [followingUsers, setFollowingUsers] = useState<Set<string>>(new Set())
  const feedRef = useRef<HTMLDivElement>(null)

  const handleLike = (videoId: number) => {
    const newLiked = new Set(likedVideos)
    if (newLiked.has(videoId)) {
      newLiked.delete(videoId)
    } else {
      newLiked.add(videoId)
    }
    setLikedVideos(newLiked)
  }

  const handleFollow = (handle: string) => {
    const newFollowing = new Set(followingUsers)
    if (newFollowing.has(handle)) {
      newFollowing.delete(handle)
    } else {
      newFollowing.add(handle)
    }
    setFollowingUsers(newFollowing)
  }

  return (
    <div ref={feedRef} className="relative h-screen overflow-y-scroll hide-scrollbar snap-y snap-mandatory bg-background">
      {videos.map((video, index) => (
        <div key={video.id} className="h-screen snap-center flex items-center justify-center overflow-hidden">
          <VideoCard 
            {...video}
            isLiked={likedVideos.has(video.id)}
            isFollowing={followingUsers.has(video.handle)}
            onLike={() => handleLike(video.id)}
            onFollow={() => handleFollow(video.handle)}
          />
        </div>
      ))}
    </div>
  )
}
