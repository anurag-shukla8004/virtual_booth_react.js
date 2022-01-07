export const Dropdown = ({ data, onCall }) => (
  <select onChange={onCall}>
    <option value="/">{data.title}</option>
    {data.options.map((ele) => (
      <option value={ele.value}>{ele.label}</option>
    ))}
  </select>
);
