const menuItems = [];

fetch("https://foodapp-15506-default-rtdb.firebaseio.com/meals.json")
  .then((response) => response.json())
  .then((data) => {
    for (const key in data) {
      const { name, description, price } = data[key];
      menuItems.push({ menuId: key, name, description, price });
    }
  });

console.log(menuItems);

export default menuItems;

// const menuItems = [
//   {
//     menuId: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     menuId: "m2",
//     name: "Chow Mein",
//     description: "A Chinese specialty!",
//     price: 16.5,
//   },
//   {
//     menuId: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     menuId: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 18.99,
//   },
//   {
//     menuId: "m5",
//     name: "Large Pizza",
//     description: "With sausage and bacon",
//     price: 20.99,
//   },
// ];
