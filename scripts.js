const sidebar = document.getElementById('sidebar');
const mainGridLayout = document.getElementById('main-grid-layout');
const toggleSidebarBtn = document.getElementById('minimize-sidebar-button');
const toggleSidebar = document.getElementById('minimize-sidebar');
const hamburgerMenu = document.getElementById('hamburger-menu');

toggleSidebarBtn.addEventListener('click', function() {
    sidebar.classList.toggle('invisible');

    if (sidebar.classList.contains('invisible')) {
        toggleSidebar.style.left = "0.5%";
        toggleSidebarBtn.style.left = "0.5%";
        toggleSidebar.style.filter = "invert(0%)";
        hamburgerMenu.classList.toggle('collapsed');
        mainGridLayout.style.gridTemplateColumns = "0fr 1fr";
    } else {
        toggleSidebar.style.left = "-5%";
        toggleSidebarBtn.style.left = "-5%";
        toggleSidebar.style.filter = "invert(100%)";
        hamburgerMenu.classList.toggle('collapsed');
        mainGridLayout.style.gridTemplateColumns = "1fr 5fr";
    }
});

