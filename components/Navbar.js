import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex justify-between">
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/upload">
        <a>Upload</a>
      </Link>
      <Link href="/dashboard">
        <a>Dashboard</a>
      </Link>
      <Link href="/profile">
        <a>Profile</a>
      </Link>
    </nav>
  );
}