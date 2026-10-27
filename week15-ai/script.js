const foods = [
  {
    name: 'Pad Thai',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM9NB5UP1CU_c4qaq3pcb6OkohhSz0uQUsGHG2bobaxA&s=10',
    description: 'ขนมไทยยอดนิยมเส้นใหญ่ผัดกับไข่ ถั่วงู และปลาหมัก รสชาติหวานมัน เปรี้ยวเผ็ด',
    price: 120
  },
  {
    name: 'Tom Yum Goong',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxI3uc5Hir_0t0WVxlD4HdIz6ClujJREFYX_bcTXYXng&s=10',
    description: 'ต้มยำกุ้งรสจัดจัด เปรี้ยว หวาน มัน เผ็ด แสนอร่อย กินง่าย เหมาะสำหรับวันธรรมดา',
    price: 150
  },
  {
    name: 'Green Curry',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm_azPN01mfo1Hs7sP8Hg1cBT9Dmy4TR9PwjeXXC2iyQ&s=10',
    description: 'แกงเขียวหวาน กับข้าวสวยร้อนๆ เนื้อไก่ หรือ หมู เนยข้น เครื่องเทศกลมกล่อม',
    price: 180
  },
  {
    name: 'Mango Sticky Rice',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNLowCEUR_MQyrXtTdZX8svRzlMDUseSo5vqOpO0_6Hg&s=10',
    description: 'ข้าวเหนียวสีขาว หวานหอม มะม่วงสุก สดชื่น เหมาะรับประทานเป็นของหวานตบท้ายมื้ออาหาร',
    price: 95
  },
  {
    name: 'Som Tum',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhzDFoEp6WRnUndDIvGKyvnIkrMUsw7zJFdTE0PUdYiQ&s=10',
    description: 'ส้มตำนองดั้งเดิม หวาน มัน เปรี้ยว รสจัดจัด กินคู่กับปลาหมักหรือกุ้งแห้ง รสชาติจัดจ้าน',
    price: 80
  }
];

const foodCard = document.getElementById('foodCard');
const foodImg = document.getElementById('foodImg');
const foodName = document.getElementById('foodName');
const foodDesc = document.getElementById('foodDesc');
const foodPrice = document.getElementById('foodPrice');
const btnRandomize = document.getElementById('btnRandomize');

function getRandomFood() {
  const randomIndex = Math.floor(Math.random() * foods.length);
  return foods[randomIndex];
}

function updateFoodCard(food) {
  foodImg.src = food.image;
  foodImg.alt = food.name;
  foodName.textContent = food.name;
  foodDesc.textContent = food.description;
  foodPrice.textContent = `${food.price} บาท`;
}

function showRandomFood() {
  const randomFood = getRandomFood();
  updateFoodCard(randomFood);
}

btnRandomize.addEventListener('click', showRandomFood);

// Show random food on page load
document.addEventListener('DOMContentLoaded', showRandomFood);