export default function Profile() {
  return (
    <div className="profile">
        <div className="profile-header">
          <h1>Profile</h1>
          <img src="avatar.png" alt="Profile Avatar" className="img-fluid" />
          <h2>John Doe</h2>
          <p>Frontend Developer</p>
        </div>
        <div className="profile-details">
          <h3>About</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat tellus non mi feugiat, vitae bibendum massa tempus. Etiam ut congue dui.</p>
          <h3>Contact</h3>
          <p>Email: john.doe@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
  );
}
