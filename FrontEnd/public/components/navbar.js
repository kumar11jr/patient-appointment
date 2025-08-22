function createNavbar() {
  return `
            <nav class="navbar navbar-expand-lg mx-auto mt-4" style="max-width: 1200px; background-color: #fff; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); border-radius: 1.5rem;">
                <div class="container-fluid">
                    <!-- Logo Section -->
                    <a class="navbar-brand d-flex align-items-center me-auto me-lg-0" href="/">
                        <!-- SVG Icon for the logo -->
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1a237e" class="d-inline-block align-text-top" style="width: 2rem; height: 2rem;">
                            <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 0 1 9 0v.75a.75.75 0 0 0 1.5 0V6A6 6 0 0 0 6 6v.75a.75.75 0 0 0 1.5 0V6Zm-3 1.5A.75.75 0 0 0 3 9v5.25a3 3 0 0 0 3 3h4.5a.75.75 0 0 0 0-1.5H6a1.5 1.5 0 0 1-1.5-1.5V9a.75.75 0 0 0-1.5-.75Zm12-1.5a.75.75 0 0 0-1.5 0V9a.75.75 0 0 0 1.5 0v1.5a1.5 1.5 0 0 1-1.5 1.5H12a.75.75 0 0 0 0 1.5h4.5a3 3 0 0 0 3-3V9a.75.75 0 0 0-1.5-.75Z" clip-rule="evenodd" />
                            <path d="M12 9a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V9.75A.75.75 0 0 1 12 9Z" />
                        </svg>
                        <span class="ms-2 fs-4 fw-bold text-dark">Mediso</span>
                    </a>
                    
                    <!-- Navbar Toggler for Mobile -->
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <!-- Navigation Links -->
                    <div class="collapse navbar-collapse justify-content-lg-center" id="navbarNav">
                        <ul class="navbar-nav mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link text-secondary mx-3" href="/about">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-secondary mx-3" href="/service">Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-secondary mx-3" href="/doctors">Doctors</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-secondary mx-3" href="/careers">Careers</a>
                            </li>
                        </ul>
                    </div>

                    <!-- Search Icon and Button Section -->
                    <div class="d-flex align-items-center ms-auto d-none d-lg-flex">
                        <!-- Search Icon -->
                        <button class="btn btn-link text-secondary p-0 me-3" type="button">
                            <i class="fas fa-search"></i>
                        </button>
                        
                        <!-- Get Started Button -->
                        <button id="get-started-btn" class="btn" type="button" style="background-color: #1a237e; border-color: #1a237e; color: #fff; border-radius: 9999px; padding-left: 2rem; padding-right: 2rem; font-weight: 600;">
                            Get Started
                        </button>
                    </div>
                </div>
            </nav>
            `;
}

function setupNavbarListeners() {
  const getStartedBtn = document.getElementById("get-started-btn");
  if (getStartedBtn) {
    getStartedBtn.addEventListener("click", () => {
      const message = "Hello! Thanks for clicking the Get Started button.";
      alert(message);
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const navbarPlaceholder = document.getElementById("navbar-placeholder");
  if (navbarPlaceholder) {
    navbarPlaceholder.innerHTML = createNavbar();
    setupNavbarListeners();
  }
});
