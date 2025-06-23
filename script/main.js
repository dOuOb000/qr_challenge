/*
function decodeLevel(str) {
  return parseInt(str.slice(1)) - 13;
}

function generateHash(level, secret = 'SALT123') {
  const raw = `${level}-${secret}`;
  let hash = 0;
  for (let i = 0; i < raw.length; i++) {
    hash = (hash * 31 + raw.charCodeAt(i)) % (1e9+7);
  }
  return hash.toString(36).toUpperCase().padStart(6, '0');
}

function validatePasscode(passcode) {
  const levelPart = passcode.slice(0, 3);
  const hashPart = passcode.slice(3);
  const level = decodeLevel(levelPart);

  const expectedHash = generateHash(level);

  if (hashPart === expectedHash) {
    return level;
  }
  return null;
}
*/

const params = new URLSearchParams(window.location.search);
const code = params.get('code');
const content = document.getElementById('content');

if (code === null) {
  //Default case
  const h2 = document.createElement('h2');
  h2.textContent = 'QR code 挑戰';
  const msg1 = document.createElement('p');
  msg.textContent = '玩法：掃描QR code有機會進入下一層';
  const msg2 = document.createElement('p');
  msg.textContent = '(為了最佳遊戲體驗，請不要使用“存檔功能”)';
  const img = document.createElement('img');
  img.src = 'image/qr/1.png';
  img.alt = '開始遊戲';
  content.appendChild(h2);
  content.appendChild(msg1);
  content.appendChild(msg2);
  content.appendChild(img);
}/*
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
    const h2 = document.createElement('h2');
    h2.textContent = '你贏了🎉';
    const msg = document.createElement('p');
    msg.textContent = '成功到達第69層！';
    const img = document.createElement('img');
    img.src = `image/cat.gif`
    img.alt = '你贏了';
    const btn = document.createElement('button');
    btn.textContent = '再玩一次';
    btn.onclick = function () {
      window.location.href = 'https://douob000.github.io/qr_challenge/';
    };
    content.appendChild(h2);
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
      const h2 = document.createElement('h2');
      h2.textContent = '殘念！';
      const msg = document.createElement('p');
      msg.textContent = `總得分：${level-1}`;
      const img = document.createElement('img');
      img.src = `image/rick.gif`
      img.alt = '你輸了';
      const btn = document.createElement('button');
      btn.textContent = '前往主選單';
      btn.onclick = function () {
        window.location.href = 'https://douob000.github.io/qr_challenge/';
      };
      content.appendChild(h2);
      content.appendChild(msg);
      content.appendChild(img);
      content.appendChild(btn);
    }
  }
}
*/
