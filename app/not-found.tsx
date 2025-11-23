import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center gap-4 bg-gradient-to-br from-green-950 via-green-900 to-green-950 text-white px-6">
      <h1 className="text-4xl font-bold">Sorry! We couldn’t find the page you&apos;re looking for.</h1>
      <p className="text-lg opacity-80">
        The page you&apos;re looking for does not exist.
      </p>
      <Link
        href="/"
        className="mt-4 px-6 py-2 bg-white text-green-900 font-semibold rounded-lg hover:bg-gray-200 transition"
      >
        Go back home
      </Link>
    </div>
  );
}
