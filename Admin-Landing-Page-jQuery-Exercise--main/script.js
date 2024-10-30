// $(document).ready(function() {
//     // Klik tombol menu untuk toggle sidebar
//     $('.menu-icon').click(function() {
//         if ($('.sidebar').css('left') == '0px') {
//             $('.sidebar').animate({ left: '-220px' }, 300); // Sembunyikan
//             $('.main-content').animate({ marginLeft: '0' }, 300);
//         } else {
//             $('.sidebar').animate({ left: '0px' }, 300); // Munculkan
//             $('.main-content').animate({ marginLeft: '220px' }, 300);
//         }
//     });
// });


$(document).ready(function() {
    // Efek Show/Hide untuk Sidebar
    $('.card').css('opacity', 0); // Atur opacity awal menjadi 0
    $('.card').each(function(index) {
        $(this).delay(index * 200).animate({
            opacity: 1,
            top: "0px"
        }, 800); // Durasi 800 ms untuk efek slide-up
    });
    $('.menu-icon').click(function() {
        $('.sidebar').toggleClass('active'); // Toggle visibilitas sidebar
        $('body').toggleClass('sidebar-terlihat'); // Toggle penyesuaian layout
    });

    $('.charts-container').css('opacity', 0); // Atur opacity awal menjadi 0
    $('.charts-container').each(function(index) {
        $(this).delay(index * 400).animate({
            opacity: 1,
            top: "0px"
        }, 1000); // Durasi 800 ms untuk efek slide-up
    });

    // Efek Fade In untuk card saat halaman di-load
    // $('.card').hide().fadeIn(2000);

    // Efek Slide Toggle untuk dropdown menu
    $('.dropdown').click(function() {
        $(this).find('.dropdown-content').slideToggle('fast');
        $('.dropdown-content').slideUp('fast');
    });

    // Efek Fade In/Fade Out untuk chart dan budget container
    // $('.chart, .budget-container').hover(
    //     function() {
    //         $(this).fadeTo(300, 0.7);  // Fade out saat hover
    //     },
    //     function() {
    //         $(this).fadeTo(300, 1);  // Fade in saat hover berakhir
    //     }
    // );

    // Efek animasi sederhana pada logo
    $('.logo-name').hover(function() {
        $(this).animate({
            fontSize: '30px',  // Animasi perubahan ukuran teks
        }, 400);
    }, function() {
        $(this).animate({
            fontSize: '25px',  // Kembali ke ukuran asli
        }, 400);
    });

    // Efek Show/Hide pada profil
    $('.profile-icon').click(function() {
        $(this).find('img').toggle(500);  // Gambar akan hilang/muncul saat diklik
    });
    
    // Bar chart initialization (Chart.js)
    const ctxBar = document.getElementById('myBarChart').getContext('2d');
    const myBarChart = new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Revenue',
                data: [12000, 19000, 3000, 5000, 20000, 30000],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Pie chart initialization (Chart.js)
    const ctxPie1 = document.getElementById('myPieChart1').getContext('2d');
    const myPieChart1 = new Chart(ctxPie1, {
        type: 'pie',
        data: {
            labels: ['Rent', 'Utilities', 'Salaries', 'Supplies', 'Marketing'],
            datasets: [{
                label: 'Expenses',
                data: [5000, 2000, 15000, 3000, 5000],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });

    const ctxPie2 = document.getElementById('myPieChart2').getContext('2d');
    const myPieChart2 = new Chart(ctxPie2, {
        type: 'pie',
        data: {
            labels: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'],
            datasets: [{
                label: 'Revenue',
                data: [8000, 12000, 7000, 9000, 5000],
                backgroundColor: [
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 159, 64, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });
});
