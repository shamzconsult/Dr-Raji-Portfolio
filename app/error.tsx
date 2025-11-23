"use client";

export default function GlobalError({
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html>
      <body className="min-h-screen flex flex-col items-center justify-center text-center gap-4 bg-gradient-to-br from-green-950 via-green-900 to-green-950 text-white px-6">
        <h1 className="text-4xl font-bold">Something went wrong</h1>

        <button
          onClick={() => reset()}
          className="mt-4 px-6 py-2 bg-white text-green-900 font-semibold rounded-lg hover:bg-gray-200 transition"
        >
          Try Again
        </button>
      </body>
    </html>
  );
}
