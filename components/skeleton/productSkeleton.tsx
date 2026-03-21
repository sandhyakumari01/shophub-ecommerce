export default function ProductCardSkeleton() {
  return (
    <div className="animate-pulse rounded-2xl  bg-white p-4 shadow-md">
      
      <div className="h-56 w-full rounded-xl bg-gray-200"></div>

      <div className="mt-4 h-4 w-3/4 rounded bg-gray-200"></div>

      <div className="mt-2 h-3 w-full rounded bg-gray-200"></div>
      <div className="mt-1 h-3 w-5/6 rounded bg-gray-200"></div>

      <div className="mt-4 flex justify-between items-center">
        <div className="h-5 w-20 rounded bg-gray-200"></div>
        <div className="h-8 w-8 rounded-full bg-gray-200"></div>
      </div>
    </div>
  );
}