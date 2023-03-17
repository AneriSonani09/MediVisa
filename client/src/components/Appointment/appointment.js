import React, { useState, useEffect } from "react";
import axios from "axios";

const AppointmentBooking = () => {
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    axios.get("/api/slots").then((res) => {
      setSlots(res.data);
    });
  }, []);

  const bookSlot = (slotId) => {
    axios
      .post(`/api/slots/book/${slotId}`)
      .then((res) => {
        const updatedSlots = slots.map((slot) => {
          if (slot.id === slotId) {
            return {
              ...slot,
              booked: true,
            };
          }
          return slot;
        });
        setSlots(updatedSlots);
        alert("Slot booked successfully!");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div>
      
      <h2>Available Slots:</h2>
      <ul>
        {slots.map((slot) => (
          <li key={slot.id}>
            <span>{slot.date}</span>
            <span>{slot.time}</span>
            <button disabled={slot.booked} onClick={() => bookSlot(slot.id)}>
              {slot.booked ? "Booked" : "Book Now"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentBooking;
