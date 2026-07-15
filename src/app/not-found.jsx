import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-bold">404</h1>

      <h2 className="mt-4 text-2xl font-semibold">
        Page Not Found
      </h2>

      <p className="mt-2 text-gray-500">
        The page you are looking for does not exist.
      </p>

      <Link
        href="/home"
        className="mt-6 rounded-lg bg-blue-600 px-5 py-3 text-white"
      >
        Back to Home
      </Link>
    </main>
  );
}