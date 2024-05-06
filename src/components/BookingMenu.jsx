import React, { useState } from 'react';
import './BookingMenu.css';

const initialRooms = [
    {
        id: 1,
        roomNumber: '101',
        bookingNumber: 'ABC123',
        dateBooked: '2024-05-07',
        status: 'Confirmed',
        capacity: 2,
    },
];

const statusOptions = ["Pending", "Confirmed", "Cancelled", "Waiting"];
const capacityOptions = [1, 2, 4, 6, 10];

const BookingSystem = () => {
    const [activeTab, setActiveTab] = useState('createRoom'); // Active tab state
    const [rooms, setRooms] = useState(initialRooms);
    const [newRoom, setNewRoom] = useState({
        roomNumber: '',
        bookingNumber: '',
        dateBooked: '',
        status: '',
        capacity: '',
    });

    const [newBooking, setNewBooking] = useState({
        roomNumber: '',
        bookingNumber: '',
        dateBooked: '',
        status: '',
    });

    const [bookingId, setBookingId] = useState('');

    const handleRoomInputChange = (e) => {
        const { name, value } = e.target;
        setNewRoom((prevRoom) => ({ ...prevRoom, [name]: value }));
    };

    const handleBookingInputChange = (e) => {
        const { name, value } = e.target;
        setNewBooking((prevBooking) => ({ ...prevBooking, [name]: value }));
    };

    const createRoom = () => {
        const updatedRooms = [...rooms, { ...newRoom, id: rooms.length + 1 }];
        setRooms(updatedRooms);
        setNewRoom({
            roomNumber: '',
            bookingNumber: '',
            dateBooked: '',
            status: '',
            capacity: '',
        });
    };

    const bookRoom = () => {
        const updatedRooms = [
            ...rooms,
            {
                ...newBooking,
                id: rooms.length + 1,
            },
        ];
        setRooms(updatedRooms);
        setNewBooking({
            roomNumber: '',
            bookingNumber: '',
            dateBooked: '',
            status: '',
        });
    };

    const cancelBooking = (id) => {
        if (window.confirm("Are you sure you want to cancel this booking?")) {
            setRooms(rooms.filter((room) => room.id !== id));
        }
    };

    const filteredBooking = rooms.find(
        (room) => room.bookingNumber.toLowerCase() === bookingId.toLowerCase()
    );

    return (
        <div className="booking-system">
            <h2>Booking System</h2>
            <div className="tabs">
                <button
                    className={activeTab === 'createRoom' ? 'active' : ''}
                    onClick={() => setActiveTab('createRoom')}
                >
                    Create Room
                </button>
                <button
                    className={activeTab === 'showRooms' ? 'active' : ''}
                    onClick={() => setActiveTab('showRooms')}
                >
                    Show Rooms
                </button>
                <button
                    className={activeTab === 'bookRoom' ? 'active' : ''}
                    onClick={() => setActiveTab('bookRoom')}
                >
                    Book Room
                </button>
                <button
                    className={activeTab === 'checkBooking' ? 'active' : ''}
                    onClick={() => setActiveTab('checkBooking')}
                >
                    Check Your Booking
                </button>
            </div>

            <div className="tab-content">
                {activeTab === 'createRoom' && (
                    <div className="create-room">
                        <h3>Create Room</h3>
                        <input
                            type="text"
                            name="roomNumber"
                            placeholder="Room Number"
                            value={newRoom.roomNumber}
                            onChange={handleRoomInputChange}
                        />
                        <input
                            type="text"
                            name="bookingNumber"
                            placeholder="Booking Number"
                            value={newRoom.bookingNumber}
                            onChange={handleRoomInputChange}
                        />
                        <input
                            type="date"
                            name="dateBooked"
                            value={newRoom.dateBooked}
                            onChange={handleRoomInputChange}
                        />
                        <select
                            className='dropdown'
                            name="status"
                            value={newRoom.status}
                            onChange={handleRoomInputChange}
                        >
                            <option value="" disabled>
                                Select Status
                            </option>
                            {statusOptions.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                        <select
                            className='dropdown'
                            name="capacity"
                            value={newRoom.capacity}
                            onChange={handleRoomInputChange}
                        >
                            <option value="" disabled>
                                Select Capacity
                            </option>
                            {capacityOptions.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                        <button onClick={createRoom}>Create Room</button>
                    </div>
                )}

                {activeTab === 'showRooms' && (
                    <div className="room-table">
                        <h3>All Rooms</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Room Number</th>
                                    <th>Booking Number</th>
                                    <th>Date Booked</th>
                                    <th>Status</th>
                                    <th>Capacity</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rooms.map((room) => (
                                    <tr key={room.id}>
                                        <td>{room.id}</td>
                                        <td>{room.roomNumber}</td>
                                        <td>{room.bookingNumber}</td>
                                        <td>{room.dateBooked}</td>
                                        <td>{room.status}</td>
                                        <td>{room.capacity}</td>
                                        <td>
                                            <button onClick={() => cancelBooking(room.id)}>
                                                Cancel Booking
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {activeTab === 'bookRoom' && (
                    <div className="book-room">
                        <h3>Book Room</h3>
                        <input
                            type="text"
                            name="roomNumber"
                            placeholder="Room Number"
                            value={newBooking.roomNumber}
                            onChange={handleBookingInputChange}
                        />
                        <input
                            type="text"
                            name="bookingNumber"
                            placeholder="Booking Number"
                            value={newBooking.bookingNumber}
                            onChange={handleBookingInputChange}
                        />
                        <input
                            type="date"
                            name="dateBooked"
                            value={newBooking.dateBooked}
                            onChange={handleBookingInputChange}
                        />
                        <select
                            className='dropdown'
                            name="status"
                            value={newBooking.status}
                            onChange={handleBookingInputChange}
                        >
                            <option value="" disabled>
                                Select Status
                            </option>
                            {statusOptions.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                        <button onClick={bookRoom}>Book Room</button>
                    </div>
                )}

                {activeTab === 'checkBooking' && (
                    <div className="check-booking">
                        <h3>Check Your Booking</h3>
                        <input
                            type="text"
                            placeholder="Enter Booking Number"
                            value={bookingId}
                            onChange={(e) => setBookingId(e.target.value)}
                        />
                        {filteredBooking ? (
                            <div className='booking-details-box'>
                                <p>Booking Found:</p>
                                <p>Booking Number: {filteredBooking.bookingNumber}</p>
                                <p>Room Number: {filteredBooking.roomNumber}</p>
                                <p>Date Booked: {filteredBooking.dateBooked}</p>
                                <p>Status: {filteredBooking.status}</p>
                                <p>Capacity: {filteredBooking.capacity}</p>
                            </div>
                        ) : (
                            <p>No booking found with this ID.</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default BookingSystem;
