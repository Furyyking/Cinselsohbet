document.addEventListener("DOMContentLoaded", () => {

  const loginPage = document.getElementById("loginPage");
  const chatPage = document.getElementById("chatPage");

  const loginForm = document.getElementById("loginForm");
  const logoutBtn = document.getElementById("logoutBtn");

  const currentUser = document.getElementById("currentUser");

  const messageForm = document.getElementById("messageForm");
  const messageInput = document.getElementById("messageInput");
  const messages = document.getElementById("messages");

  const menuBtn = document.getElementById("menuBtn");
  const sidebar = document.getElementById("sidebar");

  const usersBtn = document.getElementById("usersBtn");
  const usersPanel = document.getElementById("usersPanel");
  const closeUsers = document.getElementById("closeUsers");


  /* =========================
     GİRİŞ
  ========================= */

  loginForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const usernameInput = document.getElementById("username");
    const username = usernameInput.value.trim();

    if (username.length < 2) {
      alert("Lütfen en az 2 karakterlik bir kullanıcı adı girin.");
      usernameInput.focus();
      return;
    }

    currentUser.textContent = username;

    loginPage.style.display = "none";
    chatPage.classList.add("show");

    messageInput.focus();

  });


  /* =========================
     MESAJ GÖNDERME
  ========================= */

  messageForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const text = messageInput.value.trim();

    if (!text) {
      return;
    }

    addMessage(
      currentUser.textContent,
      text
    );

    messageInput.value = "";
    messageInput.focus();

  });


  function addMessage(username, text) {

    const message = document.createElement("div");

    message.className = "message";

    const messageHead = document.createElement("div");
    messageHead.className = "message-head";

    const name = document.createElement("strong");
    name.textContent = username;

    const time = document.createElement("time");

    const now = new Date();

    time.textContent = now.toLocaleTimeString("tr-TR", {
      hour: "2-digit",
      minute: "2-digit"
    });

    const messageText = document.createElement("div");

    messageText.className = "message-text";
    messageText.textContent = text;

    messageHead.appendChild(name);
    messageHead.appendChild(time);

    message.appendChild(messageHead);
    message.appendChild(messageText);

    messages.appendChild(message);

    messages.scrollTop = messages.scrollHeight;
  }


  /* =========================
     ÇIKIŞ
  ========================= */

  logoutBtn.addEventListener("click", () => {

    chatPage.classList.remove("show");

    loginPage.style.display = "flex";

    document.getElementById("username").value = "";
    document.getElementById("password").value = "";

    messageInput.value = "";

  });


  /* =========================
     MOBİL SOL MENÜ
  ========================= */

  menuBtn.addEventListener("click", () => {

    sidebar.classList.toggle("open");

  });


  /* =========================
     MOBİL KULLANICILAR
  ========================= */

  usersBtn.addEventListener("click", () => {

    usersPanel.classList.add("open");

  });


  closeUsers.addEventListener("click", () => {

    usersPanel.classList.remove("open");

  });


  /* =========================
     KANALLAR
  ========================= */

  const channels = document.querySelectorAll(".channel");

  channels.forEach((channel) => {

    channel.addEventListener("click", () => {

      channels.forEach((item) => {
        item.classList.remove("active");
      });

      channel.classList.add("active");

      if (window.innerWidth <= 800) {
        sidebar.classList.remove("open");
      }

    });

  });


  /* =========================
     ESC TUŞU
  ========================= */

  document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

      sidebar.classList.remove("open");
      usersPanel.classList.remove("open");

    }

  });


});
