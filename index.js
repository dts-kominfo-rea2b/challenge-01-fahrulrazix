// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
let favoritColorFirstUser = ["Yellow", "Pink", "White", "Purple"];

let favoritColorSecondUser = ["Blue", "Black", "Grey"];

let educationFirstUser = new Map([
  ["nameSd", "SD 01"],
  ["citySd", "Jakarta"],
  ["graduateSd", 2016],
  ["nameSmp", "SMP 02"],
  ["citySmp", "Jakarta"],
  ["graduateSmp", 2019],
  ["nameSma", "SMA 03"],
  ["citySma", "Tangerang"],
  ["graduateSma", ""],
]);

let educationSecondUser = new Map([
  ["nameSd", "SD 02"],
  ["citySd", "Jakarta"],
  ["graduateSd", 2010],
  ["nameSmp", "SMP 03"],
  ["citySmp", "Bogor"],
  ["graduateSmp", 2013],
  ["nameSma", "SMA 01"],
  ["citySma", "Surabaya"],
  ["graduateSma", 2016],
  ["universitas", "Maju"],
  ["universitasCity", "Tangerang"],
  ["universitasGraduate", ""],
]);

let favoriteRestaurantFirstUsers = new Set();
favoriteRestaurantFirstUsers.add("Bento");
favoriteRestaurantFirstUsers.add("Sushi");
favoriteRestaurantFirstUsers.add("Pancake");
favoriteRestaurantFirstUsers.add("Eggy");
favoriteRestaurantFirstUsers.add("Tempura");
favoriteRestaurantFirstUsers.add("Bento");
favoriteRestaurantFirstUsers.add("Eggy");
favoriteRestaurantFirstUsers.add("Padang");
favoriteRestaurantFirstUsers.add("Tteok");
favoriteRestaurantFirstUsers.add("Sushi");
favoriteRestaurantFirstUsers.add("Sushi");

let favoriteRestaurantSecondUsers = new Set();
favoriteRestaurantSecondUsers.add("Tempura");
favoriteRestaurantSecondUsers.add("Bento");
favoriteRestaurantSecondUsers.add("Sushi");
favoriteRestaurantSecondUsers.add("Pancake");
favoriteRestaurantSecondUsers.add("Padang");
favoriteRestaurantSecondUsers.add("Katsu");
favoriteRestaurantSecondUsers.add("Geprek");
favoriteRestaurantSecondUsers.add("Pancake");
favoriteRestaurantSecondUsers.add("Eggy");

const Monica = {
  name: "Monica",
  gender: "Female",
  age: 17,
  email: "monica@dingdong.com",
  favoritColorFirstUser,
  isHavePet: true,
  educationFirstUser,
  favoriteRestaurantFirstUsers,
};
const Wendy = {
  name: "Wendy",
  gender: "Male",
  age: 23,
  email: "wendy@dingdong.com",
  favoritColorSecondUser,
  isHavePet: false,
  favoritColorSecondUser,
  educationSecondUser,
  favoriteRestaurantSecondUsers,
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [Monica, Wendy];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};
