const MedicineCard = ({ medicine }) => {
  return (
    <div className="medicine-card">
      <h3>{medicine.name}</h3>
      <p>Price: {medicine.price}</p>
      <p>Source: {medicine.source}</p>
      <p>Stock: {medicine.stock}</p>
      <a href={medicine.url} target="_blank" rel="noopener noreferrer">Buy Now</a>
    </div>
  );
};

export default MedicineCard;
