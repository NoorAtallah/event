import SearchInput from "../Components/SearchInput";
import MainButton from "../Components/Buttons/MainButton";
import { dbURL } from "../FirebaseConfig/Config";
import FetchEvents from "./../Hooks/getEvents.jsx";
function Catalog() {
  return (
    <>
      <div className="bg-prim-dark  pt-12 mx-8 sm:mx-8 lg:mx-12 xl:mx-24">
        <div id="SearchBar" className="grid grid-cols-4">
          <SearchInput />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  sm:gap-4 gap-6">
          <TicketCard />
          <TicketCard />
          <TicketCard />
          <TicketCard />
          <TicketCard />
          <TicketCard />
          <TicketCard />
          <TicketCard />
          <TicketCard />
          <TicketCard />
          <TicketCard />
          <TicketCard />
          <TicketCard />
          <TicketCard />
          <TicketCard />
          <TicketCard />
          <TicketCard />
          <TicketCard />
          <TicketCard />
          <TicketCard />
        </div>
      </div>
    </>
  );
}

function TicketCard() {
  const [Events] = FetchEvents(dbURL);

  return (
    <div
      id="card"
      className="bg-second-dark rounded-2xl flex p-6 flex-col items-center gap-3"
    >
      <div id="img">
        <img
          src="https://i.pinimg.com/564x/89/d9/8d/89d98d4048d9700df7dda17fdb4c073a.jpg"
          alt="Event"
          className="rounded-lg"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div id="content" className="flex flex-col gap-1">
        <h6
          id="name"
          className="self-stretch text-cyan-50 font-medium font-sans "
        >
          RIYADH MASTERS X ESPORTS WORLD CUP
        </h6>
        <p id="date" className="text-sm text-slate-500 font-semibold">
          Tuesday · 22nd January 2024 · 22:00
        </p>
        <p id="price" className="text-sm text-slate-500 font-semibold">
          100 JD
        </p>
      </div>
      <div id="btn" className="flex self-stretch w-full ">
        <MainButton className="flex w-full self-stretch">
          Select Ticket
        </MainButton>
      </div>
    </div>
  );
}

export default Catalog;
