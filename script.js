function createRoom() {
  const code = "LAMMA-" + Math.floor(1000 + Math.random() * 9000);
  alert("تم إنشاء الغرفة بنجاح!\nكود الغرفة: " + code);
}

function joinRoom() {
  const input = document.getElementById("roomCode");
  const code = input.value.trim();

  if (!code) {
    alert("من فضلك اكتب كود الغرفة أولاً.");
    return;
  }

  alert("جاري الدخول إلى الغرفة: " + code);
}

function chooseGame(gameName) {
  alert("اخترت لعبة: " + gameName + "\nاستعد لبدء اللّمة مع أصحابك!");
    }
