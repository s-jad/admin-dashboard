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
const createProjectModalContent = document.getElementById('create-project-modal-content');

const deleteProjectBtns = document.querySelectorAll('.delete-project-button');
const deleteProjectModal = document.getElementById('delete-project-modal');
const deleteProjectModalContent = document.getElementById('delete-project-modal-content');
const deleteProjectModalTitle = document.getElementById('confirm-delete-project-title');
const cancelDeleteProjectBtn = document.getElementById('cancel-delete-project-button');
const confirmDeleteProjectBtn = document.getElementById('confirm-delete-project-button');

// Toggle sidebar collapse/expansion and minus <-> hamburger animation
// Only present when vertical scroll = 0
toggleSidebarBtn.addEventListener('click', function() {
    sidebar.classList.toggle('invisible');
    if (sidebar.classList.contains('invisible')) {
        toggleSidebar.style.left = "0.5%";
        toggleSidebarBtn.style.left = "0.5%";
        toggleSidebar.style.filter = "invert(0%)";
        hamburgerMenu.classList.toggle('collapsed');
        mainGridLayout.classList.toggle('single-column');
    } else {
        toggleSidebar.style.left = "-5%";
        toggleSidebarBtn.style.left = "-5%";
        toggleSidebar.style.filter = "invert(100%)";
        hamburgerMenu.classList.toggle('collapsed');
        mainGridLayout.classList.toggle('single-column');
    }
});

// Toggle sidebar collapse/expansion and minus <-> hamburger animation
// Only present when user scrolls vertically
scrollingToggleSidebarBtn.addEventListener('click', function() {
    sidebar.classList.toggle('invisible');
    // Ensure hamburger menu is visible to expand sidebar again
    toggleSidebar.style.left = "0.5%";
    toggleSidebarBtn.style.left = "0.5%";
    toggleSidebar.style.filter = "invert(0%)";
    hamburgerMenu.classList.remove('collapsed');
    mainGridLayout.classList.add('single-column');
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

// CREATE NEW PROJECTS

// Opens the create new project modal
addProjectBtn.addEventListener('click', function() {
    createProjectModal.classList.add('active');
    createProjectModalContent.classList.remove('fade');
});

// Closes the create new project modal
cancelProjectBtn.addEventListener('click', function() {
    createProjectModal.classList.remove('active');
    createProjectModalContent.classList.add('fade');
});

// Creates the new project and appends card to projects-inner-container
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
    createProjectModalContent.classList.add('fade');
});

// DELETE PROJECTS

// Varies based on which delete project icon is clicked
let projectToBeDeleted;
let projectToBeDeletedTitle;

// Opens delete project modal and sets projectToBeDeleted to clicked card
deleteProjectBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        deleteProjectModal.classList.add('active');
        deleteProjectModalContent.classList.remove('fade');

        // Assigns btn's grandparent div.card to projectToBeDeleted
        projectToBeDeleted = btn.parentNode.parentNode;
        projectToBeDeletedTitle = projectToBeDeleted.querySelector('.project-title');
        deleteProjectModalTitle.innerText = `Are you sure you want to delete ${projectToBeDeletedTitle.innerText}?`;
    });
});

// Closes delete project modal
cancelDeleteProjectBtn.addEventListener('click', function() {
    deleteProjectModal.classList.remove('active');
    deleteProjectModalContent.classList.add('fade');
});

// Deletes project and removes from project inner container
confirmDeleteProjectBtn.addEventListener('click', function() {
    // Delete target project
    projectGrid.removeChild(projectToBeDeleted);
    deleteProjectModal.classList.remove('active');
    deleteProjectModalContent.classList.add('fade');
});
