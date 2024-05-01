function MusicVideo() {
  return (
    <section className="mb-20">
      <p className="text-slate-200 text-5xl font-bold mb-12">MUSIC VIDEO</p>
      <div className="relative w-full h-full aspect-video">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/HAfFfqiYLp0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

export default MusicVideo;
