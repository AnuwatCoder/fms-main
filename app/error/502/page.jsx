export const metadata = {
  title: "502 - Bad Gateway",
  description: "Sorry, the server is temporarily unavailable. Please try again later.",
};
export default function Custom502() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-6xl font-extrabold text-gray-800">502</h1>
          <p className="text-2xl text-gray-600 mt-4">
            <span className="text-red-500">Oops!</span> Bad Gateway.
          </p>
          <p className="mt-4 text-lg text-gray-500">
            Sorry, the server is temporarily unavailable. Please try again
            later.
          </p>
          <a
            href="/"
            className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go back to homepage
          </a>
        </div>
      </div>
    </>
  );
}