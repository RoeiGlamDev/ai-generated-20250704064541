export function VideoPlayer({ video }) {
  return (
    <div className="bg-black p-4 rounded shadow-md">
      <video src={video.videoUrl} controls />
      <h2 className="text-lg font-bold mb-2">{video.title}</h2>
    </div>
  );
}