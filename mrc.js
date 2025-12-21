
async function SuppMarczy(target) {
    // Logika pengiriman/aksi di sini
    console.log("Memproses ke: " + target);
}

async function marczyy(target) {
    for (let i = 0; i < 10; i++) {
        await SuppMarczy(target);
    }
    console.log(chalk.red.bold("marczy Terkirim🔥"));
}
