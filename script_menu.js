
// Объект для хранения корзины
let cart = {};

// Функция для добавления товара в корзину
function addToCart(item) {
  let quantity = document.getElementById(item).value;
  if (quantity > 0) {
    if (cart[item]) {
      cart[item] += parseInt(quantity);
    } else {
      cart[item] = parseInt(quantity);
    }
    updateCart();
  }
}

// Функция для обновления корзины
function updateCart() {
  let cartElement = document.getElementById('shoppingcart');
  cartElement.innerHTML = '';

for (let item in cart) {
  let itemElement = document.createElement('div');
  itemElement.classList.add('cart-item');
  itemElement.innerHTML = `<h3>${item}</h3><p>Количество: ${cart[item]}</p><button type="button" onclick="removeFromCart('${item}')">Удалить</button>`;
  cartElement.appendChild(itemElement);
}
}

// Функция для удаления товара из корзины
function removeFromCart(item) {
  delete cart[item];
  updateCart();
}

// Функция для оформления заказа
function ToCart() {
  event.preventDefault();
  document.querySelector('.main-menu').style.display = 'none';
  document.querySelector('.buy').style.display = 'flex';

  // Добавляем товары в корзину
  for (let item in cart) {
    let itemElement = document.createElement('div');
    itemElement.classList.add('item');
    itemElement.innerHTML = `
      <h3>${item}</h3>
      <p>Количество: ${cart[item]}</p>
      <button type="button" onclick="removeFromCart('${item}')">Удалить</button>
    `;
    document.getElementById('shoppingcart').appendChild(itemElement);
  }
}
//-------------------------------------------------------------------------------
// Функция для генерации уникального QR-кода
function generateUniqueQRCode(data) {
    return new Promise((resolve, reject) => {
      QRCode.toDataURL(data, (err, url) => {
        if (err) {
          reject(err);
        } else {
          resolve(url);
        }
      });
    });
  }
  
  // Пример использования
  const uniqueData = 'https://example.com/unique-data';
  
  generateUniqueQRCode(uniqueData)
    .then(qrCodeDataURL => {
      // Теперь Вы можете использовать qrCodeDataURL для отображения QR-кода
      console.log(qrCodeDataURL);
    })
    .catch(error => {
      console.error('Ошибка при генерации QR-кода:', error);
    });
