export default function FilterForm({ saleOnly, setSaleOnly }) {
  return (
    <form className="filter">
      <label>
        <input
          type="checkbox"
          checked={saleOnly}
          onChange={(e) => {
            setSaleOnly(e.target.checked);
          }}
        />
        Sonderangebote
      </label>
    </form>
  );
}
