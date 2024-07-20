import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./admin.css";

const Admin = () => {
  const navigate = useNavigate();
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetchData(); // Fetch data when component mounts
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/menu/foods");
      const data = await response.json();
      setFoods(data.menu); // Assuming data.menu is an array of food items
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = async (foodId) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/menu/foods/${foodId}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        // Refresh data after delete
        fetchData();
      } else {
        console.error("Failed to delete:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting:", error);
    }
  };

  const handleEdit = (foodId) => {
    navigate(`/Editfood/${foodId}`); // Navigate to the edit page with the food ID
  };

  return (
    <section className="admin-section">
      <div className="admin-button">
        <button
          className="button"
          onClick={() => {
            navigate("/Addfood");
          }}
        >
          Add new item
        </button>
      </div>
      <div className="group1-container">
        {foods.map((food, index) => (
          <div key={index} className="group-container">
            <div className="food-cards">
              <div className="food-heading">
                <p>{food.type}</p>
              </div>
              <div className="food-button">
                <p>Ksh {food.price}</p>
                <div className="delete-edit-buttons">
                  <button
                    className="delbutton"
                    onClick={() => handleDelete(food.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="delbutton"
                    onClick={() => handleEdit(food.id)}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Admin;
