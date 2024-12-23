export const metadata = {
  title: "403 - Forbidden",
  description: "You don't have permission to view this page.",
};
export default function Custom403() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-6xl font-extrabold text-gray-800">403</h1>
          <p className="text-2xl text-gray-600 mt-4">
            <span className="text-red-500">Oops!</span> Forbidden.
          </p>
          <p className="mt-4 text-lg text-gray-500">
            You don't have permission to view this page.
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
