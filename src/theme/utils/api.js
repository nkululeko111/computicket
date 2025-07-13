const BASE_URL = 'https://computicket.com';

export const fetchEvents = async (params = {}) => {
  try {
    const query = new URLSearchParams(params).toString();
    const response = await fetch(`${BASE_URL}/events?${query}`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching events:', error);
    return [];
  }
};

export const bookTicket = async (eventId, ticketData) => {
  try {
    const response = await fetch(`${BASE_URL}/events/${eventId}/book`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ticketData),
    });
    return await response.json();
  } catch (error) {
    console.error('Error booking ticket:', error);
    return { success: false, error: 'Booking failed' };
  }
};