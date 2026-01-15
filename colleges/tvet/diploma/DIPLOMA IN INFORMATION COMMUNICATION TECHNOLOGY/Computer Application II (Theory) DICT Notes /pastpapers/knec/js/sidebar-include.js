// Create and inject the sidebar
function createSidebar() {
    const sidebar = document.createElement('aside');
    sidebar.className = 'sidebar';
    
    const sidebarContent = `
        <div class="sidebar-header">
            <h3>Past Papers</h3>
        </div>
        <nav class="sidebar-nav">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="paper-2023-july.html">July 2023</a></li>
                <li><a href="paper-2022-nov.html">November 2022</a></li>
                <li><a href="paper-2022-july.html">July 2022</a></li>
                <li><a href="paper-2021-nov.html">November 2021</a></li>
                <li><a href="paper-2019-july.html">July 2019</a></li>
                <li><a href="paper-2018-nov.html">November 2018</a></li>
                <li><a href="paper-2018-july.html">July 2018</a></li>
                <li><a href="paper-2017-nov.html">November 2017</a></li>
                <li><a href="paper-2017-july.html">July 2017</a></li>
                <li><a href="paper-2016-nov.html">November 2016</a></li>
                <li><a href="paper-2016-july.html">July 2016</a></li>
                <li><a href="paper-2015-nov.html">November 2015</a></li>
                <li><a href="paper-2015-july.html">July 2015</a></li>
                <li><a href="paper-2014-nov.html">November 2014</a></li>
                <li><a href="paper-2014-july.html">July 2014</a></li>
                <li><a href="paper-2013-nov.html">November 2013</a></li>
                <li><a href="paper-2013-july.html">July 2013</a></li>
                <li><a href="course-module.html">Course Module</a></li>
            </ul>
        </nav>
    `;
    
    sidebar.innerHTML = sidebarContent;
    
    // Find the main content container and insert sidebar
    const mainContainer = document.querySelector('.container.main-content');
    if (mainContainer) {
        mainContainer.insertBefore(sidebar, mainContainer.firstChild);
    }

    // Mark current page in navigation
    const currentPage = window.location.pathname.split('/').pop();
    document.querySelectorAll('.sidebar-nav a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });
}

// Call createSidebar when DOM is ready
document.addEventListener('DOMContentLoaded', createSidebar);

// Function to update sidebar links
function updateSidebarLinks(papers) {
    const nav = document.querySelector('.sidebar-nav ul');
    if (!nav) return;

    // Clear existing links except Home and Course Module
    const homeLink = nav.querySelector('a[href="index.html"]').parentElement;
    const moduleLink = nav.querySelector('a[href="course-module.html"]').parentElement;
    nav.innerHTML = '';
    
    // Add Home link
    nav.appendChild(homeLink);
    
    // Add paper links
    papers.forEach(paper => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = paper.url;
        a.textContent = paper.title;
        if (paper.current) {
            a.classList.add('active');
            a.setAttribute('aria-current', 'page');
        }
        li.appendChild(a);
        nav.appendChild(li);
    });
    
    // Add Course Module link
    nav.appendChild(moduleLink);
}
