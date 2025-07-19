export default function HallmarkSection() {
  return (
    <section className="bg-white text-center py-12">
      {/* Heading */}
        <h2 className="text-xl md:text-2xl font-serif font-thin leading-relaxed pt-10 font-times-new-roman">
          Every piece is made from 925 Sterling Silver,<br />
          designed in London and hallmarked at the <br />
          Goldsmiths&apos; Assay Office
        </h2>

        {/* Hallmark Icons */}
      <div className="mt-4 flex justify-center gap-2 flex-wrap pb-14">
        <img src="https://www.sergedenimes.com/cdn/shop/files/Hallmark_24.svg?v=1707316242&width=160" alt="Sponsor" className="h-5" />
        
      </div>

      {/* Video Section */}
      <div className="mt-8">
        <video
          className="w-full h-80 object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://www.sergedenimes.com/cdn/shop/videos/c/vp/93170c1e79144e81b325ed9dbae4d7da/93170c1e79144e81b325ed9dbae4d7da.SD-480p-0.9Mbps-39770512.mp4?v=0" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
