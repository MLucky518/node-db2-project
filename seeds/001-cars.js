exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("cars").truncate();
    
      await knex("cars").insert([
        {
          id: 1,
          vin: "477464467643",
          make: "honda",
          model: "accord",
          mileage: 1,
          tranType: "auto",
          titleStatus: "good",
        },
        {
          id: 2,
          vin: "377658575785",
          make: "hyundai",
          model: "accent",
          mileage: 1,
          tranType: "manual",
          titleStatus: "bad",
        },
        {
          id: 3,
          vin: "476476476477",
          make: "nissan",
          model: "altima",
          mileage: 1,
          tranType: "auto",
          titleStatus: "bad",
        },
      ]);
    
};
