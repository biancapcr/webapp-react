import axios from "axios";
import { useState } from "react";

const ReviewForm = ({ movieId, reloadReviews }) => {
	const apiUrl = `http://localhost:3000/api/movies/${movieId}/reviews`;
	const initialData = {
		text: "",
		vote: "",
		name: ""
	};
	const [formData, setFormData] = useState(initialData);

	const setFieldValue = (e) => {
		const {name, value} = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

const handleSubmit = (e) => {
	e.preventDefault();
	axios.post(apiUrl, formData, {headers: { "Content-Type": "application/json"}})
	.then((resp) => {
		setFormData(initialData);
		reloadReviews();
	})
}

  return (
    <div className="detail-card p-4">
      <h2 className="text-light">Aggiungi Recensione</h2>
      <form onSubmit={handleSubmit}>
        <div className="my-3">
          <label htmlFor="" className="form-label">
            Nome
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Nome"
            name="name"
            id="name"
			value={formData.name}
			onChange={setFieldValue}
          />
        </div>
        <div className="my-3">
          <label htmlFor="" className="form-label">
            Voto
          </label>
          <input
            type="number"
            className="form-control"
            placeholder="Voto"
			min="0"
			max="5"
            name="vote"
            id="vote"
			value={formData.vote}
			onChange={setFieldValue}
          />
        </div>
        <div className="my-3">
          <label htmlFor="" className="form-label">
            Testo Recensione
          </label>
          <textarea
            type="text"
            className="form-control"
            placeholder="Testo Recensione"
            name="text"
            id="text"
            rows="4"
			value={formData.text}
			onChange={setFieldValue}/>
        </div>
		<div className="my-3">
			<button className="btn btn-secondary" type="submit">Salva</button>
		</div>
      </form>
    </div>
  );
};

export default ReviewForm;
