import { Video } from './Video';

export function VideoList({ videos }) {
  return (
    <ul>
      {videos.map((video) => (
        <li key={video.id}>
          <Video video={video} />
        </li>
      ))}
    </ul>
  );
}