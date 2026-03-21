"use client";

export default function CartSkeleton() {
  return (
    <div className="mx-auto max-w-7xl p-6 lg:p-12">
      <div className="mb-10 h-10 w-48 animate-pulse rounded-2xl bg-gray-200" />

      <div className="grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex gap-4 rounded-3xl border border-gray-50 bg-white p-5 shadow-sm"
            >
              <div className="h-24 w-24 flex-shrink-0 animate-pulse rounded-2xl bg-gray-200" />

              <div className="flex flex-1 flex-col justify-between py-1">
                <div className="space-y-3">
                  <div className="h-5 w-1/3 animate-pulse rounded-lg bg-gray-200" />
                  <div className="h-3 w-1/4 animate-pulse rounded-lg bg-gray-100" />
                </div>

                <div className="flex items-center justify-between">
                  <div className="h-9 w-24 animate-pulse rounded-xl bg-gray-100" />
                  <div className="h-6 w-16 animate-pulse rounded-lg bg-gray-200" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="h-fit rounded-[32px] bg-gray-50 p-8">
          <div className="mb-8 h-6 w-1/2 animate-pulse rounded-lg bg-gray-200" />

          <div className="space-y-6">
            <div className="flex justify-between">
              <div className="h-4 w-20 animate-pulse rounded bg-gray-200" />
              <div className="h-4 w-12 animate-pulse rounded bg-gray-200" />
            </div>
            <div className="flex justify-between">
              <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
              <div className="h-4 w-10 animate-pulse rounded bg-gray-200" />
            </div>

            <hr className="border-gray-200" />

            <div className="flex justify-between">
              <div className="h-8 w-20 animate-pulse rounded-lg bg-gray-300" />
              <div className="h-8 w-24 animate-pulse rounded-lg bg-gray-300" />
            </div>
          </div>

          <div className="mt-10 h-14 w-full animate-pulse rounded-2xl bg-gray-300/60" />

          <div className="mx-auto mt-6 h-3 w-32 animate-pulse rounded bg-gray-100" />
        </div>
      </div>
    </div>
  );
}
