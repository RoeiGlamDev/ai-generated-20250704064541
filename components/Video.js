import Link from 'next/link';

export function Video({ video }) {
  return (
    <div className="bg-black p-4 rounded shadow-md">
      <img src={video.thumbnail} alt={video.title} />
      <h2 className="text-lg font-bold mb-2">{video.title}</h2>
      <Link href={`/video/${video.id}`}>
        <a>Watch now</a>
      </Link>
    </div>
  );
}