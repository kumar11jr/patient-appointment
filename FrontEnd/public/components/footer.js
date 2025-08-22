function generateFooter() {
  const footerHTML = `
    <hr />
    <footer style="padding: 4rem 0; background-color:rgb(255, 255, 255);">
      <div class="container" style="max-width: 1200px; margin: auto;">
        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="d-flex align-items-center mb-2">
              <i class="fas fa-heartbeat fs-4 me-2" style="color: #1a237e;"></i>
              <h4 class="mb-0 fw-bold">Mediso</h4>
            </div>
            <p class="text-muted">
              Creative healthcare template to launch your site quick and easily
            </p>
          </div>
          <div class="col-6 col-md-2 mb-3">
            <h6 class="fw-bold">Static pages</h6>
            <ul class="list-unstyled">
              <li><a href="#" class="text-muted text-decoration-none">Home</a></li>
              <li><a href="#" class="text-muted text-decoration-none">About</a></li>
              <li><a href="#" class="text-muted text-decoration-none">Contact</a></li>
              <li><a href="#" class="text-muted text-decoration-none">FAQ</a></li>
            </ul>
          </div>
          <div class="col-6 col-md-2 mb-3">
            <h6 class="fw-bold">CMS Pages</h6>
            <ul class="list-unstyled">
              <li><a href="#" class="text-muted text-decoration-none">Services</a></li>
              <li><a href="#" class="text-muted text-decoration-none">Doctors</a></li>
              <li><a href="#" class="text-muted text-decoration-none">Careers</a></li>
              <li><a href="#" class="text-muted text-decoration-none">Blogs</a></li>
            </ul>
          </div>
          <div class="col-6 col-md-2 mb-3">
            <h6 class="fw-bold">Details pages</h6>
            <ul class="list-unstyled">
              <li><a href="#" class="text-muted text-decoration-none">Service (CMS)</a></li>
              <li><a href="#" class="text-muted text-decoration-none">Doctor (CMS)</a></li>
              <li><a href="#" class="text-muted text-decoration-none">Career (CMS)</a></li>
              <li><a href="#" class="text-muted text-decoration-none">Blogs (CMS)</a></li>
            </ul>
          </div>
          <div class="col-6 col-md-2 mb-3">
            <h6 class="fw-bold">Utility Pages</h6>
            <ul class="list-unstyled">
              <li><a href="#" class="text-muted text-decoration-none">Error 404</a></li>
              <li><a href="#" class="text-muted text-decoration-none">Form Submit</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  `;

  const footerElement = document.getElementById('footer');

  if (footerElement) {
    footerElement.innerHTML = footerHTML;
  }
}

document.addEventListener('DOMContentLoaded', generateFooter);