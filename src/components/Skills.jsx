export default function Skills({ data, onChange }) {
  let list = data.skills;
  function create(e) {
    e.preventDefault();
    console.log(e.target[0].value);
    list = [...list, e.target[0].value];
    onChange({ ...data, skills: list });
  }

  function del(e) {
    list = list.filter((item) => item != e.target.value);
    onChange({ ...data, skills: list });
  }
  return (
    <div className="skillset card">
      <h1>Skills</h1>
      <form
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
        }}
        onSubmit={(e) => {
          create(e);
        }}
      >
        <input type="text" style={{ width: "50%" }} />
        <button type="submit" className="btn">
          Add Skill +
        </button>
      </form>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        {data.skills.map((skill, index) => (
          <div
            key={`${skill + index}`}
            style={{
              display: "flex",
              gap: "2rem",
              justifyContent: "center",
            }}
          >
            <span>{skill}</span>
            <button value={skill} onClick={(e) => del(e)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
