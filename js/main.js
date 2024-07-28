(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });


    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";

    $(window).on("load resize", function () {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
                function () {
                    const $this = $(this);
                    $this.addClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "true");
                    $this.find($dropdownMenu).addClass(showClass);
                },
                function () {
                    const $this = $(this);
                    $this.removeClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "false");
                    $this.find($dropdownMenu).removeClass(showClass);
                }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });




    // script.js


    document.addEventListener('DOMContentLoaded', () => {
        const themeToggle = document.getElementById('theme-toggle');

        // Load the saved theme from localStorage
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'dark') {
            document.body.classList.add('dark-mode');
            themeToggle.checked = true;
        } else {
            document.body.classList.remove('dark-mode');
            themeToggle.checked = false;
        }

        // Toggle theme when the switch is clicked
        themeToggle.addEventListener('change', () => {
            if (themeToggle.checked) {
                document.body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark');
            } else {
                document.body.classList.remove('dark-mode');
                localStorage.setItem('theme', 'light');
            }
        });
    });



    /*======== booking ========*/
    
    document.addEventListener("DOMContentLoaded", function () {
        // Dummy flight and hotel data
        const flights = [
            { id: 1, airline: 'SkyHigh Airlines', description: 'Comfortable seats, Wi-Fi', rating: 4.5, price: 200 },
            { id: 2, airline: 'LuxuryAir', description: 'Luxury seats, Meals included', rating: 4.8, price: 300 },
            { id: 3, airline: 'BudgetFly', description: 'Extra legroom, In-flight entertainment', rating: 4.2, price: 250 },
            { id: 4, airline: 'GlobalWings', description: 'Business class, Lounge access', rating: 4.9, price: 450 },
            { id: 5, airline: 'JetStream', description: 'Economy class, Budget-friendly', rating: 4.0, price: 180 },
            { id: 6, airline: 'EconomyJet', description: 'Budget airline, Basic amenities', rating: 3.8, price: 150 },
            { id: 7, airline: 'FirstClassAir', description: 'First class, Gourmet meals', rating: 5.0, price: 600 },
            { id: 8, airline: 'PremierFly', description: 'Premium economy, Extra baggage', rating: 4.6, price: 280 },
            { id: 9, airline: 'FamilyAir', description: 'Child-friendly, Direct flights', rating: 4.4, price: 320 },
            { id: 10, airline: 'AeroEconomy', description: 'Economy class, In-flight snacks', rating: 3.9, price: 190 }
        ];

        const hotels = [
            { id: 1, name: 'OceanView Resort', description: 'Sea view, Pool', rating: 4.3, price: 100 },
            { id: 2, name: 'MountainPeak Hotel', description: 'Mountain view, Spa', rating: 4.7, price: 150 },
            { id: 3, name: 'CityLights Inn', description: 'City center, Gym', rating: 4.1, price: 120 },
            { id: 4, name: 'LuxuryStay Suites', description: 'Luxury suite, Gym access', rating: 4.9, price: 200 },
            { id: 5, name: 'MetroLodge', description: 'Budget-friendly, Near metro', rating: 4.0, price: 80 },
            { id: 6, name: 'Beachside Paradise', description: 'Beachfront, All-inclusive', rating: 4.8, price: 250 },
            { id: 7, name: 'Boutique Bliss', description: 'Boutique hotel, Unique decor', rating: 4.6, price: 170 },
            { id: 8, name: 'BusinessCentral Hotel', description: 'Business center, Free Wi-Fi', rating: 4.4, price: 140 },
            { id: 9, name: 'GardenView Retreat', description: 'Pet-friendly, Garden view', rating: 4.2, price: 130 },
            { id: 10, name: 'Historic Heritage Inn', description: 'Historic building, Central location', rating: 4.5, price: 160 }
        ];

        // Form validation and submission
        document.getElementById("destinationForm").addEventListener("submit", function (event) {
            event.preventDefault();
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const datetime = document.getElementById("datetime").value;
            const destination = document.getElementById("destinationSelect").value;

            if (name && email && datetime && destination) {
                document.querySelector("#flight-tab").click();
            } else {
                alert("Please fill out all required fields.");
            }
        });

        document.getElementById("flightForm").addEventListener("submit", function (event) {
            event.preventDefault();
            const from = document.getElementById("fromCity").value;
            const to = document.getElementById("toCity").value;
            const flightDate = document.getElementById("flightDate").value;
            const returnDate = document.getElementById("returnDate").value;
            const flightClass = document.getElementById("flightClass").value;
            const passengers = document.getElementById("passengers").value;

            // Validate dates
            if (returnDate && new Date(returnDate) <= new Date(flightDate)) {
                alert("Return date must be after the departure date.");
                return;
            }

            if (from && to && flightDate && flightClass && passengers) {
                const flightResults = flights.map(flight => `
                <tr>
                    <td>${flight.id}</td>
                    <td>${flight.airline}</td>
                    <td>${flight.description}</td>
                    <td>${flight.rating} ★</td>
                    <td>$${flight.price}</td>
                    <td><input type="radio" name="flight" value="${flight.id}"></td>
                </tr>
            `).join('');
                document.getElementById("flightTableBody").innerHTML = flightResults;
                document.getElementById("flightResults").classList.remove("d-none");
            } else {
                alert("Please fill out all required fields.");
            }
        });

        document.getElementById("hotelForm").addEventListener("submit", function (event) {
            event.preventDefault();
            const checkInDate = document.getElementById("checkInDate").value;
            const checkOutDate = document.getElementById("checkOutDate").value;
            const roomType = document.getElementById("roomType").value;
            const numAdults = document.getElementById("numAdultsHotel").value;

            if (checkInDate && checkOutDate && roomType && numAdults) {
                const hotelResults = hotels.map(hotel => `
                <tr>
                    <td>${hotel.id}</td>
                    <td>${hotel.name}</td>
                    <td>${hotel.description}</td>
                    <td>${hotel.rating} ★</td>
                    <td>$${hotel.price}</td>
                    <td><input type="radio" name="hotel" value="${hotel.id}"></td>
                </tr>
            `).join('');
                document.getElementById("hotelTableBody").innerHTML = hotelResults;
                document.getElementById("hotelResults").classList.remove("d-none");
            } else {
                alert("Please fill out all required fields.");
            }
        });

        document.getElementById("paymentForm").addEventListener("submit", function (event) {
            event.preventDefault();
            const selectedFlight = document.querySelector('input[name="flight"]:checked');
            const selectedHotel = document.querySelector('input[name="hotel"]:checked');

            if (selectedFlight && selectedHotel) {
                const flightId = selectedFlight.value;
                const hotelId = selectedHotel.value;
                const flightDetails = flights.find(flight => flight.id == flightId);
                const hotelDetails = hotels.find(hotel => hotel.id == hotelId);

                if (flightDetails && hotelDetails) {
                    // Fetch user-entered details
                    const flightDate = document.getElementById("flightDate").value;
                    const returnDate = document.getElementById("returnDate").value;
                    const flightClass = document.getElementById("flightClass").value;
                    const passengers = document.getElementById("passengers").value;
                    const checkInDate = document.getElementById("checkInDate").value;
                    const checkOutDate = document.getElementById("checkOutDate").value;
                    const roomType = document.getElementById("roomType").value;
                    const numAdults = document.getElementById("numAdultsHotel").value;
                    const numChildren = document.getElementById("numChildrenHotel").value;

                    // Generate a unique booking ID
                    const bookingId = `BK${Date.now()}`;

                    const ticketDetails = `
                        <div class="ticket-header">
                            <h4>Booking Details</h4>
                            <p><strong>Flight:</strong> ${flightDetails.airline}</p>
                            <p><strong>Hotel:</strong> ${hotelDetails.name}</p>
                        </div>
                        <div class="ticket-info">
                            <div>
                                <p><strong>Flight Number:</strong> ${flightDetails.id}</p>
                                <p><strong>Departure Date:</strong> ${flightDate}</p>
                                <p><strong>Return Date:</strong> ${returnDate ? returnDate : 'Not Provided'}</p>
                                <p><strong>Class:</strong> ${flightClass}</p>
                                <p><strong>Passengers:</strong> ${passengers}</p>
                            </div>
                            <div>
                                <p><strong>Check-in Date:</strong> ${checkInDate}</p>
                                <p><strong>Check-out Date:</strong> ${checkOutDate}</p>
                                <p><strong>Room Type:</strong> ${roomType}</p>
                                <p><strong>Number of Adults:</strong> ${numAdults}</p>
                                <p><strong>Number of Children:</strong> ${numChildren}</p>
                            </div>
                        </div>
                        <div class="ticket-footer">
                            <p>Thank you for choosing our service!</p>
                            <div class="barcode">
                                <svg id="barcode"></svg>
                            </div>
                        </div>
                    `;
                    document.getElementById("ticketDetails").innerHTML = ticketDetails;

                    // Generate the barcode
                    JsBarcode("#barcode", bookingId, {
                        format: "CODE128",
                        width: 2,
                        height: 40,
                        displayValue: true
                    });

                    // Save booking data
                    const bookingData = {
                        bookingId: bookingId,
                        destinationForm: {
                            name: document.getElementById("name").value,
                            email: document.getElementById("email").value,
                            datetime: document.getElementById("datetime").value,
                            destination: document.getElementById("destinationSelect").value,
                            message: document.getElementById("message").value
                        },
                        flightForm: {
                            from: document.getElementById("fromCity").value,
                            to: document.getElementById("toCity").value,
                            flightDate,
                            returnDate,
                            flightClass,
                            passengers,
                            selectedFlight: flightDetails
                        },
                        hotelForm: {
                            checkInDate,
                            checkOutDate,
                            roomType,
                            numAdults,
                            numChildren,
                            selectedHotel: hotelDetails
                        },
                        paymentForm: {
                            cardNumber: "**** **** **** 1234",
                            cardholderName: "John Doe",
                            expiryDate: "12/26",
                            billingAddress: {
                                street: "123 Main St",
                                city: "New York",
                                state: "NY",
                                zip: "10001",
                                country: "USA"
                            }
                        }
                    };

                    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
                    bookings.push(bookingData);
                    localStorage.setItem('bookings', JSON.stringify(bookings));

                    alert("Payment successful! Your booking is confirmed.");
                    document.querySelector("#tickets-tab").click();
                } else {
                    alert("Selected flight or hotel details are missing.");
                }
            } else {
                alert("Please select a flight and a hotel.");
            }
        });

        // Optional: Add event listeners for form navigation
        document.querySelector("#confirmFlightSelection").addEventListener("click", function () {
            document.querySelector("#hotel-tab").click();
        });

        document.querySelector("#confirmHotelSelection").addEventListener("click", function () {
            document.querySelector("#payment-tab").click();
        });
    });

    // Stripe integration
    document.addEventListener("DOMContentLoaded", function () {
        const stripe = Stripe('pk_test_51BTUDGJAJfZb9HEBwDg86TN1KNprHjkfipXmEDMb0gSCassK5T3ZfxsAbcgKVmAIXF7oZ6ItlZZbXO6idTHE67IM007EwQ4uN3'); // Replace with your Stripe publishable key
        const elements = stripe.elements();

        // Custom styling can be passed to options when creating an Element.
        const style = {
            base: {
                color: '#fff', // Set text color
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSmoothing: 'antialiased',
                fontSize: '16px',
                '::placeholder': {
                    color: '#888' // Set placeholder color
                }
            },
            invalid: {
                color: '#dc3545', // Red color for errors
                iconColor: '#dc3545'
            }
        };

        // Create an instance of the card Element and apply custom styles
        const cardElement = elements.create('card', { style });
        cardElement.mount('#card-element');

        // Handle form submission and create token
        const form = document.getElementById('paymentForm');
        form.addEventListener('submit', async (event) => {
            event.preventDefault();

            const { token, error } = await stripe.createToken(cardElement);

            if (error) {
                // Display error in your UI
                document.getElementById('card-errors').textContent = error.message;
            } else {
                // Send the token to your server
                const formData = new FormData(form);
                formData.append('stripeToken', token.id);

                fetch('/charge', {
                    method: 'POST',
                    body: formData
                })
                    .then(response => response.json())
                    .then(data => {
                        if (data.success) {
                            alert('Payment successful!');
                            // Redirect or show confirmation message
                        } else {
                            alert('Payment failed: ' + data.error);
                        }
                    });
            }
        });
    });
})(jQuery);

