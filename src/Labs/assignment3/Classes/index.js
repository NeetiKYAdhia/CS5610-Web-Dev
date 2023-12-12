import './index.css';
function Classes() {
  const color = 'blue';
  const dangerous = true;
  return (
    <div>
      <h2>Classes</h2>
      <div
        className={`${dangerous ? 'wd-bg-red' : 'wd-bg-green'}
                                     wd-fg-black wd-padding-10px`}
      >
        Background 1
      </div>
      <div className={`wd-bg-${color} wd-fg-black wd-padding-10px`}>
        Background 2
      </div>

      <div className="wd-bg-yellow wd-fg-black wd-padding-10px">
        Background 3
      </div>
      <div className="wd-bg-blue wd-fg-black wd-padding-10px">
        Background 4
      </div>
      <div className="wd-bg-red wd-fg-black wd-padding-10px">
        Background 5
      </div>
    </div>
  );
}
export default Classes;
