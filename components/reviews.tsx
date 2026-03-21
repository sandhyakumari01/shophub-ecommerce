"use client";

export default function Reviews({ reviews }: any) {
  if (!reviews || reviews.length === 0) {
    return (
      <p className="text-gray-500 text-center mt-6">
        No reviews yet 😔
      </p>
    );
  }

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        ⭐ Customer Reviews
      </h2>

      <div className="space-y-5">
        {reviews.map((review: any, index: number) => {
          const date = new Date(review.date).toLocaleDateString();

          return (
            <div
              key={index}
              className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-md transition-all"
            >

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 font-bold">
                    {review.reviewerName?.charAt(0)}
                  </div>

                  <div>
                    <p className="font-semibold text-gray-800">
                      {review.reviewerName}
                    </p>
                    <p className="text-xs text-gray-400">
                      {date}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-yellow-500 font-semibold">
                  ⭐ {review.rating}
                </div>
              </div>

              <p className="mt-4 text-gray-600 leading-relaxed">
                {review.comment}
              </p>

  
              <p className="mt-3 text-xs text-gray-400">
                {review.reviewerEmail}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}