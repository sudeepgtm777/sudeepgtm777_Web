import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="flex flex-col items-center text-center space-y-6">
        {/* Big 404 */}
        <h1 className="text-7xl font-extrabold tracking-tight text-foreground">
          404
        </h1>

        {/* Message */}
        <p className="text-muted-foreground text-lg sm:text-xl max-w-md">
          Oops! The page you’re looking for doesn’t exist or may have been
          moved.
        </p>

        {/* CTA */}
        <Link
          href="/"
          className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-md transition-colors hover:bg-primary/90"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
