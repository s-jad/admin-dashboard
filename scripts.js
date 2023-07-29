const sidebar = document.getElementById('sidebar');
const mainGridLayout = document.getElementById('main-grid-layout');
const toggleSidebar = document.getElementById('minimize-sidebar');
const toggleSidebarBtn = document.getElementById('minimize-sidebar-button');
const scrollingToggleSidebar = document.getElementById('scrolling-minimize-sidebar');
const scrollingToggleSidebarBtn = document.getElementById('scrolling-minimize-sidebar-button');
const hamburgerMenu = document.getElementById('hamburger-menu');
const searchbar = document.getElementById('searchbar');
const searchbarBtn = document.getElementById('searchbar-button');

toggleSidebarBtn.addEventListener('click', function() {
    sidebar.classList.toggle('invisible');
    if (sidebar.classList.contains('invisible')) {
        toggleSidebar.style.left = "0.5%";
        toggleSidebarBtn.style.left = "0.5%";
        toggleSidebar.style.filter = "invert(0%)";
        hamburgerMenu.classList.toggle('collapsed');
    } else {
        toggleSidebar.style.left = "-5%";
        toggleSidebarBtn.style.left = "-5%";
        toggleSidebar.style.filter = "invert(100%)";
        hamburgerMenu.classList.toggle('collapsed');
    }
});

scrollingToggleSidebarBtn.addEventListener('click', function() {
    sidebar.classList.toggle('invisible');
});

searchbarBtn.addEventListener('click', function() {
    searchbar.classList.toggle('inactive');
    searchbarBtn.classList.toggle('inactive');
});

document.addEventListener('scroll', function() {
    if (document.documentElement.scrollTop === 0) {
        // Document is at the top of its vertical scroll
        // Trigger your event here
        toggleSidebar.classList.remove('disappear');
        scrollingToggleSidebar.classList.add('disappear');

        if (sidebar.classList.contains('invisible')) {
            toggleSidebar.style.left = "0.5%";
            toggleSidebarBtn.style.left = "0.5%";
            toggleSidebar.style.filter = "invert(0%)";
            hamburgerMenu.classList.remove('collapsed');
        }
    } else {
        scrollingToggleSidebar.classList.remove('disappear');
        toggleSidebar.classList.add('disappear');
    }
});
