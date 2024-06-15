export default function ({ data, onChange }) {
  return (
    <div className="card">
      <h1>General</h1>
      <label htmlFor="Name">Name</label>
      <input
        id="Name"
        type="text"
        value={data.name}
        onChange={(e) => onChange({ ...data, name: e.target.value })}
      />
      <label htmlFor="Email">Email</label>
      <input
        type="text"
        id="Email"
        value={data.email}
        onChange={(e) => onChange({ ...data, email: e.target.value })}
      />
      <label htmlFor="Number">Phone Number</label>
      <input
        type="text"
        id="Number"
        value={data.phone}
        onChange={(e) => onChange({ ...data, phone: e.target.value })}
      />
      <label htmlFor="Link">LinkedIn</label>
      <input
        type="url"
        id="link"
        value={data.linkedin}
        onChange={(e) => onChange({ ...data, linkedin: e.target.value })}
      />
    </div>
  );
}
