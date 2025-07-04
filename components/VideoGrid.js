import { Video } from './Video';

export function VideoGrid({ videos }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {videos.map((video) => (
        <Video key={video.id} video={video} />
      ))}
    </div>
  );
}