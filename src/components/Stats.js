export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items for your trip 🤷‍♂️</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You have got everything !! Ready to go ✈️"
          : `👜 You have ${numItems} items on your List and you have packed ${numPacked} (
        ${percentage}%) of your items.`}
      </em>
    </footer>
  );
}
