import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingRow from "../BookingRow/BookingRow";
import axios from "axios";

const Bookings = () => {
  const { user } = useContext(AuthContext);

  const [bookings, setBookings] = useState([]);
  // const url = `http://localhost:5000/bookings?email=car@gari.com`;
   const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    // withCredentials true na korle server e cookie ta pabo na..ekhane disi karon bookings ekta private route
    axios.get(url, { withCredentials: true }).then((res) => {
      setBookings(res.data);
    });

    //========= fetch er kaj same vabe axios diye upore korsi
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => setBookings(data));
  }, [url]);

  const handleDelete = (id) => {
    const proceed = confirm("want to delete??");
    if (proceed) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted succesfully!");

            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
          }
        });
    }
  };

  const handleBookingConfirm = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        // ekhane amra db te update hole client side e ki ar kivabe show korbo sei kaj korbo
        console.log(data);

        if (data.modifiedCount > 0) {
          //update status
          const remaining = bookings.filter((booking) => booking._id !== id);
          const updated = bookings.find((booking) => booking._id === id);
          // status ta add kore nilam updated por
          updated.status = "confirm";
          const newBooking = [updated, ...remaining];
          setBookings(newBooking);
        }
      });
  };

  console.log(bookings);
  return (
    <div>
      <h3 className="text-3xl text-rose-600 text-center font-semibold my-7 ">
        Your Booking :{bookings.length}
      </h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>image</th>
              <th>service</th>
              <th>date</th>
              <th>price</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {bookings.map((booking) => (
              <BookingRow
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleBookingConfirm={handleBookingConfirm}></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
