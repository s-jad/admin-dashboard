const mainGridLayout = document.getElementById('main-grid-layout');
const sidebar = document.getElementById('sidebar');
const toggleSidebar = document.getElementById('minimize-sidebar');
const toggleSidebarBtn = document.getElementById('minimize-sidebar-button');
const scrollingToggleSidebar = document.getElementById('scrolling-minimize-sidebar');
const scrollingToggleSidebarBtn = document.getElementById('scrolling-minimize-sidebar-button');
const hamburgerMenu = document.getElementById('hamburger-menu');

const searchbar = document.getElementById('searchbar');
const searchbarBtn = document.getElementById('searchbar-button');

const projectGrid = document.getElementById('projects-inner-container');
const addProjectBtn = document.getElementById('add-project-button');
const createProjectBtn = document.getElementById('create-new-project-button');
const cancelProjectBtn = document.getElementById('cancel-new-project-button');
const createProjectModal = document.getElementById('create-project-modal');
const modalContent = document.getElementById('modal-content');

// Toggle sidebar collapse/expansion and minus <-> hamburger animation
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
    // Ensure hamburger menu is visible to expand sidebar again
    toggleSidebar.style.left = "0.5%";
    toggleSidebarBtn.style.left = "0.5%";
    toggleSidebar.style.filter = "invert(0%)";
    hamburgerMenu.classList.remove('collapsed');
});

// Collapse and Expand the searchbar
searchbarBtn.addEventListener('click', function() {
    searchbar.classList.toggle('inactive');
    searchbarBtn.classList.toggle('inactive');
});

// Switch between static animated toggleSidebar and pos: fixed scrollable toggleSidebar
document.addEventListener('scroll', function() {
    if (document.documentElement.scrollTop === 0) {
        // Document is at the top of its vertical scroll
        // Make animated toggleSidebar button visible 
        toggleSidebar.classList.remove('disappear');
        scrollingToggleSidebar.classList.add('disappear');
    } else {
        // User is scrolling down
        // Make position: fixed scrollingToggleSidebar button visible 
        scrollingToggleSidebar.classList.remove('disappear');
        toggleSidebar.classList.add('disappear');
    }
});

addProjectBtn.addEventListener('click', function() {
    createProjectModal.classList.add('active');
    modalContent.classList.remove('fade');
});

cancelProjectBtn.addEventListener('click', function() {
    createProjectModal.classList.remove('active');
    modalContent.classList.add('fade');
});

createProjectBtn.addEventListener('click', function() {
    // Create new card node
    const card = document.createElement('div');
    card.classList.add('card');

    // Access user inputs for project title and description
    const projectTitle = document.getElementById('new-project-title');
    const projectDescription = document.getElementById('new-project-description');

    // Generate new card with innerHTML
    card.innerHTML = `
        <h4 class="project-title">${projectTitle.value}</h4>
        <p class="project-description">${projectDescription.value}</p>
        <div class="project-icons">
            <img class="card-icon" src="icons/plus_star.png" alt="">
            <img class="card-icon" src="./icons/delete.png" alt="">
            <img class="card-icon" src="./icons/share.png" alt="">
        </div>
    `;

    projectGrid.appendChild(card);

    // Close the modal
    createProjectModal.classList.remove('active');
    modalContent.classList.add('fade');
});
