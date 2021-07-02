function getPilihanComputer() {
  const comp = Math.random();
  if (comp < 0.34) return 'gajah';
  if (comp >= 0.34 && comp < 0.67) return 'orang';

  return 'semut';
}

function getHasil(comp, p) {
  if (p == comp) return 'SERI!';
  if (p == 'gajah') return comp == 'orang' ? 'MENANG!' : 'KALAH!';
  if (p == 'orang') return comp == 'gajah' ? 'KALAH!' : 'MENANG!';
  if (p == 'semut') return comp == 'orang' ? 'KALAH' : 'MENANG!';
}

function acak() {
  const imgKomputer = document.querySelector('.img-komputer');
  const gambar = ['gajah', 'orang', 'semut'];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    const waktuAkhir = new Date().getTime();
    if (waktuAkhir - waktuMulai > 1000) {
      clearInterval();
      return;
    }
    imgKomputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
    if (i == gambar.length) i = 0;
  }, 100);
}

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function (pill) {
  pill.addEventListener('click', function () {
    const pComputer = getPilihanComputer();
    const pPlayer = pill.className;
    const hasil = getHasil(pComputer, pPlayer);

    acak();

    setTimeout(function () {
      const imgKomputer = document.querySelector('.img-komputer');
      imgKomputer.setAttribute('src', 'img/' + pComputer + '.png');

      const info = document.querySelector('.info');
      info.innerHTML = hasil;
    }, 1000);
  });
});

// const pGajah = document.querySelector('.gajah');

// pGajah.addEventListener('click', function () {
//   const pComputer = getPilihanComputer();
//   const pPlayer = pGajah.className;
//   const hasil = getHasil(pComputer, pPlayer);

//   const imgKomputer = document.querySelector('.img-komputer');
//   imgKomputer.setAttribute('src', 'img/' + pComputer + '.png');

//   const info = document.querySelector('.info');
//   info.innerHTML = hasil;
// });
// const pOrang = document.querySelector('.orang');

// pOrang.addEventListener('click', function () {
//   const pComputer = getPilihanComputer();
//   const pPlayer = pOrang.className;
//   const hasil = getHasil(pComputer, pPlayer);

//   const imgKomputer = document.querySelector('.img-komputer');
//   imgKomputer.setAttribute('src', 'img/' + pComputer + '.png');

//   const info = document.querySelector('.info');
//   info.innerHTML = hasil;
// });
// const pSemut = document.querySelector('.semut');

// pSemut.addEventListener('click', function () {
//   const pComputer = getPilihanComputer();
//   const pPlayer = pSemut.className;
//   const hasil = getHasil(pComputer, pPlayer);

//   const imgKomputer = document.querySelector('.img-komputer');
//   imgKomputer.setAttribute('src', 'img/' + pComputer + '.png');

//   const info = document.querySelector('.info');
//   info.innerHTML = hasil;
// });
