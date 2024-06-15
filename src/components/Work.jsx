export default function Work({ data, onChange }) {
  let list = data.workExperience;
  return (
    <div className="card">
      <h1>Work Experience</h1>
      <label htmlFor="">Title</label>
      <input
        type="text"
        value={data.workExperience[0].title}
        onChange={(e) => {
          list[0].title = e.target.value;
          onChange({ ...data, workExperience: list });
        }}
      />
      <label htmlFor="">Company</label>
      <input
        type="text"
        value={data.workExperience[0].company}
        onChange={(e) => {
          list[0].company = e.target.value;
          onChange({ ...data, workExperience: list });
        }}
      />
      <label htmlFor="">Location</label>
      <input
        type="text"
        value={data.workExperience[0].location}
        onChange={(e) => {
          list[0].location = e.target.value;
          onChange({ ...data, workExperience: list });
        }}
      />
      <label htmlFor="">Date</label>
      <input
        type="text"
        value={data.workExperience[0].date}
        onChange={(e) => {
          list[0].date = e.target.value;
          onChange({ ...data, workExperience: list });
        }}
      />
      <label htmlFor="">Responsibilities I</label>
      <input
        type="text"
        value={data.workExperience[0].responsibilities[0]}
        onChange={(e) => {
          list[0].responsibilities[0] = e.target.value;
          onChange({ ...data, workExperience: list });
        }}
      />
      <label htmlFor="">Responsibilities II</label>
      <input
        type="text"
        value={data.workExperience[0].responsibilities[1]}
        onChange={(e) => {
          list[0].responsibilities[1] = e.target.value;
          onChange({ ...data, workExperience: list });
        }}
      />
    </div>
  );
}
