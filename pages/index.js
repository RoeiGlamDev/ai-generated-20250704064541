import { useState, useEffect } from 'react';
import { VideoGrid } from '../components/VideoGrid';
import { Video } from '../components/Video';

export default function Home() {
  const [videos, setVideos] = useState([
    {
      id: 1,
      title: 'Video 1',
      thumbnail: 'https://images.pexels.com/videos/2786540/free-video-2786540.jpg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200',
      videoUrl: 'https://videos.pexels.com/video-files/2786540/2786540-hd_1920_1080_25fps.mp4',
    },
    {
      id: 2,
      title: 'Video 2',
      thumbnail: 'https://images.pexels.com/videos/2786540/free-video-2786540.jpg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200',
      videoUrl: 'https://videos.pexels.com/video-files/2786540/2786540-hd_1920_1080_25fps.mp4',
    },
  ]);

  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
      <h1 className="text-3xl font-bold mb-4">GoldTube</h1>
      <VideoGrid videos={videos} />
    </div>
  );
}