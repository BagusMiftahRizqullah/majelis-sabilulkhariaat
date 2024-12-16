import React, { useState, useEffect } from 'react';

const YouTubeGallery = () => {
  const [videos, setVideos] = useState([]);
  const apiKey = 'AIzaSyDaYObwoEZXXnKuGTEg3hV67p0Sbo4dcAw'; // Replace with your actual API key
  const channelId = 'UC3UJLpCAbZ6L6bJuhj5SAnQ'; // Replace with the channel ID of "Sabilul Khariaat"

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=6`
        );
        const data = await response.json();
        setVideos(data.items);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, [apiKey, channelId]);

  return (
    <div className="w-[100%] px-6 bg-green-700">
      <h1 className="text-3xl font-bold text-center mb-8 text-white">Taddabur Al-Quran</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos?.map((video, index) => {
          console.log("dataaaa",video);
          return (
            <div key={index} className="relative w-full pb-[56.25%] rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${video['id']['videoId']}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p className="text-center mt-4 text-gray-800 font-medium">{video['snippet']['title']}</p>
          </div>
          )
         
})}
      </div>
    </div>
  );
};

export default YouTubeGallery;
