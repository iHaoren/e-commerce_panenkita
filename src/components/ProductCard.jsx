export default function ProductCard({
  id,
  name,
  price,
  location,
  image,
  status,
}) {
  return (
    <div className="bg-white border border-emerald-100 rounded-xl overflow-hidden hover:shadow-lg transition cursor-pointer group">
      <div className="h-40 bg-gradient-to-br from-emerald-100 to-amber-100 flex items-center justify-center text-5xl overflow-hidden">
        {image}
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-600 flex items-center gap-1">
          <i className="ri-map-pin-line"></i>
          {location}
        </p>
        <p className="text-sm font-semibold text-gray-800 line-clamp-2 mt-2">
          {name}
        </p>
        <div className="flex justify-between items-center mt-3">
          <p className="font-bold text-emerald-700">
            Rp {price.toLocaleString("id-ID")}
          </p>
          {status && (
            <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded">
              {status}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
