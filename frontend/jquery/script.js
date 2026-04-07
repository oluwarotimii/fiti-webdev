// $(selector).action();

$(document).ready(function() {
    $("#clickMe").click(function(){
        $('#output').append('<h6> WELCOME, BUTTON AS BEEN CLICKED!.<h6>');
    })
        $('#resetBtn').click(function() {
        location.reload(); // Reload the page to reset everything
    });
})


// $(document).ready(function() {
//     // Counter for adding items
//     let itemCounter = 3;

//     // Click event handler
//     // $('#clickMe').click(function() {
//     //     $('#output').append('<p>Button clicked! jQuery is working.</p>');
//     // });

//     // Hide/Show/Toggle functionality
//     $('#hideBtn').click(function() {
//         $('#output p').hide('slow');
//     });

//     $('#showBtn').click(function() {
//         $('#output p').show('slow');
//     });

//     $('#toggleBtn').click(function() {
//         $('#output p').toggle('slow');
//     });

//     // Add new items
//     $('#addBtn').click(function() {
//         $('#output').append(`<div class="item">Item ${itemCounter}</div>`);
//         itemCounter++;
//     });

    // Highlight specific words
    $('#highlightBtn').click(function() {
        // Simple highlighting of words containing 'jQuery' or 'click'
        $('#output').contents().filter(function() {
            return this.nodeType === 3; // Text nodes only
        }).each(function() {
            const text = $(this).text();
            if (text.toLowerCase().includes('jquery') || text.toLowerCase().includes('click')) {
                $(this).parent().addClass('highlight');
            }
        });
        
        // Also highlight any text elements that contain these words
        $('#output').find('*').contents().filter(function() {
            return this.nodeType === 3;
        }).each(function() {
            const text = $(this).text();
            if (text.toLowerCase().includes('welcome') || text.toLowerCase().includes('paragraph')) {
                $(this).wrap('<span class="highlight">');
            }
        });
    });

//     // Reset functionality
//     $('#resetBtn').click(function() {
//         location.reload(); // Reload the page to reset everything
//     });

//     // Form submission handling
//     $('#userForm').submit(function(event) {
//         event.preventDefault(); // Prevent default form submission
        
//         // Get form values
//         const name = $('#nameInput').val();
//         const email = $('#emailInput').val();
        
//         // Display the submitted data
//         $('#formData').html(`
//             <h3>Submitted Data:</h3>
//             <p><strong>Name:</strong> ${name}</p>
//             <p><strong>Email:</strong> ${email}</p>
//         `);
        
//         // Clear the form
//         $('#nameInput').val('');
//         $('#emailInput').val('');
//     });

//     // Change background color on double click
//     $('#output').dblclick(function() {
//         $(this).css('background-color', getRandomColor());
//     });

//     // Hover effect
//     $('#output').hover(
//         function() {
//             $(this).css('border-left', '4px solid #ff6b6b');
//         },
//         function() {
//             $(this).css('border-left', '4px solid #4CAF50');
//         }
//     );

//     // Add some initial interactive text
//     $('#output').append('<p>You can double-click this area to change its background color!</p>');
// });

// // Helper function to generate random colors
// function getRandomColor() {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }