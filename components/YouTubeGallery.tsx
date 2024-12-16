const YouTubeGallery = () => {
  const videos = [
    { id: 'fsEqum4oIP0', title: 'Video 1' }, // Replace with actual YouTube video IDs
    { id: 'm04ZoAEYW0E', title: 'Video 2' },
    { id: 'Z7fYnChiK-s', title: 'Video 3' },
  ];

  return (
    <div className=" w-[100%] px-6 bg-green-700"> {/* Added bg-green-700 here */}
      <h1 className="text-3xl font-bold text-center mb-8 text-white">Taddabur Al-Quran</h1> {/* Changed text color to white */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div key={video.id} className="relative w-full pb-[56.25%] rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p className="text-center mt-4 text-gray-800 font-medium">{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouTubeGallery;
