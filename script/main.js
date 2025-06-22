function generateHash(level, secret = 'SALT123') {
  const raw = `${level}-${secret}`;
  let hash = 0;
  for (let i = 0; i < raw.length; i++) {
    hash = (hash * 31 + raw.charCodeAt(i)) % (1e9+7);
  }
  return hash.toString(36).toUpperCase().padStart(6, '0');
}

function validatePasscode(passcode) {
  const levelPart = passcode.slice(0, 2);
  const hashPart = passcode.slice(2);
  const level = decodeLevel(levelPart);

  const expectedHash = generateHash(level);

  if (hashPart === expectedHash) {
    return level;
  }
  return null;
}


const params = new URLSearchParams(window.location.search);
const code = params.get('code');
const content = document.getElementById('content');

if (code === null) {
  //Default case
  const msg = document.createElement('p');
  msg.textContent = 'QR code 挑戰\n玩法：掃描QR code有機會進入下一層\n(為了最佳遊戲體驗，請不要使用“存檔功能”)';
  const img = document.createElement('img');
  img.src = 'image/qr/1.png';
  img.alt = '開始遊戲';
  content.appendChild(msg);
  content.appendChild(img);
}
else{
  const level = validatePasscode(code);
  if (level === null || level <= 0 || level > 69) {
    const msg = document.createElement('p');
    msg.textContent = '錯誤！';
    const btn = document.createElement('button');
    btn.textContent = '前往主選單';
    btn.onclick = function () {
      window.location.href = 'https://douob000.github.io/qr_challenge/';
    };
    content.appendChild(msg);
    content.appendChild(btn);
  }
  else if (level === 69) {
    const msg = document.createElement('p');
    msg.textContent = '你贏了🎉\n成功到達69層！';
    const img = document.createElement('img');
    img.src = `image/cat.gif`
    img.alt = '你贏了';
    const btn = document.createElement('button');
    btn.textContent = '再玩一次';
    btn.onclick = function () {
      window.location.href = 'https://douob000.github.io/qr_challenge/';
    };
    content.appendChild(msg);
    content.appendChild(img);
    content.appendChild(btn);
  }
  else {
    const rd = Math.random();
    if (rd <= 0.93) {
      const msg = document.createElement('p');
      msg.textContent = `得分：${level}`;
      const img = document.createElement('img');
      img.src = `image/qr/{level+1}.png`
      img.alt = '下一關';
      content.appendChild(msg);
      content.appendChild(img);
    }
    else {
      const msg = document.createElement('p');
      msg.textContent = `殘念！\n總得分：${level-1}`;
      const img = document.createElement('img');
      img.src = `image/rick.gif`
      img.alt = '你輸了';
      const btn = document.createElement('button');
      btn.textContent = '前往主選單';
      btn.onclick = function () {
        window.location.href = 'https://douob000.github.io/qr_challenge/';
      };
      content.appendChild(msg);
      content.appendChild(img);
      content.appendChild(btn);
    }
  }
}

if (code === '69420') {
  // 顯示圖片
  const img = document.createElement('img');
  img.src = 'image/temp1.jpg'; // ← 換成你要顯示的圖片網址
  img.alt = 'Secret Image';
  content.appendChild(img);

} else if (code === '42') {
  // 直接跳轉
  window.location.href = 'https://youtu.be/dQw4w9WgXcQ'; // ← 換成你要導向的網址

} else if (code === '1729') {
  // 顯示按鈕，點下去才跳轉
  const msg = document.createElement('p');
  msg.textContent = '恭喜中獎🎉';
  const btn = document.createElement('button');
  btn.textContent = '前往';
  btn.onclick = function () {
    window.location.href = 'https://youtu.be/dQw4w9WgXcQ'; // ← 換成你要導向的網址
  };
  content.appendChild(msg);
  content.appendChild(btn);

} else {
  // 預設顯示文字
  content.textContent = '請輸入正確的代碼才能看到秘密內容。';
}