
const EventDetails = () => {
  return (
    <div className="min-h-screen bg-[#221B2C] text-white">
      <main className="p-8">
        <div className="bg-card rounded-lg p-8">
          <img
            src="https://placehold.co/1200x400"
            alt="Event Banner"
            className="w-full h-100 object-cover rounded-lg"
          />
        </div>
        <h1 className="text-2xl ml-7   font-bold mb-12">
          RIYADH MASTERS X ESPORTS WORLD CUP
        </h1>
        <div className="flex justify-between  items-start">
          <p className="text-white text-opacity-50 ml-7 mb-8 w-2/3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <div className="bg-[#1a1a2e] text-white p-6 mr-7 h-60 rounded-lg border-2 border-[#ff0055] w-96">
            <div className="flex items-center mb-2">
              <span className="text-zinc-400">Available: 100</span>
              
            </div>
            <hr className="border-zinc-500 mb-4" />
            <div className="flex justify-between items-center">
              <span className="text-2xl font-semibold">100.0 JD</span>
              
              <button className="bg-[#ff0055] text-white py-2 px-4 rounded-lg hover:bg-[#ff0055]/80">
              
                Select Ticket
              </button>
              
            </div>
                <hr className="border-zinc-500 mb-4 mt-9" />
            <div className="flex items-center mb-2">
              <img
                aria-hidden="true"
                alt="calendar-icon"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAMBJREFUSEtjZKAxYKSx+Qx4LfjPy/sf5ADGz5+xqiMkD9aLzweEDCAkj2HBf15efwYGhg4GBgYNMoPuOgMjYwnjp0/bYPpRfPCfl/cJAwODNJmGw7TdY/z8WRmXBeAwpxQgxxm6D+hjAa5UQ8hn2CIdqw+GjwXoXiaVjy0foORcUg0cjQMGUoNsNA4wMvYgSEU8PA8ZGBnlCJU5BOQfMH7+rIiruAZVOJ0MDAzqZFpyiYGRsRJnhUOmoXi10bxVAQDOUr4ZXgKLyQAAAABJRU5ErkJggg=="
                className="mr-2 "
              />
              <span className="text-zinc-400">Start Date : mm/dd/yy</span>
              
            </div>
              <span className="text-zinc-400 ml-8">End Date : mm/dd/yy</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EventDetails;
