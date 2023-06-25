import "../../Assets/Styles/TestCode.css";
const TestCode = () => {
    return (
<>
  <input type="checkbox" id="nav-toggle" class="d-none"/>
  <label for="nav-toggle" class="close-btn">&#10006;</label>

  <div class="container-fluid">
    <div class="row">
      {/* <!-- Sidebar --> */}
      <div class="col-md-3 col-lg-2 sidebar">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link active" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
      {/* <!-- Content --> */}
      <div class="col-md-9 col-lg-10">
        {/* <!-- Page content goes here --> */}
        <h1>Welcome to my website</h1>
        <p>This is the main content of the page.</p>
        <label for="nav-toggle" class="btn btn-primary">Open Sidebar</label>
      </div>
    </div>
  </div>
        </>
    )
}

export default TestCode
