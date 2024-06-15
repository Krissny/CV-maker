export function Doc({
  name,
  email,
  phone,
  link,
  summary,
  skills,
  workExp,
  edu,
}) {
  return (
    <div className="doc">
      <h1>{name}</h1>
      <p>
        Email: {email} | Phone: {phone} | LinkedIn:
        {link}
      </p>
      <div>
        <h2>Summary</h2>
        <p>{summary}</p>
      </div>
      <div>
        <h2>Skills</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={`${skill}` + `${index}`}>{skill}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Work Experience</h2>
        <div>
          <h3>{workExp[0].title}</h3>
          <p>
            {workExp[0].company} | {workExp[0].location}
          </p>
          <p>{workExp.date}</p>
          <br />
          <p>- {workExp[0].responsibilities[0]}</p>
          <p>- {workExp[0].responsibilities[1]}</p>
        </div>
      </div>
      <div>
        <h2>Education</h2>
        <div>
          <h3>{edu[0].degree}</h3>
          <p>
            {edu[0].school} | {edu[0].location}
          </p>
          <p>{edu[0].graduationDate}</p>
        </div>
      </div>
    </div>
  );
}
