export default function Summary({ data, onChange }) {
  return (
    <div className="card">
      <h1>Summary</h1>
      <textarea
        name="summay"
        id="summary"
        value={data.summary}
        onChange={(e) => onChange({ ...data, summary: e.target.value })}
      ></textarea>
    </div>
  );
}
