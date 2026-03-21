"use client";

export default function LoadingCardSkeleton() {
  return (
    <div className="mx-auto max-w-7xl p-6 lg:p-12">
      {/* Page Title Skeleton */}
      <div className="mb-8 h-10 w-48 animate-pulse rounded-lg bg-gray-200" />

      {/* Grid of Skeleton Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <div 
            key={i} 
            className="overflow-hidden rounded-2xl border border-gray-100 bg-white p-4 shadow-sm"
          >
            {/* Image Placeholder */}
            <div className="aspect-square w-full animate-pulse rounded-xl bg-gray-200" />
            
            {/* Title Placeholder */}
            <div className="mt-4 h-5 w-3/4 animate-pulse rounded-md bg-gray-200" />
            
            {/* Description Placeholder */}
            <div className="mt-2 space-y-2">
              <div className="h-3 w-full animate-pulse rounded-md bg-gray-100" />
              <div className="h-3 w-5/6 animate-pulse rounded-md bg-gray-100" />
            </div>

            {/* Price & Action Placeholder */}
            <div className="mt-6 flex items-center justify-between">
              <div className="h-6 w-16 animate-pulse rounded-md bg-gray-200" />
              <div className="h-8 w-8 animate-pulse rounded-full bg-gray-200" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}