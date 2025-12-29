
const Hero = () => {
  return (
    <section className="mt-28 md:mt-32 px-4 container mx-auto">
      <div className="bg-emerald-600 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden flex items-center min-h-64">
        <div className="z-10 max-w-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Penuhi Dapurmu <br/> Langsung dari Sawah</h2>
          <p className="mb-6 text-purple-100">Dapatkan kualitas terbaik dengan harga petani hanya di PanenKita.</p>
          <button className="bg-white text-emerald-600 font-bold px-6 py-2 rounded-lg hover:bg-gray-100">
            Cek Sekarang
          </button>
        </div>
        
        {/* Dekorasi Ikon */}
        <div className="absolute right-10 bottom-0 text-9xl opacity-70 hidden md:block">
          🌽
        </div>
      </div>
    </section>
  );
};

export default Hero;