//재사용이 가능한 컴포넌트 구축 및 활용
export default function Input({ label, id, error, ...props }) {
  return (
    <div className="control no-margin">
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props}  />
      <div className="control-error">{error &&  <span>{error}</span>}</div>
    </div>
  );
}
