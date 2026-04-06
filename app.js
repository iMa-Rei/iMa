const cards = [
  { image: "images/zen1.jpg", message: "この一瞬が永遠。" },
  { image: "images/zen2.jpg", message: "あなたが見る世界は、あなた自身の心の鏡。" },
  { image: "images/zen3.jpg", message: "答えのない問いを持ち続ける。" },
  { image: "images/zen4.jpg", message: "本来の自己を問い、根源へと還ろう。" },
  { image: "images/zen5.jpg", message: "手放すことで、あなたはより大きなものを得る。" },
  { image: "images/zen6.jpg", message: "目的も求めず、ただ今ここに在ること。" },
];

function getTodayCard() {
  const today = new Date().toISOString().split('T')[0];
  const seed = today.split('-').join('');
  const index = parseInt(seed) % cards.length;
  return cards[index];
}

const card = getTodayCard();
const img = document.getElementById('card-image');
const msg = document.getElementById('card-message');
const loading = document.getElementById('loading');

img.src = card.image;
img.onload = () => {
  loading.style.display = 'none';
  img.style.display = 'block';
  msg.textContent = card.message;
  msg.style.opacity = '1';
};
img.onerror = () => {
  loading.textContent = '画像を読み込めませんでした。';
};

const d = new Date();
document.getElementById('date-label').textContent =
  `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
