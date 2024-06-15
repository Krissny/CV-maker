export function Education({ data, onChange }) {
  let list = data.education;
  return (
    <div className="card">
      <h1>Education</h1>
      <label htmlFor="degree">Degree</label>
      <input
        type="text"
        id="degree"
        value={list[0].degree}
        onChange={(e) => {
          list[0].degree = e.target.value;
          onChange({ ...data, education: list });
        }}
      />
      <label htmlFor="school">School</label>
      <input
        type="text"
        id="school"
        value={list[0].school}
        onChange={(e) => {
          list[0].school = e.target.value;
          onChange({ ...data, education: list });
        }}
      />
      <label htmlFor="location">Location</label>
      <input
        type="text"
        id="location"
        value={list[0].location}
        onChange={(e) => {
          list[0].location = e.target.value;
          onChange({ ...data, education: list });
        }}
      />
      <label htmlFor="graduation">Graduation Date</label>
      <input
        type="text"
        id="graduation"
        value={list[0].graduationDate}
        onChange={(e) => {
          list[0].graduationDate = e.target.value;
          onChange({ ...data, education: list });
        }}
      />
    </div>
  );
}
